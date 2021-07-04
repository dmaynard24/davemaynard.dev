import * as React from 'react';
import Image from 'next/image';

import defaultAuthorImg from '../../public/assets/dave-maynard.jpg';

const Author: React.FC<{
  src?: any; // StaticImport
  alt?: string;
}> = ({src = defaultAuthorImg, alt = 'Dave Maynard'}) => (
  <div className="rounded-full overflow-hidden">
    <Image layout="responsive" src={src} alt={alt} placeholder="blur" quality="100" priority />
  </div>
);
Author.displayName = 'Author';

export default Author;
