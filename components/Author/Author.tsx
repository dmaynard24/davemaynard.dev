import * as React from 'react';
import Image from 'next/image';
import resolveConfig from 'tailwindcss/resolveConfig';

import defaultAuthorImg from '../../public/assets/dave-maynard.jpg';
import Diamond from '../Diamond/Diamond';
import tailwindConfig from '../../tailwind.config.js';

const cyanLight = resolveConfig(tailwindConfig).theme.colors.cyan['400'];
const cyan = resolveConfig(tailwindConfig).theme.colors.cyan['600'];

const Author: React.FC<{
  src?: any; // StaticImport
  alt?: string;
}> = ({src = defaultAuthorImg, alt = 'Dave Maynard'}) => (
  <div className="relative">
    <div className="rounded-full overflow-hidden">
      <Image layout="responsive" src={src} alt={alt} placeholder="blur" quality="100" priority />
    </div>
    <Diamond color={cyan} className="-bottom-5 left-0 -rotate-6" scale={0.9} />
    <Diamond color={cyanLight} className="right-0 rotate-6" scale={0.75} />
  </div>
);
Author.displayName = 'Author';

export default Author;
