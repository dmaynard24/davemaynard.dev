import 'tailwindcss/tailwind.css';
import '../styles/base.css';

const App = ({Component, pageProps}) => {
  return <Component {...pageProps} />;
};

export default App;
