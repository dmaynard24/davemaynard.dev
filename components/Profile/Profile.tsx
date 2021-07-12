import * as React from 'react';

import Author from '../Author/Author';
import Contact from '../Contact/Contact';
import Social from '../Social/Social';
import styles from './Profile.module.css';

const Profile: React.FC = () => {
  return (
    <div className={styles.profile}>
      <Author />
      <div className="pt-6 lg:pt-8">
        <Contact />
      </div>
      <div className="pt-6 lg:pt-8">
        <Social />
      </div>
    </div>
  );
};
Profile.displayName = 'Profile';

export default Profile;
