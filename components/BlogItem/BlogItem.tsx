import * as React from 'react';
import {BlogItemProps} from '../../types';
import Timestamp from '../Timestamp/Timestamp';

const BlogItem: React.FC<BlogItemProps> = ({header, timestamp, children}) => (
  <div className="mb-12 sm:mb-14 lg:mb-16 last:mb-0">
    <h2>{header}</h2>
    <Timestamp text={timestamp} />
    <div>{children}</div>
  </div>
);
BlogItem.displayName = 'FeedItem';

export default BlogItem;
