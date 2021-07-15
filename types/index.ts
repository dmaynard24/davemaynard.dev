import * as React from 'react';

export type BlogItemProps = React.PropsWithChildren<{
  id: string;
  header: string;
  timestamp: string;
}>;

export type NavItemProps = {
  text: string;
  href: string;
  isActive?: boolean;
};

export type ProjectItemProps = React.PropsWithChildren<{
  id: string;
  name: string;
  imageUrl: any; // StaticImport
  timestamp: string;
  tags: string[];
  objectPosition?: string;
  stats?: StatProps[];
  liveSiteHref?: string;
}>;

export type SocialItemProps = React.PropsWithChildren<{
  href: string;
}>;

export type StatProps = {
  value: string;
  stat: string;
};
