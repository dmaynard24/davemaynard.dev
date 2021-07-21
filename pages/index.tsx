import * as React from 'react';
import ArrowLink from '../components/ArrowLink/ArrowLink';
import Author from '../components/Author/Author';
import Social from '../components/Social/Social';
import TextHero from '../components/TextHero/TextHero';
import TwoColumnTemplate from '../components/TwoColumnTemplate/TwoColumnTemplate';

const Home: React.FC = () => {
  return (
    <TwoColumnTemplate>
      <div className="max-w-xs sm:max-w-sm mb-12 sm:mb-14 lg:mb-16">
        <Author inline />
      </div>
      <TextHero
        headline="Hey! I'm Dave Maynard. I help people bridge the gap between design and development."
        markPosition="above"
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam rutrum semper ipsum, at finibus eros volutpat
          et. Curabitur et orci purus. Etiam nec risus arcu. Proin interdum risus vel quam elementum euismod. Sed ac
          ante congue, venenatis magna in, volutpat lacus. Donec iaculis neque in nunc interdum facilisis. Etiam massa
          sem, faucibus at arcu ac, tincidunt interdum nulla. Nulla facilisi. Nunc at laoreet felis. Nulla facilisi.
          Nunc at laoreet felis.
        </p>
        <ArrowLink text="View My Projects" href="/projects" />
      </TextHero>
      <div className="w-52">
        <Social />
      </div>
    </TwoColumnTemplate>
  );
};
Home.displayName = 'Home';

export default Home;
