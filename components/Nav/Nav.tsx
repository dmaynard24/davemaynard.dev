import * as React from 'react';

const Nav: React.FC = () => {
  return (
    <nav className="nav">
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