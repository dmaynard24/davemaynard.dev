import * as React from 'react';
import styles from './Nav.module.css';

const Nav: React.FC = () => {
  return (
    <nav className={`${styles.nav} py-8 lg:py-12`}>
      <div className="nav-item">
        <a>Blog</a>
      </div>
      <div className="nav-item">
        <a>Projects</a>
      </div>
      <div className="nav-item">
        <a>Side Projects</a>
      </div>
      <div className="nav-item">
        <a>Talks</a>
      </div>
    </nav>
  )
}
Nav.displayName = 'Nav';

export default Nav;