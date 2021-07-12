import * as React from 'react';

const Close: React.FC = () => (
  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" width="100%" height="100%" className="icon">
    <title>Toggle Close</title>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
  </svg>
);
Close.displayName = 'Close';

export default Close;
