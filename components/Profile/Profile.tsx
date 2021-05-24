import * as React from 'react';
import styles from './Profile.module.css';

const Profile: React.FC = () => {
  return (
    <div className={`${styles.profile} py-8 lg:py-12`}>
      <h1>
        Dave Maynard
        <br />
        Front-End Engineer @ Amazon
      </h1>
      <div>
        <a href="mailto:davemaynard24@gmail.com">davemaynard24@gmail.com</a>
      </div>
      <div>
        <a href="#" download>View Resume</a>
      </div>
    </div>
  )
}
Profile.displayName = 'Profile';

export default Profile;