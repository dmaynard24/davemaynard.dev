import * as React from 'react';
import styles from './Profile.module.css';

const Profile: React.FC = () => (
  <div className={styles.profile}>
    <h1 className="text-sm sm:text-base mb-4 sm:mb-6">
      Dave Maynard
      <br />
      Front-End Engineer at Amazon
    </h1>
    <p>
      <a href="mailto:davemaynard24@gmail.com">Send Email</a>
      <br />
      <a href="/assets/Dave_Maynard_Resume_2020.pdf" download>
        View Resume
      </a>
    </p>
  </div>
);
Profile.displayName = 'Profile';

export default Profile;
