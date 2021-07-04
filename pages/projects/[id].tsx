import * as React from 'react';
import {useRouter} from 'next/router';

import PageTemplate from '../../components/PageTemplate/PageTemplate';
import ProjectItem from '../../components/ProjectItem/ProjectItem';
import {projectItemsById} from '.';

const ProjectById: React.FC = () => {
  const router = useRouter();
  const {id} = router.query;
  const projectItem = projectItemsById[id as string];

  if (!projectItem) return null;
  return (
    <PageTemplate>
      <ProjectItem {...projectItem} />
    </PageTemplate>
  );
};
ProjectById.displayName = 'ProjectById';

export default ProjectById;
