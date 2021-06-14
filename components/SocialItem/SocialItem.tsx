import * as React from 'react';
import styles from './SocialItem.module.css';

export type SocialItemProps = React.PropsWithChildren<{
  href: string;
}>;

const SocialItem: React.FC<SocialItemProps> = ({href, children}) => (
  <a href={href} target="_blank" className={styles['social-item']} rel="noreferrer">
    {children}
  </a>
);
SocialItem.displayName = 'SocialItem';

export default SocialItem;
