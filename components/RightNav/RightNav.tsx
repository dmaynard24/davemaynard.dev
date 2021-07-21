import * as React from 'react';
import Close from '../icons/Close/Close';
import Nav from '../Nav/Nav';

const RightNav: React.FC<{
  closeMenu: () => void;
}> = ({closeMenu}) => {
  return (
    <div className="pt-24 pb-12 sm:pb-14 lg:py-16">
      <button
        type="button"
        onClick={closeMenu}
        className="w-8 h-8 flex items-center justify-center absolute top-4 right-8 z-10 lg:hidden"
      >
        <div className="w-5 h-5">
          <Close />
        </div>
      </button>
      <Nav />
    </div>
  );
};
RightNav.displayName = 'RightNav';

export default RightNav;
