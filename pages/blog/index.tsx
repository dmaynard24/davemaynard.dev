import * as React from 'react';
import Feed from '../../components/Feed/Feed';
import {BlogItemProps} from '../../components/BlogItem/BlogItem';
import PageTemplate from '../../components/PageTemplate/PageTemplate';

const blogItems: BlogItemProps[] = [
  {
    id: 'ramda-and-tacit-programming',
    header: 'Ramda and Tacit Programming',
    timestamp: 'June 8, 2021',
    children: (
      <>
        <p>
          Recently, on a React project I was working with{' '}
          <a href="https://github.com/reduxjs/reselect" target="_blank" rel="noreferrer">
            reselect
          </a>{' '}
          when I ran into the issue of writing a parameterized selector while still using the{' '}
          <code>createSelector</code> function. I wanted to write a single selector that performed essentially the exact
          same logic where the only difference was based on the argument passed into it. So I did what any developer
          would do: Googled it.
        </p>
        <p>
          After a quick search, I found this{' '}
          <a
            href="https://github.com/reduxjs/reselect/issues/140#issuecomment-366731302"
            target="_blank"
            rel="noreferrer"
          >
            GitHub comment
          </a>{' '}
          with some traction:{' '}
        </p>
        <p>
          <img src="/assets/blog/parameterized-selector.png" alt="GitHub comment screenshot" />
        </p>
        <p>
          At first, this snippet appears to show a solution to my problem. But after looking more closely, it's not.
          Since "memoization won't work as expected" (and one of the primary reasons for using reselect is to leverage
          memoization), I needed to find an alternative approach.{' '}
          <a href="https://www.willfarley.org/" target="_blank" rel="noreferrer">
            Will Farley
          </a>
          , a senior front-end engineer who was on my team at Amazon, had a code review with me and showed me how to
          correctly mimic a parameterized function with a different technique: <em>composition</em>.
        </p>
      </>
    ),
  },
];

const Blog: React.FC = () => {
  return (
    <PageTemplate>
      <Feed feedItems={blogItems} />
    </PageTemplate>
  );
};
Blog.displayName = 'Blog';

export default Blog;
