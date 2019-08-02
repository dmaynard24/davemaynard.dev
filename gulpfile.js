var gulp = require('gulp'),
  sass = require('gulp-sass'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  babel = require('gulp-babel'),
  fs = require('fs'),
  minify = require('gulp-clean-css'),
  del = require('del'),
  autoprefixer = require('gulp-autoprefixer'),
  runSequence = require('run-sequence'),
  imagemin = require('gulp-imagemin'),
  imageminMozjpeg = require('imagemin-mozjpeg'),
  pngquant = require('imagemin-pngquant'),
  plumber = require('gulp-plumber'),
  browserSync = require('browser-sync').create();

let options = {
  cssFilename: 'styles',
  jsFilename: 'scripts'
};

// flag for catching errors and passing between tasks
let caughtError = false;

/* --------------------------- development process for building ---------------------------------  */
gulp.task('default', function(callback) {
  runSequence('clean:dist', [
    'html',
    'sass',
    'js',
    'images',
    'move:fonts',
    'move:lib',
    'init:browserSync',
    'watch'
  ]);
});

gulp.task('release', function(callback) {
  runSequence('clean:dist', [
    'html',
    'sass',
    'js',
    'images',
    'move:fonts',
    'move:lib'
  ]);
});

/* browser sync auto reloads the browser */
gulp.task('init:browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'dist/'
    }
  });
});

/* trigger a manual reload */
gulp.task('browserSync', function(done) {
  if (!caughtError) {
    browserSync.reload();
  }
  done();
});

/* converts the sass to css, autoprefixes it, and moves to proper location */
gulp.task('sass', function() {
  caughtError = false;
  return gulp
    .src(`src/scss/${options.cssFilename}.scss`)
    .pipe(
      plumber({
        errorHandler: function(error) {
          caughtError = true;
          let err = 'Sass error: ' + error.message;
          console.log(err);
          browserSync.notify(err, 15000);
        }
      })
    )
    .pipe(sass())
    .pipe(
      autoprefixer({
        browsers: ['last 2 versions', 'android 4'],
        cascade: false
      })
    )
    .pipe(minify({ compatibility: 'ie8' }))
    .pipe(gulp.dest('dist/css/'));
});

/* minifies scripts.js and moves it */
gulp.task('js', function() {
  caughtError = false;
  let partials = fs.readFileSync(`src/js/${options.jsFilename}.js`, 'utf-8');
  arrPartials = partials.replace(/["']/g, '').split(/\r?\n/);
  // remove empty lines
  for (let i = 0; i < arrPartials.length; i++) {
    if (arrPartials[i] == '' || arrPartials[i] == undefined) {
      arrPartials.splice(i, 1);
      i--;
    }
  }

  return gulp
    .src(arrPartials)
    .pipe(
      plumber({
        errorHandler: function(error) {
          caughtError = true;
          let err = 'JavaScript error: ' + error.message;
          console.log(err);
          browserSync.notify(err, 15000);
        }
      })
    )
    .pipe(
      babel({
        presets: ['env']
      })
    )
    .pipe(concat(`${options.jsFilename}.js`))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js/'));
});

/* watchers to run tasks automatically then trigger browser reload */
gulp.task('watch', function() {
  gulp.watch('src/scss/**/*.scss', function() {
    runSequence('sass', ['browserSync']);
  });
  gulp.watch('src/*.html', function() {
    runSequence('html', ['browserSync']);
  });
  gulp.watch(
    ['src/js/**/*.js', `src/js/${options.jsFilename}.js`],
    function() {
      runSequence('js', ['browserSync']);
    }
  );
});

/* cleans out folder */
gulp.task('clean:dist', function() {
  return del.sync('dist', { force: true });
});

/* grab all images and move them */
gulp.task('images', function() {
  return gulp
    .src('src/assets/img/**/*.+(png|jpg|gif|svg)')
    .pipe(
      imagemin([
        imageminMozjpeg({
          quality: 80
        }),
        pngquant({
          quality: 80
        })
      ])
    )
    .pipe(gulp.dest('dist/assets/img/'));
});

gulp.task('move:fonts', function() {
  return gulp
    .src('src/assets/fonts/**/**.*')
    .pipe(gulp.dest('dist/assets/fonts/'));
});

gulp.task('move:lib', function() {
  return gulp.src('src/lib/**/*.*').pipe(gulp.dest('dist/lib/'));
});

gulp.task('html', function() {
  return gulp.src(['src/**/*.html']).pipe(gulp.dest('dist/'));
});
