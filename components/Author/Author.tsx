import * as React from "react";
import Image from 'next/image';

const Author: React.FC<{
  src?: string,
}> = ({
  src = '/assets/dave-maynard.jpg',
}) => {
  return (
    <div className="rounded-full overflow-hidden">
      <Image src={src} width="100%" height="auto" layout="responsive" quality="100" priority />
    </div>
  );
};
Author.displayName = "Author";

export default Author;
