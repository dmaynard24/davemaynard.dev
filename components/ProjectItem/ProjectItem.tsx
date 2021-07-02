import * as React from 'react';
import {ProjectItemProps} from '../../types';
import ItemCard from '../ItemCard/ItemCard';
import Tags from '../Tags/Tags';

const ProjectItem: React.FC<ProjectItemProps> = ({
  id,
  name,
  backgroundImageUrl,
  timestamp,
  tags,
  backgroundPosition = 'center center',
  children,
}) => {
  return (
    <div className="mb-12 sm:mb-14 last-mb-0">
      <ItemCard
        id={id}
        name={name}
        backgroundImageUrl={backgroundImageUrl}
        timestamp={timestamp}
        tags={tags}
        backgroundPosition={backgroundPosition}
      />
      <Tags tags={tags} />
      {children}
    </div>
  );
};
ProjectItem.displayName = 'ProjectItem';

export default ProjectItem;
