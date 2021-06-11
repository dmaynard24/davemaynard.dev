import * as React from 'react';
import Timestamp from '../Timestamp/Timestamp';
import styles from './FeedItem.module.css';

export type FeedItemProps = React.PropsWithChildren<{
  header: string;
  timestamp: string;
}>;

const FeedItem: React.FC<FeedItemProps> = ({ header, timestamp, children }) => (
  <div className={styles['feed-item']}>
    <h2>{header}</h2>
    <Timestamp text={timestamp} />
    <div>{children}</div>
  </div>
);
FeedItem.displayName = 'FeedItem';

export default FeedItem;
