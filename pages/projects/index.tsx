import * as React from 'react';
import * as R from 'ramda';
import Feed from '../../components/Feed/Feed';
import PageTemplate from '../../components/PageTemplate/PageTemplate';
import {ProjectItemProps} from '../../components/ProjectItem/ProjectItem';

const projectItems: ProjectItemProps[] = [
  {
    id: 'career-choice',
    name: 'Career Choice',
    backgroundImageUrl: '/assets/projects/collaboration.jpg',
    timestamp: 'June 2020',
    tags: ['HTML', 'JavaScript', 'Sass', 'Salesforce', 'Apex', 'Visualforce', 'Web', 'Responsive'],
    backgroundPosition: 'bottom center',
    children: (
      <>
        <p>
          During my first year at Amazon, I worked on an internal product that allowed employees to pursue their career
          goals by applying for scholarships at academic institutions of their choice. For eligible employees, Amazon
          would pay up to 95% of tuition and fees (up to a yearly maximum) towards a certificate or diploma in qualified
          fields of study, leading to in-demand jobs.
        </p>
        <p>
          The application I developed is built on Salesforce using HTML5, JavaScript, and Sass. Working with the
          proprietary Apex programming language and Visualforce framework, I built dynamic experiences for every unique
          user from 14 countries and in 9 languages. Due to the global nature of the product, I learned the value of
          localization and accessibility at scale.
        </p>
      </>
    ),
  },
  {
    id: 'floorigami',
    name: 'Floorigami',
    backgroundImageUrl: '/assets/projects/floorigami-hero.jpg',
    timestamp: 'February 2020',
    tags: ['HTML', 'JavaScript', 'Vue.js', 'Less', 'Web', 'Responsive'],
    backgroundPosition: 'bottom center',
    children: (
      <>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam rutrum semper ipsum, at finibus eros volutpat
          et. Curabitur et orci purus. Etiam nec risus arcu. Proin interdum risus vel quam elementum euismod. Sed ac
          ante congue, venenatis magna in, volutpat lacus. Donec iaculis neque in nunc interdum facilisis. Etiam massa
          sem, faucibus at arcu ac, tincidunt interdum nulla. Nulla facilisi. Nunc at laoreet felis.
        </p>
        <p>
          Praesent non orci id lorem bibendum imperdiet. Nulla convallis elit in erat dapibus dignissim. Nam iaculis,
          ante dapibus blandit tristique, libero mi aliquam ante, vitae pharetra tellus dolor in ipsum. Phasellus sit
          amet tortor auctor, gravida eros vitae, placerat neque. Cras vitae varius mauris, id suscipit lacus.
          Pellentesque nunc massa, varius sit amet vehicula a, pulvinar eu sem. Aliquam fringilla malesuada dui eget
          suscipit. Nullam pretium tristique fermentum. Aliquam vel iaculis nisl.
        </p>
      </>
    ),
  },
];

export const projectItemsById = R.indexBy(R.prop('id'), projectItems);

const Projects: React.FC = () => {
  return (
    <PageTemplate>
      <Feed feedItems={projectItems} />
    </PageTemplate>
  );
};
Projects.displayName = 'Projects';

export default Projects;
