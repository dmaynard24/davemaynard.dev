import * as React from 'react';
import Feed from '../components/Feed/Feed';
import Nav from '../components/Nav/Nav';
import Profile from '../components/Profile/Profile';

const Home: React.FC = () => {
  return (
    <div className="Home px-4 max-w-screen-xxl mx-auto">
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
Home.displayName = 'Home';

export default Home;
