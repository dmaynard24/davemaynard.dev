import * as React from 'react';

import Author from '../Author/Author';
import Nav from '../Nav/Nav';
import Profile from '../Profile/Profile';
import Social from '../Social/Social';

const PageTemplate: React.FC = ({children}) => {
  return (
    <div className="px-8 max-w-screen-xl mx-auto">
      <div className="grid grid-cols-6 gap-x-8 relative z-10">
        <aside className="col-span-1 sticky max-h-screen top-0">
          <div className="pt-8 lg:pt-12">
            <Author />
          </div>
          <div className="pt-6 lg:pt-8">
            <Profile />
          </div>
          <div className="pt-6 lg:pt-8">
            <Social />
          </div>
        </aside>
        <main className="col-span-4 px-14">
          <div className="py-8 lg:py-12">{children}</div>
        </main>
        <aside className="col-span-1 sticky max-h-screen top-0">
          <div className="pt-8 lg:pt-12">
            <Nav />
          </div>
        </aside>
      </div>
    </div>
  );
};
PageTemplate.displayName = 'PageTemplate';

export default PageTemplate;
