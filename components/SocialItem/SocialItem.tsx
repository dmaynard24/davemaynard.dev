import * as React from 'react';

export type SocialItemProps = React.PropsWithChildren<{
  href: string;
}>;

const SocialItem: React.FC<SocialItemProps> = ({ href, children }) => (
  <a href={href} target="_blank" className="w-4 h-4" rel="noreferrer">
    {children}
  </a>
);
SocialItem.displayName = 'SocialItem';

export default SocialItem;
