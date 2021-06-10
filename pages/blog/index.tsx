import * as React from 'react';
import Feed from '../../components/Feed/Feed';
import PageTemplate from '../../components/PageTemplate/PageTemplate';

const Blog: React.FC = () => {
  return (
    <PageTemplate>
      <Feed />
    </PageTemplate>
  );
};
Blog.displayName = 'Blog';

export default Blog;
