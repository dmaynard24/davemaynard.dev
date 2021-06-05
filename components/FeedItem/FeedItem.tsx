import * as React from 'react';
import styles from './FeedItem.module.css';

const FeedItem: React.FC<{
  header: string,
  timestamp: string,
  body: React.ReactNode
}> = ({
  header,
  timestamp,
  body
}) => {
  return (
    <div className={styles['feed-item']}>
      <h2>{header}</h2>
      <div className="text-gray-400 mb-4 sm:mb-6">{timestamp}</div>
      <div>{body}</div>
    </div>
  )
}
FeedItem.displayName = 'FeedItem';

export default FeedItem;