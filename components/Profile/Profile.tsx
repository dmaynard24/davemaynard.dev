import * as React from 'react';

const Profile: React.FC = () => (
  <>
    <p>
      <strong className="text-gray-900">
        Dave Maynard
        <br />
        Front-End Engineer at Amazon
      </strong>
    </p>
    <p>
      <a href="mailto:davemaynard24@gmail.com">Send Email</a>
      <br />
      <a href="/assets/Dave_Maynard_Resume_2020.pdf" download>
        View Resume
      </a>
    </p>
  </>
);
Profile.displayName = 'Profile';

export default Profile;
