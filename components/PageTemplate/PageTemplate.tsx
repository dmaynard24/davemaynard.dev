import * as React from 'react';
import Author from '../Author/Author';
import Nav from '../Nav/Nav';
import Profile from '../Profile/Profile';
import Social from '../Social/Social';

const PageTemplate: React.FC = ({children}) => (
  <div className="home px-4 max-w-screen-xl mx-auto">
    <div className="flex flex-row -mx-8">
      <aside className="w-1/6 px-8 sticky max-h-screen top-0">
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
      <main className="w-2/3 px-14">
        <div className="py-8 lg:py-12">{children}</div>
      </main>
      <aside className="w-1/6 px-8 sticky max-h-screen top-0">
        <div className="pt-8 lg:pt-12">
          <Nav />
        </div>
      </aside>
    </div>
  </div>
);
PageTemplate.displayName = 'PageTemplate';

export default PageTemplate;
