import * as React from 'react';

export type ProjectItemProps = React.PropsWithChildren<{
  id: string;
  name: string;
  imageUrl: any; // StaticImport
  timestamp: string;
  tags: string[];
  objectPosition?: string;
}>;

export type BlogItemProps = React.PropsWithChildren<{
  id: string;
  header: string;
  timestamp: string;
}>;
