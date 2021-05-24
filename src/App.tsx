import * as React from 'react';
import Profile from './components/Profile/Profile';
import Feed from './components/Feed/Feed';
import Nav from './components/Nav/Nav';

const App: React.FC = () => {
  return (
    <div className="app px-4 max-w-screen-xxl mx-auto">
      <div className="flex flex-row -mx-4">
        <div className="w-1/4 px-4">
          <Profile />
        </div>
        <div className="w-1/2 px-4">
          <Feed />
        </div>
        <div className="w-1/4 px-4">
          <Nav />
        </div>
      </div>
    </div>
  );
}
App.displayName = 'App';

export default App;
