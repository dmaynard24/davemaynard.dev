import * as React from 'react';
import resolveConfig from 'tailwindcss/resolveConfig';

import LeftProfile from '../LeftProfile/LeftProfile';
import RightNav from '../RightNav/RightNav';
import tailwindConfig from '../../tailwind.config.js';
import TopNav from '../TopNav/TopNav';
import useNavigation from '../../hooks/useNavigation';

const {screens} = resolveConfig(tailwindConfig).theme;

const TwoColumnTemplate: React.FC = ({children}) => {
  const [
    isProfileActive,
    isMenuActive,
    isProfileBlurry,
    isMainBlurry,
    isMotionEnabled,
    openProfile,
    closeProfile,
    openMenu,
    closeMenu,
  ] = useNavigation(screens);

  return (
    <div className="max-w-screen-xl mx-auto">
      <TopNav openProfile={openProfile} openMenu={openMenu} />
      <div className="px-8">
        <div className="grid grid-cols-6 md:grid-cols-4 lg:grid-cols-6 gap-x-8 lg:gap-x-5 xl:gap-x-8 relative">
          <aside
            className={`col-span-6 md:col-span-1 lg:col-span-1 fixed md:sticky max-h-screen top-0 left-0 w-full sm:w-1/3 md:w-auto h-full bg-white z-20 transform md:transform-none md:transition-none ${
              isProfileActive ? 'translate-x-0' : '-translate-x-full'
            } ${isProfileBlurry && 'filter blur-md'} ${isMotionEnabled && 'transition-transform'}`}
          >
            <LeftProfile closeProfile={closeProfile} />
          </aside>
          <main
            className={`col-span-6 md:col-span-3 lg:col-span-4 md:px-8 lg:px-14 ${isMainBlurry && 'filter blur-md'}`}
          >
            <div className="pt-24 pb-12 sm:pb-14 lg:py-16">{children}</div>
          </main>
          <aside
            className={`col-span-6 lg:col-span-1 fixed lg:sticky max-h-screen top-0 right-0 w-full sm:w-1/3 lg:w-auto h-full bg-white z-20 transform lg:transform-none lg:transition-none ${
              isMenuActive ? 'translate-x-0' : 'translate-x-full'
            } ${isMotionEnabled && 'transition-transform'}`}
          >
            <RightNav closeMenu={closeMenu} />
          </aside>
        </div>
      </div>
    </div>
  );
};
TwoColumnTemplate.displayName = 'TwoColumnTemplate';

export default TwoColumnTemplate;
