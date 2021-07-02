import * as React from 'react';
import {ProjectItemProps} from '../../types';
import Timestamp from '../Timestamp/Timestamp';

const ItemCard: React.FC<ProjectItemProps> = ({
  name,
  backgroundImageUrl,
  timestamp,
  backgroundPosition = 'center center',
}) => {
  return (
    <div
      className="relative -mx-4 sm:-mx-6 mb-4 sm:mb-6 rounded-lg overflow-hidden bg-cover"
      style={{
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundPosition,
      }}
    >
      <div className="aspect-w-16 aspect-h-9" />
      <div className="absolute bottom-0 left-0 h-1/3 w-full bg-gradient-to-t from-gray-900" />
      <div className="absolute bottom-0 px-4 sm:px-6 text-white">
        <Timestamp text={timestamp} />
        <h2 className="text-white">{name}</h2>
      </div>
    </div>
  );
};
ItemCard.displayName = 'ItemCard';

export default ItemCard;
