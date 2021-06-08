import * as React from 'react';
import styles from './FeedItem.module.css';

export type FeedItemProps = React.PropsWithChildren<{
  header: string,
  timestamp: string,
}>;

const FeedItem: React.FC<FeedItemProps> = ({
  header,
  timestamp,
  children
}) => {
  return (
    <div className={styles['feed-item']}>
      <h2>{header}</h2>
      <div className="text-gray-400 font-bold mb-4 sm:mb-6">{timestamp}</div>
      <div>{children}</div>
    </div>
  )
}
FeedItem.displayName = 'FeedItem';

export default FeedItem;