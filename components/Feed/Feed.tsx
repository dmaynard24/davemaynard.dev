import * as React from 'react';
import isProjectItem from '../../util/isProjectItem';
import BlogItem, {BlogItemProps} from '../BlogItem/BlogItem';
import ProjectItem, {ProjectItemProps} from '../ProjectItem/ProjectItem';

const Feed: React.FC<{
  items: BlogItemProps[] | ProjectItemProps[];
}> = ({items}) => {
  return (
    <>
      {items.map((feedItem) => {
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
