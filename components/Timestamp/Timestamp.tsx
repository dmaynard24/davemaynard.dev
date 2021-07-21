import * as React from 'react';

const Timestamp: React.FC<{
  text: string;
}> = ({text}) => {
  return <div className="font-bold mb-5 sm:mb-6 lg:mb-7">{text}</div>;
};
Timestamp.displayName = 'Timestamp';

export default Timestamp;
