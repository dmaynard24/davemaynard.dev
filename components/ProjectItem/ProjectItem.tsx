import * as React from 'react';

import ItemCard from '../ItemCard/ItemCard';
import {ProjectItemProps} from '../../types';
import Tags from '../Tags/Tags';

const ProjectItem: React.FC<ProjectItemProps> = ({
  id,
  name,
  imageUrl,
  timestamp,
  tags,
  objectPosition = 'center center',
  children,
}) => {
  return (
    <div className="mb-12 sm:mb-14 last-mb-0">
      <ItemCard
        id={id}
        name={name}
        imageUrl={imageUrl}
        timestamp={timestamp}
        tags={tags}
        objectPosition={objectPosition}
      />
      <Tags tags={tags} />
      {children}
    </div>
  );
};
ProjectItem.displayName = 'ProjectItem';

export default ProjectItem;
