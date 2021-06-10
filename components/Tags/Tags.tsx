import * as React from 'react';
import Tag from '../Tag/Tag';

type Props = {
  tags: string[];
};

const Tags: React.FC<Props> = ({ tags }) => {
  return (
    <div className="flex flex-wrap mb-4 sm:mb-6">
      {tags.map((tag, i) => (
        <Tag key={i} text={tag} />
      ))}
    </div>
  );
};
Tags.displayName = 'Tags';

export default Tags;
