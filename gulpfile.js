const gulp = require(`gulp`);
const sass = require(`gulp-sass`);
const concat = require(`gulp-concat`);
const uglify = require(`gulp-uglify`);
const babel = require(`gulp-babel`);
const fs = require(`fs`);
const minify = require(`gulp-clean-css`);
const del = require(`del`);
const autoprefixer = require(`gulp-autoprefixer`);
const runSequence = require(`run-sequence`);
const imagemin = require(`gulp-imagemin`);
const imageminMozjpeg = require(`imagemin-mozjpeg`);
const pngquant = require(`imagemin-pngquant`);
const plumber = require(`gulp-plumber`);

const browserSync = require(`browser-sync`).create();

const options = {
  cssFilename: `styles`,
  jsFilename: `scripts`,
};

// flag for catching errors and passing between tasks
let caughtError = false;

/* --------------------------- development process for building ---------------------------------  */
gulp.task(`default`, (callback) => {
  runSequence(`clean:dist`, [`html`, `sass`, `js`, `images`, `favicon`, `move:resume`, `move:fonts`, `move:lib`, `move:demos`, `init:browserSync`, `watch`]);
});

gulp.task(`release`, (callback) => {
  runSequence(`clean:dist`, [`html`, `sass`, `js`, `images`, `favicon`, `move:resume`, `move:fonts`, `move:lib`, `move:demos`]);
});

/* browser sync auto reloads the browser */
gulp.task(`init:browserSync`, () => {
  browserSync.init({
    server: {
      baseDir: `dist/`,
    },
  });
});

/* trigger a manual reload */
gulp.task(`browserSync`, (done) => {
  if (!caughtError) {
    browserSync.reload();
  }
  done();
});

gulp.task(`html`, () => gulp.src([`src/index.html`]).pipe(gulp.dest(`dist/`)));

/* converts the sass to css, autoprefixes it, and moves to proper location */
gulp.task(`sass`, () => {
  caughtError = false;
  return gulp
    .src(`src/scss/${options.cssFilename}.scss`)
    .pipe(
      plumber({
        errorHandler(error) {
          caughtError = true;
          const err = `Sass error: ${error.message}`;
          console.log(err);
          browserSync.notify(err, 15000);
        },
      }),
    )
    .pipe(sass())
    .pipe(
      autoprefixer({
        browsers: [`last 2 versions`, `android 4`],
        cascade: false,
      }),
    )
    .pipe(minify({ compatibility: `ie8` }))
    .pipe(gulp.dest(`dist/css/`));
});

/* minifies scripts.js and moves it */
gulp.task(`js`, () => {
  caughtError = false;
  const partials = fs.readFileSync(`src/js/${options.jsFilename}.txt`, `utf-8`);
  arrPartials = partials.replace(/["']/g, ``).split(/\r?\n/);
  // remove empty lines
  for (let i = 0; i < arrPartials.length; i++) {
    if (arrPartials[i] === `` || arrPartials[i] === undefined) {
      arrPartials.splice(i, 1);
      i--;
    }
  }

  return gulp
    .src(arrPartials)
    .pipe(
      plumber({
        errorHandler(error) {
          caughtError = true;
          const err = `JavaScript error: ${error.message}`;
          console.log(err);
          browserSync.notify(err, 15000);
        },
      }),
    )
    .pipe(
      babel({
        presets: [`env`],
      }),
    )
    .pipe(concat(`${options.jsFilename}.js`))
    .pipe(uglify())
    .pipe(gulp.dest(`dist/js/`));
});

/* watchers to run tasks automatically then trigger browser reload */
gulp.task(`watch`, () => {
  gulp.watch(`src/scss/**/*.scss`, () => {
    runSequence(`sass`, [`browserSync`]);
  });
  gulp.watch(`src/*.html`, () => {
    runSequence(`html`, [`browserSync`]);
  });
  gulp.watch([`src/js/**/*.js`, `src/js/${options.jsFilename}.js`], () => {
    runSequence(`js`, [`browserSync`]);
  });
});

/* cleans out folder */
gulp.task(`clean:dist`, () => del.sync(`dist`, { force: true }));

/* grab all images and move them */
gulp.task(`images`, () =>
  gulp
    .src(`src/assets/img/**/*.+(png|jpg|gif|svg)`)
    .pipe(
      imagemin([
        imageminMozjpeg({
          quality: 80,
        }),
        pngquant({
          quality: 80,
        }),
      ]),
    )
    .pipe(gulp.dest(`dist/assets/img/`)),
);

gulp.task(`favicon`, () => gulp.src(`src/assets/favicon/**/*.*`).pipe(gulp.dest(`dist/assets/favicon/`)));

gulp.task(`move:resume`, () => gulp.src(`src/assets/resume/**/*.*`).pipe(gulp.dest(`dist/assets/resume/`)));

gulp.task(`move:fonts`, () => gulp.src(`src/assets/fonts/**/**.*`).pipe(gulp.dest(`dist/assets/fonts/`)));

gulp.task(`move:lib`, () => gulp.src(`src/lib/**/*.*`).pipe(gulp.dest(`dist/lib/`)));

gulp.task(`move:demos`, () => gulp.src(`src/demos/**/*.*`).pipe(gulp.dest(`dist/`)));
