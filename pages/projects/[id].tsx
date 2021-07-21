import * as React from 'react';
import {useRouter} from 'next/router';

import ProjectItem from '../../components/ProjectItem/ProjectItem';
import {projectItemsById} from '.';
import ThreeColumnTemplate from '../../components/ThreeColumnTemplate/ThreeColumnTemplate';

const ProjectById: React.FC = () => {
  const router = useRouter();
  const {id} = router.query;
  const projectItem = projectItemsById[id as string];

  if (!projectItem) return null;
  return (
    <ThreeColumnTemplate>
      <ProjectItem {...projectItem} />
    </ThreeColumnTemplate>
  );
};
ProjectById.displayName = 'ProjectById';

export default ProjectById;
