import * as React from 'react';
import TextHero from '../../components/TextHero/TextHero';
import ThreeColumnTemplate from '../../components/ThreeColumnTemplate/ThreeColumnTemplate';

const Talks: React.FC = () => {
  return (
    <ThreeColumnTemplate>
      <TextHero headline="Talks" />
    </ThreeColumnTemplate>
  );
};
Talks.displayName = 'Talks';

export default Talks;
