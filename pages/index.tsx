<<<<<<<< HEAD:pages/index.tsx
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
========
import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
>>>>>>>> 399fed6 (switched from create-react-app to create-next-app for PostCSS 8 support, postcss-nested):src/App.tsx

export default Home;
