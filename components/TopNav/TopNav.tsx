import * as React from 'react';
import Menu from '../icons/Menu/Menu';
import User from '../icons/User/User';

const TopNav: React.FC<{
  openMenu: () => void;
  openProfile?: () => void;
}> = ({openMenu, openProfile}) => {
  return (
    <nav className="py-4 px-8 lg:hidden fixed top-0 left-0 w-full z-20 bg-white bg-opacity-80 backdrop-filter backdrop-blur-md flex justify-end">
      {openProfile !== undefined && (
        <button
          type="button"
          onClick={openProfile}
          className="w-8 h-8 flex items-center justify-center cursor-pointer mr-auto md:hidden"
        >
          <div className="w-5 h-5">
            <User />
          </div>
        </button>
      )}
      <button type="button" onClick={openMenu} className="w-8 h-8 flex items-center justify-center cursor-pointer">
        <div className="w-5 h-5">
          <Menu />
        </div>
      </button>
    </nav>
  );
};
TopNav.displayName = 'TopNav';

export default TopNav;
