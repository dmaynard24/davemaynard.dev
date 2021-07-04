import * as React from 'react';
import Head from 'next/head';
import {useRouter} from 'next/router';

import NavItem from '../NavItem/NavItem';
import {NavItemProps} from '../../types';

const Nav: React.FC = () => {
  const router = useRouter();
  const currentRoute = router.pathname.split('/')[1];

  const navItems: NavItemProps[] = [
    {
      text: 'Projects',
      href: '/projects',
      isActive: currentRoute === 'projects' || currentRoute === '',
    },
    {
      text: 'Side Projects',
      href: '/side-projects',
      isActive: currentRoute === 'side-projects',
    },
    {
      text: 'Blog',
      href: '/blog',
      isActive: currentRoute === 'blog',
    },
    {
      text: 'Talks',
      href: '/talks',
      isActive: currentRoute === 'talks',
    },
  ];

  return (
    <>
      <Head>
        <title>{navItems.find((navItem) => navItem.isActive)?.text} | Dave Maynard | Dev &amp; Design</title>
      </Head>
      <nav>
        {navItems.map((navItem) => (
          <NavItem key={navItem.href} {...navItem} />
        ))}
      </nav>
    </>
  );
};
Nav.displayName = 'Nav';

export default Nav;
