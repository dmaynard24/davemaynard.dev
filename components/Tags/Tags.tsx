import * as React from 'react';
import Tag from '../Tag/Tag';

const Tags: React.FC<{
  tags: string[];
}> = ({tags}) => (
  <div className="flex flex-wrap mb-8 sm:mb-10">
    {tags.map((tag) => (
      <Tag key={tag} text={tag} />
    ))}
  </div>
);
Tags.displayName = 'Tags';

export default Tags;
