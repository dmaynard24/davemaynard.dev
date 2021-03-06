import * as React from 'react';
import Link from 'next/link';
import {NavItemProps} from '../../types';
import styles from './NavItem.module.css';

const NavItem: React.FC<NavItemProps> = ({text, href, isActive}) => {
  const [className, setClassName] = React.useState(styles['nav-item']);

  React.useEffect(() => {
    if (isActive) {
      setClassName(`${styles['nav-item']} ${styles.active}`);
    }
  }, [isActive, setClassName]);

  return (
    <div className={className}>
      <Link href={href}>{text}</Link>
    </div>
  );
};
NavItem.displayName = 'NavItem';

export default NavItem;
