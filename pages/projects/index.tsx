import * as React from 'react';
import Feed from '../../components/Feed/Feed';
import PageTemplate from '../../components/PageTemplate/PageTemplate';
import {ProjectItemProps} from '../../components/ProjectItem/ProjectItem';

const feedItems: ProjectItemProps[] = [
  {
    id: 'career-choice',
    name: 'Career Choice',
    cardImageUrl: '/assets/projects/collaboration.jpg',
    timestamp: 'June 2020',
    tags: ['HTML', 'JavaScript', 'Sass', 'Salesforce', 'Apex', 'Visualforce', 'Web', 'Responsive'],
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
    cardImageUrl: '/assets/projects/floorigami-hero.jpg',
    timestamp: 'February 2020',
    tags: ['HTML', 'JavaScript', 'Vue.js', 'Less', 'Web', 'Responsive'],
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
];

const Projects: React.FC = () => {
  return (
    <PageTemplate>
      <Feed feedItems={feedItems} />
    </PageTemplate>
  );
};
Projects.displayName = 'Projects';

export default Projects;
