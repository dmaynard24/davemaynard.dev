import * as React from 'react';
import resolveConfig from 'tailwindcss/resolveConfig';

import RightNav from '../RightNav/RightNav';
import tailwindConfig from '../../tailwind.config.js';
import TopNav from '../TopNav/TopNav';
import useNavigation from '../../hooks/useNavigation';

const {screens} = resolveConfig(tailwindConfig).theme;

const TwoColumnTemplate: React.FC = ({children}) => {
  const [, isMenuActive, , isMainBlurry, isMotionEnabled, , , openMenu, closeMenu] = useNavigation(screens);

  return (
    <div className="max-w-screen-xl mx-auto">
      <TopNav openMenu={openMenu} />
      <div className="px-8">
        <div className="grid grid-cols-6 gap-x-8 lg:gap-x-5 xl:gap-x-8 relative">
          <main className={`col-span-6 lg:col-span-5 ${isMainBlurry && 'filter blur-md'}`}>
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
