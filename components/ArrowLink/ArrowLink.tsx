import * as React from 'react';
import Link from 'next/link';

import ArrowRightNarrow from '../icons/ArrowRightNarrow/ArrowRightNarrow';

const ArrowLink: React.FC<{
  href: string;
  text: string;
}> = ({href, text}) => {
  return (
    <Link href={href}>
      <div className="link inline-block font-bold group">
        <div className="flex">
          <span>{text} </span>
          <span className="pl-2 transform transition-transform duration-200 group-hover:translate-x-2">
            <ArrowRightNarrow />
          </span>
        </div>
      </div>
    </Link>
  );
};
ArrowLink.displayName = 'ArrowLink';

export default ArrowLink;
