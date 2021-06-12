import * as React from 'react';
import 'tailwindcss/tailwind.css';
import '../styles/base.css';

const App: React.FC<{
  Component: any;
  pageProps: any;
}> = ({Component, pageProps}) => {
  return <Component {...pageProps} />;
};

export default App;
