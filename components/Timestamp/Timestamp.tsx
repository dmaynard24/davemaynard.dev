import * as React from 'react';

type Props = {
  text: string;
};

const Timestamp: React.FC<Props> = ({ text }) => {
  return <div className="font-bold mb-4 sm:mb-6">{text}</div>;
};
Timestamp.displayName = 'Timestamp';

export default Timestamp;
