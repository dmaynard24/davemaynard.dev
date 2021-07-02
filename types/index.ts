import * as React from 'react';

export type ProjectItemProps = React.PropsWithChildren<{
  id: string;
  name: string;
  backgroundImageUrl: string;
  timestamp: string;
  tags: string[];
  backgroundPosition?: string;
}>;

export type BlogItemProps = React.PropsWithChildren<{
  id: string;
  header: string;
  timestamp: string;
}>;
