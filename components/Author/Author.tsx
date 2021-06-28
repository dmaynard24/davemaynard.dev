import * as React from 'react';

const Author: React.FC<{
  src?: string;
  alt?: string;
}> = ({src = '/assets/dave-maynard.jpg', alt = 'Dave Maynard'}) => (
  <div className="rounded-full overflow-hidden">
    <img src={src} alt={alt} />
  </div>
);
Author.displayName = 'Author';

export default Author;
