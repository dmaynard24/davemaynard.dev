import * as React from "react";
import { useRouter } from "next/router";
import NavItem, { NavItemProps } from "../NavItem/NavItem";
import styles from "./Nav.module.css";
import Head from "next/head";
import Social from "../Social/Social";

const Nav: React.FC = () => {
  const router = useRouter();
  const currentRoute = router.pathname.split("/")[1];

  const navItems: NavItemProps[] = [
    {
      text: "Blog",
      href: "/blog",
      isActive: currentRoute === "blog" || currentRoute === ''
    },
    {
      text: "Projects",
      href: "/projects",
      isActive: currentRoute === "projects"
    },
    {
      text: "Side Projects",
      href: "/side-projects",
      isActive: currentRoute === "side-projects"
    },
    {
      text: "Talks",
      href: "/talks",
      isActive: currentRoute === "talks"
    },
  ];

  return (
    <React.Fragment>
      <Head>
        <title>{navItems.find(navItem => navItem.isActive).text} | Dave Maynard</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;700;800&display=swap" rel="stylesheet" />
      </Head>
      <nav className={styles.nav}>
        {navItems.map((navItem, i) => <NavItem key={i} {...navItem} />)}
      </nav>
    </React.Fragment>
  );
};
Nav.displayName = "Nav";

export default Nav;
