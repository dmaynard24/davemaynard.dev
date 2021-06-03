import * as React from 'react';
import Nav from '../Nav/Nav';
import Profile from '../Profile/Profile';

const PageTemplate: React.FC = ({ children }) => {
  return (
    <div className="home px-4 max-w-screen-2xl mx-auto">
      <div className="flex flex-row -mx-8 max-h-screen">
        <div className="w-1/4 px-8">
          <Profile />
        </div>
        <div className="w-1/2 px-8 max-h-full overflow-y-auto">
          <div className="py-8 lg:py-12">
            {children}
          </div>
        </div>
        <div className="w-1/4 px-8">
          <Nav />
        </div>
      </div>
    </div>
  )
}
PageTemplate.displayName = 'PageTemplate';

export default PageTemplate;