import * as React from 'react';

type Props = {
  text: string;
};

const Tag: React.FC<Props> = ({ text }) => <div className="tag py-1 px-3 rounded-full text-gray-500 text-xs bg-gray-100">{text}</div>;
Tag.displayName = 'Tag';

export default Tag;
