import * as React from 'react';
import Author from '../Author/Author';
import Nav from '../Nav/Nav';
import Profile from '../Profile/Profile';
import Social from '../Social/Social';

const PageTemplate: React.FC = ({ children }) => {
  return (
    <div className="home px-4 max-w-screen-xl mx-auto">
      <div className="flex flex-row -mx-8 max-h-screen">
        <div className="w-1/6 px-8">
          <div className="pt-8 lg:pt-12">
            <Author />
          </div>
          <div className="pt-6 lg:pt-8">
            <Profile />
          </div>
          <div className="pt-6 lg:pt-8">
            <Social />
          </div>
        </div>
        <div className="w-2/3 px-8 max-h-full overflow-y-auto">
          <div className="pt-8 lg:pt-12">{children}</div>
        </div>
        <div className="w-1/6 px-8">
          <div className="pt-8 lg:pt-12">
            <Nav />
          </div>
        </div>
      </div>
    </div>
  );
};
PageTemplate.displayName = 'PageTemplate';

export default PageTemplate;
