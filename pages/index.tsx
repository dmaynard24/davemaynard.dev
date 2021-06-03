import * as React from 'react';
import Feed from '../components/Feed/Feed';
import PageTemplate from '../components/PageTemplate/PageTemplate';

const Home: React.FC = () => {
  return (
    <PageTemplate>
      <Feed />
    </PageTemplate>
  );
}
Home.displayName = 'Home';

export default Home;
