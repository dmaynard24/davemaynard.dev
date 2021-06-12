import * as React from 'react';
import Timestamp from '../Timestamp/Timestamp';

export type BlogItemProps = React.PropsWithChildren<{
  id: string;
  header: string;
  timestamp: string;
}>;

const BlogItem: React.FC<BlogItemProps> = ({header, timestamp, children}) => (
  <div className="mb-12 sm:mb-14 last:mb-0">
    <h2>{header}</h2>
    <Timestamp text={timestamp} />
    <div>{children}</div>
  </div>
);
BlogItem.displayName = 'FeedItem';

export default BlogItem;
