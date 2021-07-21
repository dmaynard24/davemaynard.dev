import * as React from 'react';
import Image from 'next/image';
import resolveConfig from 'tailwindcss/resolveConfig';

import defaultAuthorImg from '../../public/assets/dave-maynard.jpg';
import Diamond from '../Diamond/Diamond';
import styles from './Author.module.css';
import tailwindConfig from '../../tailwind.config.js';

const sky = resolveConfig(tailwindConfig).theme.colors.sky['600'];

const Author: React.FC<{
  src?: any; // StaticImport
  alt?: string;
  inline?: boolean;
}> = ({src = defaultAuthorImg, alt = 'Dave Maynard', inline}) => (
  <div className={inline && 'flex items-center'}>
    <div className={`relative ${inline ? styles['inline-img'] : ''}`}>
      <div className="rounded-full overflow-hidden">
        <Image layout="responsive" src={src} alt={alt} placeholder="blur" quality="100" priority />
      </div>
      <Diamond color={sky} className="-left-3 -rotate-6" scale={0.9} />
      <Diamond color={sky} className="-right-1 rotate-6" scale={0.7} />
    </div>
    <div className={inline ? 'pl-6 lg:pl-8' : 'pt-6 lg:pt-8'}>
      <strong className="text-gray-900">Dave Maynard</strong>
      <br />
      Front-End Engineer at Amazon
    </div>
  </div>
);
Author.displayName = 'Author';

export default Author;
