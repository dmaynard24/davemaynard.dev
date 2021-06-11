import * as React from 'react';
import Tags from '../Tags/Tags';
import Timestamp from '../Timestamp/Timestamp';

const ProjectItem: React.FC = () => {
  const tags = ['HTML', 'JavaScript', 'Sass', 'Salesforce', 'Apex', 'Visualforce', 'Web', 'Responsive'];

  return (
    <>
      <div
        className="relative mb-4 sm:mb-6 rounded-t-lg overflow-hidden bg-cover"
        style={{
          backgroundImage: 'url(/assets/projects/collaboration.jpg)',
        }}
      >
        <div className="aspect-w-16 aspect-h-9" />
        <div className="absolute bottom-0 left-0 h-1/3 w-full bg-gradient-to-t from-gray-900" />
        <h2 className="absolute bottom-0 px-4 sm:px-6 text-white">Career Choice</h2>
      </div>
      <div className="px-4 sm:px-6">
        <Timestamp text="June 2020" />
        <Tags tags={tags} />
        <p>
          During my first year at Amazon, I worked on an internal product that allowed employees to pursue their career goals by applying for scholarships at
          academic institutions of their choice. For eligible employees, Amazon would pay up to 95% of tuition and fees (up to a yearly maximum) towards a
          certificate or diploma in qualified fields of study, leading to in-demand jobs.
        </p>
        <p>
          The application I developed is built on Salesforce using HTML5, JavaScript, and Sass. Working with the proprietary Apex programming language and
          Visualforce framework, I built dynamic experiences for every unique user from 14 countries and in 9 languages. Due to the global nature of the
          product, I learned the value of localization and accessibility at scale.
        </p>
      </div>
    </>
  );
};
ProjectItem.displayName = 'ProjectItem';

export default ProjectItem;
