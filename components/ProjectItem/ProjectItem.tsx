import * as React from 'react';

import ArrowLink from '../ArrowLink/ArrowLink';
import ItemCard from '../ItemCard/ItemCard';
import {ProjectItemProps} from '../../types';
import Stats from '../Stats/Stats';
import Tags from '../Tags/Tags';

const ProjectItem: React.FC<ProjectItemProps> = ({
  id,
  name,
  imageUrl,
  timestamp,
  tags,
  stats,
  objectPosition = 'center center',
  liveSiteHref,
  children,
}) => {
  return (
    <div className="mb-10 sm:mb-12 lg:mb-14 last-mb-0">
      <ItemCard
        id={id}
        name={name}
        imageUrl={imageUrl}
        timestamp={timestamp}
        tags={tags}
        objectPosition={objectPosition}
        headerSize="h1"
      />
      <Tags tags={tags} />
      {children}
      {stats && <Stats stats={stats} />}
      {liveSiteHref && <ArrowLink href={liveSiteHref} text="Visit the Site" external />}
    </div>
  );
};
ProjectItem.displayName = 'ProjectItem';

export default ProjectItem;
