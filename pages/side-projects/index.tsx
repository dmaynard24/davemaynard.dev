import * as React from 'react';
import TextHero from '../../components/TextHero/TextHero';
import ThreeColumnTemplate from '../../components/ThreeColumnTemplate/ThreeColumnTemplate';

const SideProjects: React.FC = () => {
  return (
    <ThreeColumnTemplate>
      <TextHero headline="Side Projects" />
    </ThreeColumnTemplate>
  );
};
SideProjects.displayName = 'SideProjects';

export default SideProjects;
