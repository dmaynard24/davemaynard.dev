import * as React from 'react';
import PageTemplate from '../../components/PageTemplate/PageTemplate';
import ProjectItem from '../../components/ProjectItem/ProjectItem';

const Projects: React.FC = () => {
  return (
    <PageTemplate>
      <ProjectItem />
    </PageTemplate>
  );
};
Projects.displayName = 'Projects';

export default Projects;
