import * as React from 'react';
import Tags from '../Tags/Tags';
import Timestamp from '../Timestamp/Timestamp';

export type ProjectItemProps = React.PropsWithChildren<{
  id: string;
  name: string;
  cardImageUrl: string;
  timestamp: string;
  tags: string[];
}>;

const ProjectItem: React.FC<ProjectItemProps> = ({name, cardImageUrl, timestamp, tags, children}) => {
  return (
    <div className="mb-12 sm:mb-14 last:mb-0">
      <div
        className="relative mb-4 sm:mb-6 rounded-t-lg overflow-hidden bg-cover"
        style={{
          backgroundImage: `url(${cardImageUrl})`,
        }}
      >
        <div className="aspect-w-16 aspect-h-9" />
        <div className="absolute bottom-0 left-0 h-1/3 w-full bg-gradient-to-t from-gray-900" />
        <h2 className="absolute bottom-0 px-4 sm:px-6 text-white">{name}</h2>
      </div>
      <div className="px-4 sm:px-6">
        <Timestamp text={timestamp} />
        <Tags tags={tags} />
        {children}
      </div>
    </div>
  );
};
ProjectItem.displayName = 'ProjectItem';

export default ProjectItem;
