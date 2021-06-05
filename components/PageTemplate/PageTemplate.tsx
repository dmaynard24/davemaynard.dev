import * as React from 'react';
import Nav from '../Nav/Nav';
import Profile from '../Profile/Profile';
import Social from '../Social/Social';

const PageTemplate: React.FC = ({ children }) => {
  return (
    <div className="home px-4 max-w-screen-2xl mx-auto">
      <div className="flex flex-row -mx-8 max-h-screen">
        <div className="w-1/6 px-8">
          <div className="py-8 lg:py-12">
            <Profile />
          </div>
        </div>
        <div className="w-2/3 px-8 max-h-full overflow-y-auto">
          <div className="py-8 lg:py-12">
            {children}
          </div>
        </div>
        <div className="w-1/6 px-8 h-screen flex flex-col justify-between">
          <div className="py-8 lg:py-12">
            <Nav />
          </div>
          <div className="py-8 lg:py-12">
            <Social />
          </div>
        </div>
      </div>
    </div>
  )
}
PageTemplate.displayName = 'PageTemplate';

export default PageTemplate;