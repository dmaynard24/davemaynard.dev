import * as React from 'react';
import styles from './Profile.module.css';

const Profile: React.FC = () => {
  return (
    <div className={styles.profile}>
      <h1>
        Dave Maynard
        <br />
        Front-End Engineer @ Amazon
      </h1>
      <div>
        <a href="mailto:davemaynard24@gmail.com">Send Email</a>
      </div>
      <div>
        <a href="#" download>View Resume</a>
      </div>
    </div>
  )
}
Profile.displayName = 'Profile';

export default Profile;