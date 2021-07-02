import * as React from 'react';
import {BlogItemProps, ProjectItemProps} from '../../types';
import isProjectItem from '../../util/isProjectItem';
import BlogItem from '../BlogItem/BlogItem';
import ProjectItem from '../ProjectItem/ProjectItem';

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
