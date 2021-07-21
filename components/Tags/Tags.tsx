import * as React from 'react';

const Tag: React.FC<{
  text: string;
}> = ({text}) => <div className="tag mb-2 py-1 px-3 rounded-full text-xs bg-gray-100">{text}</div>;
Tag.displayName = 'Tag';

const Tags: React.FC<{
  tags: string[];
}> = ({tags}) => (
  <div className="flex flex-wrap mb-10 sm:mb-12 lg:mb-14">
    {tags.map((tag) => (
      <Tag key={tag} text={tag} />
    ))}
  </div>
);
Tags.displayName = 'Tags';

export default Tags;
