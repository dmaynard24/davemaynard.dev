import * as React from 'react';

import DribbbleLogo from '../icons/DribbbleLogo/DribbbleLogo';
import GithubLogo from '../icons/GithubLogo/GithubLogo';
import LinkedinLogo from '../icons/LinkedinLogo/LinkedinLogo';
import SocialItem from '../SocialItem/SocialItem';
import {SocialItemProps} from '../../types';
import TwitterLogo from '../icons/TwitterLogo/TwitterLogo';

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
    {socialItems.map((socialItem) => (
      <SocialItem key={socialItem.href} {...socialItem} />
    ))}
  </div>
);
Social.displayName = 'Social';

export default Social;
