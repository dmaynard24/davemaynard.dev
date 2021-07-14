import * as React from 'react';
import resolveConfig from 'tailwindcss/resolveConfig';

import Close from '../icons/Close/Close';
import Menu from '../icons/Menu/Menu';
import Nav from '../Nav/Nav';
import Profile from '../Profile/Profile';
import tailwindConfig from '../../tailwind.config.js';
import User from '../icons/User/User';

const {screens} = resolveConfig(tailwindConfig).theme;

const PageTemplate: React.FC = ({children}) => {
  const [isProfileActive, setIsProfileActive] = React.useState(false);
  const [isMenuActive, setIsMenuActive] = React.useState(false);
  const [isProfileBlurry, setIsProfileBlurry] = React.useState(false);
  const [isMainBlurry, setIsMainBlurry] = React.useState(false);
  const [isMotionEnabled, setIsMotionEnabled] = React.useState(true);
  const [windowWidth, setWindowWidth] = React.useState(0);

  const handleResize = React.useCallback(() => {
    setWindowWidth(window.innerWidth);
    setIsMotionEnabled(false);
  }, []);

  React.useEffect(() => {
    setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize, false);

    return () => {
      window.removeEventListener('resize', handleResize, false);
    };
  }, [handleResize]);

  React.useEffect(() => {
    setIsProfileBlurry(() => {
      if (window.matchMedia(`(min-width: ${screens.lg})`).matches) {
        return false;
      }
      return isMenuActive;
    });
    setIsMainBlurry(() => {
      if (window.matchMedia(`(min-width: ${screens.lg})`).matches) {
        return false;
      }
      if (window.matchMedia(`(min-width: ${screens.md})`).matches) {
        return isMenuActive;
      }
      return isProfileActive || isMenuActive;
    });
  }, [isProfileActive, isMenuActive, windowWidth]);

  const openProfile = () => {
    setIsMenuActive(false);
    setIsProfileActive(true);
    setIsMotionEnabled(true);
  };

  const closeProfile = () => {
    setIsMotionEnabled(true);
    setIsProfileActive(false);
  };

  const openMenu = () => {
    setIsProfileActive(false);
    setIsMenuActive(true);
    setIsMotionEnabled(true);
  };

  const closeMenu = () => {
    setIsMotionEnabled(true);
    setIsMenuActive(false);
  };

  return (
    <div className="max-w-screen-xl mx-auto">
      <nav className="py-4 px-8 lg:hidden fixed top-0 left-0 w-full z-10 bg-white bg-opacity-80 backdrop-filter backdrop-blur-md flex justify-end">
        <button
          type="button"
          onClick={openProfile}
          className="w-8 h-8 flex items-center justify-center cursor-pointer mr-auto md:hidden"
        >
          <div className="w-5 h-5">
            <User />
          </div>
        </button>
        <button type="button" onClick={openMenu} className="w-8 h-8 flex items-center justify-center cursor-pointer">
          <div className="w-5 h-5">
            <Menu />
          </div>
        </button>
      </nav>
      <div className="px-8">
        <div className="grid grid-cols-6 md:grid-cols-4 lg:grid-cols-6 gap-x-8 lg:gap-x-5 xl:gap-x-8 relative">
          <aside
            className={`col-span-6 md:col-span-1 lg:col-span-1 fixed md:sticky max-h-screen top-0 left-0 w-full sm:w-1/3 md:w-auto h-full bg-white z-20 transform md:transform-none md:transition-none ${
              isProfileActive ? 'translate-x-0' : '-translate-x-full'
            } ${isProfileBlurry && 'filter blur-md'} ${isMotionEnabled && 'transition-transform'}`}
          >
            <div className="pt-24 pb-8 lg:py-14">
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
          </aside>
          <main
            className={`col-span-6 md:col-span-3 lg:col-span-4 md:px-8 lg:px-14 ${isMainBlurry && 'filter blur-md'}`}
          >
            <div className="pt-24 pb-8 lg:py-14">{children}</div>
          </main>
          <aside
            className={`col-span-6 lg:col-span-1 fixed lg:sticky max-h-screen top-0 right-0 w-full sm:w-1/3 lg:w-auto h-full bg-white z-20 transform lg:transform-none lg:transition-none ${
              isMenuActive ? 'translate-x-0' : 'translate-x-full'
            } ${isMotionEnabled && 'transition-transform'}`}
          >
            <div className="pt-24 pb-8 lg:py-14">
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
          </aside>
        </div>
      </div>
    </div>
  );
};
PageTemplate.displayName = 'PageTemplate';

export default PageTemplate;
