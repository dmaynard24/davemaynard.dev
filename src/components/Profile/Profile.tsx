import * as React from 'react';

const Profile: React.FC = () => {
  return (
    <div className="profile">
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