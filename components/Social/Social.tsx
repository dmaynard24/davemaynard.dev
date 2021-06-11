import * as React from 'react';
import DribbbleLogo from '../DribbbleLogo/DribbbleLogo';
import GithubLogo from '../GithubLogo/GithubLogo';
import LinkedinLogo from '../LinkedinLogo/LinkedinLogo';
import SocialItem, { SocialItemProps } from '../SocialItem/SocialItem';
import TwitterLogo from '../TwitterLogo/TwitterLogo';

const socialItems: SocialItemProps[] = [
  {
    href: 'https://github.com/dmaynard24',
    children: <GithubLogo />,
  },
  {
    href: 'https://www.linkedin.com/in/dmaynard24/',
    children: <LinkedinLogo />,
  },
  {
    href: 'https://twitter.com/d_mayn_',
    children: <TwitterLogo />,
  },
  {
    href: 'https://dribbble.com/dave_maynard',
    children: <DribbbleLogo />,
  },
];

const Social: React.FC = () => (
  <div className="flex items-center justify-between">
    {socialItems.map((socialItem, i) => (
      <SocialItem key={i} {...socialItem} />
    ))}
  </div>
);
Social.displayName = 'Social';

export default Social;
