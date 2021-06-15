import * as React from 'react';
import ArrowLink from '../ArrowLink/ArrowLink';
import Tags from '../Tags/Tags';
import Timestamp from '../Timestamp/Timestamp';

export type ProjectItemProps = React.PropsWithChildren<{
  id: string;
  name: string;
  backgroundImageUrl: string;
  timestamp: string;
  tags: string[];
  backgroundPosition?: string;
}>;

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
    <div className="mb-12 sm:mb-14 last:mb-0">
      <div
        className="relative mb-4 sm:mb-6 rounded-t-lg overflow-hidden bg-cover"
        style={{
          backgroundImage: `url(${backgroundImageUrl})`,
          backgroundPosition,
        }}
      >
        <div className="aspect-w-16 aspect-h-9" />
        <div className="absolute bottom-0 left-0 h-1/3 w-full bg-gradient-to-t from-gray-900" />
        <div className="absolute bottom-0 px-4 sm:px-6 text-white">
          <Timestamp text={timestamp} />
          <h2 className="text-white">{name}</h2>
        </div>
      </div>
      <div className="px-4 sm:px-6">
        <Tags tags={tags} />
        {children}
        <ArrowLink href={`projects/${id}`} text="Read More" />
      </div>
    </div>
  );
};
ProjectItem.displayName = 'ProjectItem';

export default ProjectItem;
