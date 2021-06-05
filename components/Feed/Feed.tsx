import * as React from 'react';
import FeedItem from '../FeedItem/FeedItem';
import styles from './Feed.module.css';

const Feed: React.FC = () => {
  return (
    <div className={styles.feed}>
      <FeedItem
        header="Headline Text"
        timestamp="May 24, 2021"
        body={<p>Quisque bibendum fermentum augue, eget ullamcorper ante semper eu. Nunc semper, mi vitae tincidunt gravida, nunc ex facilisis urna, condimentum sagittis elit purus et ligula. Cras et aliquet magna. Nulla quis enim porta enim posuere rutrum. Vivamus purus lacus, posuere sit amet libero vitae, consectetur condimentum libero. Ut mattis justo nec mauris viverra, vitae egestas odio lobortis. Aliquam iaculis tortor sed velit fermentum vehicula. Maecenas ullamcorper ante justo, in pellentesque ex dignissim vel.</p>}
      />
      <FeedItem
        header="Headline Text"
        timestamp="May 24, 2021"
        body={<p>Quisque bibendum fermentum augue, eget ullamcorper ante semper eu. Nunc semper, mi vitae tincidunt gravida, nunc ex facilisis urna, condimentum sagittis elit purus et ligula. Cras et aliquet magna. Nulla quis enim porta enim posuere rutrum. Vivamus purus lacus, posuere sit amet libero vitae, consectetur condimentum libero. Ut mattis justo nec mauris viverra, vitae egestas odio lobortis. Aliquam iaculis tortor sed velit fermentum vehicula. Maecenas ullamcorper ante justo, in pellentesque ex dignissim vel.</p>}
      />
      <FeedItem
        header="Headline Text"
        timestamp="May 24, 2021"
        body={<p>Quisque bibendum fermentum augue, eget ullamcorper ante semper eu. Nunc semper, mi vitae tincidunt gravida, nunc ex facilisis urna, condimentum sagittis elit purus et ligula. Cras et aliquet magna. Nulla quis enim porta enim posuere rutrum. Vivamus purus lacus, posuere sit amet libero vitae, consectetur condimentum libero. Ut mattis justo nec mauris viverra, vitae egestas odio lobortis. Aliquam iaculis tortor sed velit fermentum vehicula. Maecenas ullamcorper ante justo, in pellentesque ex dignissim vel.</p>}
      />
      <FeedItem
        header="Headline Text"
        timestamp="May 24, 2021"
        body={<p>Quisque bibendum fermentum augue, eget ullamcorper ante semper eu. Nunc semper, mi vitae tincidunt gravida, nunc ex facilisis urna, condimentum sagittis elit purus et ligula. Cras et aliquet magna. Nulla quis enim porta enim posuere rutrum. Vivamus purus lacus, posuere sit amet libero vitae, consectetur condimentum libero. Ut mattis justo nec mauris viverra, vitae egestas odio lobortis. Aliquam iaculis tortor sed velit fermentum vehicula. Maecenas ullamcorper ante justo, in pellentesque ex dignissim vel.</p>}
      />
    </div>
  )
}
Feed.displayName = 'Feed';

export default Feed;