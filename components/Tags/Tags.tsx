import * as React from 'react';
import Tag from '../Tag/Tag';

type Props = {
  tags: string[];
};

const Tags: React.FC<Props> = ({tags}) => (
  <div className="flex flex-wrap mb-4 sm:mb-6">
    {tags.map((tag) => (
      <Tag key={tag} text={tag} />
    ))}
  </div>
);
Tags.displayName = 'Tags';

export default Tags;
