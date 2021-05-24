import * as React from 'react';
import Feed from '../components/Feed/Feed';
import Nav from '../components/Nav/Nav';
import Profile from '../components/Profile/Profile';

const Home: React.FC = () => {
  return (
    <div className="home px-4 max-w-screen-2xl mx-auto">
      <div className="flex flex-row -mx-8 max-h-screen">
        <div className="w-1/4 px-8">
          <Profile />
        </div>
        <div className="w-1/2 px-8 max-h-full overflow-y-auto">
          <Feed />
        </div>
        <div className="w-1/4 px-8">
          <Nav />
        </div>
      </div>
    </div>
  );
}
Home.displayName = 'Home';

export default Home;
