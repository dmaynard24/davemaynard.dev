import * as React from 'react';
import Close from '../icons/Close/Close';
import Profile from '../Profile/Profile';

const LeftProfile: React.FC<{
  closeProfile: () => void;
}> = ({closeProfile}) => {
  return (
    <div className="pt-24 pb-12 sm:pb-14 lg:py-16">
      <button
        type="button"
        onClick={closeProfile}
        className="w-8 h-8 flex items-center justify-center absolute top-4 right-8 z-10 md:hidden"
      >
        <div className="w-5 h-5">
          <Close />
        </div>
      </button>
      <Profile />
    </div>
  );
};
LeftProfile.displayName = 'LeftProfile';

export default LeftProfile;
