import * as React from 'react';
import Tag from '../Tag/Tag';

const Tags: React.FC<{
  tags: string[];
}> = ({tags}) => (
  <div className="flex flex-wrap mb-2 sm:mb-4">
    {tags.map((tag) => (
      <Tag key={tag} text={tag} />
    ))}
  </div>
);
Tags.displayName = 'Tags';

export default Tags;
