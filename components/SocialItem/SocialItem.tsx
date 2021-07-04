import * as React from 'react';
import {SocialItemProps} from '../../types';
import styles from './SocialItem.module.css';

const SocialItem: React.FC<SocialItemProps> = ({href, children}) => (
  <a href={href} target="_blank" className={styles['social-item']} rel="noreferrer">
    {children}
  </a>
);
SocialItem.displayName = 'SocialItem';

export default SocialItem;
