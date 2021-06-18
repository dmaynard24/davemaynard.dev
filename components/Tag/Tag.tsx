import * as React from 'react';

const Tag: React.FC<{
  text: string;
}> = ({text}) => <div className="tag mb-2 py-1 px-3 rounded-full text-xs bg-gray-100">{text}</div>;
Tag.displayName = 'Tag';

export default Tag;
