import * as React from 'react';
import BlogItem, {BlogItemProps} from '../BlogItem/BlogItem';
import ProjectItem, {ProjectItemProps} from '../ProjectItem/ProjectItem';

type Props = {
  feedItems: BlogItemProps[] | ProjectItemProps[];
};

const Feed: React.FC<Props> = ({feedItems}) => {
  const isProjectItem = (item: BlogItemProps | ProjectItemProps): item is ProjectItemProps => {
    return (item as ProjectItemProps).cardImageUrl !== undefined;
  };

  return (
    <>
      {feedItems.map((feedItem) => {
        if (isProjectItem(feedItem)) {
          return <ProjectItem key={feedItem.id} {...feedItem} />;
        }
        return <BlogItem key={feedItem.id} {...feedItem} />;
      })}
    </>
  );
};
Feed.displayName = 'Feed';

export default Feed;
