import * as R from 'ramda';
import * as React from 'react';
import ItemGrid from '../../components/ItemGrid/ItemGrid';
import PageTemplate from '../../components/PageTemplate/PageTemplate';
import {ProjectItemProps} from '../../types';
import TextHero from '../../components/TextHero/TextHero';

// TODO: Refactor this approach to make it dynamic (this is used for next/image placeholder="blur" functionality)
import amazonDetailPageImg from '../../public/assets/projects/amazon-detail-page-hero.jpg';
import careerChoiceImg from '../../public/assets/projects/collaboration.jpg';
import colorSpeaksImg from '../../public/assets/projects/color-speaks-hero.jpg';
import floorigamiImg from '../../public/assets/projects/floorigami-hero.jpg';
import sagepathImg from '../../public/assets/projects/sagepath-hero.jpg';
import shawFloorsImg from '../../public/assets/projects/shaw-floors-hero.jpg';
import ArrowLink from '../../components/ArrowLink/ArrowLink';

const projectItems: ProjectItemProps[] = [
  {
    id: 'amazon-detail-page',
    name: 'Amazon Detail Page',
    imageUrl: amazonDetailPageImg,
    timestamp: 'July 2021',
    tags: ['React JS', 'Redux', 'Redux-Saga', 'TypeScript', 'JSX', 'HTML', 'Emotion', 'CSS-in-JS', 'Web', 'Responsive'],
    objectPosition: 'bottom center',
    children: (
      <>
        <p>
          While working at Amazon, I was a front-end engineer on an application called{' '}
          <strong>A+ Content Manager</strong>. The tool allows sellers and vendors to create rich content that best
          tells their product story and add personalized branding to their product detail pages on Amazon. The
          application has over <strong>15,000 daily active users</strong> who publish content to{' '}
          <strong>20,000,000 products</strong> on{' '}
          <a href="https://www.amazon.com/" target="_blank" rel="noreferrer">
            Amazon.com
          </a>{' '}
          each month. It's supported in 21 marketplaces around the world with multiple locales in each.
        </p>
        <p>
          The app is used by companies like Sony, Fossil, Adidas, Microsoft, and Bose. To view the A+ content, click one
          of their products and scroll down to the "From the manufacturer" section of the page.
        </p>
        <p>
          While working on this application, I wrote React JS with TypeScript, CSS-in-JS (Emotion), and used Redux for
          state management. I also used Redux-Saga as the middleware to perform API requests.
        </p>
        <p>
          Most recently, I contributed to an internal feature that allows users to create A/B tests and determine
          content strategy.
        </p>
      </>
    ),
  },
  {
    id: 'career-choice',
    name: 'Career Choice',
    imageUrl: careerChoiceImg,
    timestamp: 'June 2020',
    tags: ['HTML', 'JavaScript', 'Sass', 'Salesforce', 'Apex', 'Visualforce', 'Web', 'Responsive'],
    objectPosition: 'bottom center',
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
    imageUrl: floorigamiImg,
    timestamp: 'February 2020',
    tags: ['HTML', 'JavaScript', 'Vue.js', 'Less', 'Kentico', 'C#', 'Web', 'Responsive'],
    objectPosition: 'bottom center',
    children: (
      <>
        <p>
          In early 2020, I worked on an ecommerce product for Shaw Floors that enabled customers to mix-and-match
          flooring styles to create a custom "tiled" look in their rooms. Users can enter the size of the room they’re
          shopping for, and the site will calculate their cost based on square footage.
        </p>
        <p>
          The site was content-driven, and I worked with a team of back-end developers who decided to implement the
          back-end with Kentico. I lead the front-end effort and implemented the front-end with Vue.js, HTML, and Less.
        </p>
        <p>
          I reached for Vue as the framework because I knew several of the components would require somewhat complex
          logic for the user interactions. For example:
        </p>
        <ul>
          <li>
            Looping over items on the product landing page was a perfect candidate for the <code>v-for</code> directive,
            especially since we had a filter that allowed users to change how items are sorted (featured,
            alphabetically, or by price). I built a search panel that would also list search results and resources with
            the same directive, only without the need for filtering.
          </li>
          <li>
            There is a calculator for users to input the dimensions or square footage or their room and view the number
            of boxes they'd need to order to cover the space. This needed to be reactive, meaning it would need to
            automatically update the count of boxes whenever the input changed, so this was a use case for two-way data
            binding with <code>v-model</code>.
          </li>
          <li>
            Finally, I built the functionality for <b>Add to Cart</b> and <b>Save for Later</b> with a panel that
            allowed users to increment or decrement the number of boxes for each item in their cart and display a
            running subtotal. The subtotal was a computed value that would need to automatically update, I achieved this
            with the <code>v-bind</code> directive.
          </li>
        </ul>
        <p>
          There are a few other instances of components that benefited from built-in directives, but I won't list every
          single one. If I hadn't implemented Vue or any other front-end framework on this project, I would've had to
          manually handle re-rendering elements on the page whenever user input changed. By committing to the decision,
          I was able to write fewer lines of custom code, prevent potential bugs for edge cases, and deliver a working
          product within a reasonable timeline.
        </p>
        <ArrowLink href="https://floorigami.com/" text="Visit the Site" external />
      </>
    ),
  },
  {
    id: 'color-speaks',
    name: 'Color Speaks',
    imageUrl: colorSpeaksImg,
    timestamp: 'August 2019',
    tags: ['HTML', 'JavaScript', 'Vue.js', 'Less', 'Web', 'Responsive'],
    objectPosition: 'center center',
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
  {
    id: 'shaw-floors',
    name: 'Shaw Floors',
    imageUrl: shawFloorsImg,
    timestamp: 'January 2019',
    tags: ['HTML', 'JavaScript', 'jQuery', 'WebGL', 'Three.js', 'Less', 'Web', 'Responsive'],
    objectPosition: 'center center',
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
  {
    id: 'sagepath',
    name: 'Sagepath',
    imageUrl: sagepathImg,
    timestamp: '2018',
    tags: ['HTML', 'JavaScript', 'jQuery', 'Sass', 'Web', 'Responsive'],
    objectPosition: 'center center',
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
      <TextHero headline="A Few of My Projects">
        <p>
          I've been working professionally as a front-end developer since 2012. Since then, it's been quite the journey
          and I've worked on all sorts of websites and products, ranging from content-driven sites to data-driven
          applications. This has given me the chance to build solutions with several popular libraries and frameworks.
        </p>
        <p>Here are just a few of my recent projects that I've contributed to over the last five years.</p>
      </TextHero>
      <ItemGrid items={projectItems} />
    </PageTemplate>
  );
};
Projects.displayName = 'Projects';

export default Projects;
