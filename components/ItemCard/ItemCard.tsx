import * as React from 'react';
import Image from 'next/image';
import {ProjectItemProps} from '../../types';
import Timestamp from '../Timestamp/Timestamp';

const ItemCard: React.FC<ProjectItemProps> = ({name, imageUrl, timestamp, objectPosition = 'center center'}) => {
  return (
    <div className="relative -mx-4 md:-mx-6 mb-10 sm:mb-12 lg:mb-14 rounded-lg overflow-hidden">
      <Image
        layout="fill"
        objectFit="cover"
        objectPosition={objectPosition}
        src={imageUrl}
        alt={`${name} featured image`}
        placeholder="blur"
      />
      <div className="aspect-w-16 aspect-h-9" />
      <div className="absolute bottom-0 left-0 h-1/3 w-full bg-gradient-to-t from-gray-900" />
      <div className="absolute bottom-0 px-4 md:px-6 text-white">
        <Timestamp text={timestamp} />
        <h2 className="text-white">{name}</h2>
      </div>
    </div>
  );
};
ItemCard.displayName = 'ItemCard';

export default ItemCard;
