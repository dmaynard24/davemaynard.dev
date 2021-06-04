import * as React from "react";
import { useRouter } from "next/router";
import NavItem, { NavItemProps } from "../NavItem/NavItem";
import styles from "./Nav.module.css";

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
      href: "talks",
      isActive: currentRoute === "talks"
    },
  ];

  return (
    <nav className={`${styles.nav} py-8 lg:py-12`}>
      {navItems.map((navItem, i) => {
        return (
          <NavItem key={i} {...navItem} />
        );
      })}
    </nav>
  );
};
Nav.displayName = "Nav";

export default Nav;
