import * as React from 'react';
import Link from 'next/link';
import isProjectItem from '../../util/isProjectItem';
import {BlogItemProps} from '../BlogItem/BlogItem';
import {ProjectItemProps} from '../ProjectItem/ProjectItem';
import ItemCard from '../ItemCard/ItemCard';
import ArrowLink from '../ArrowLink/ArrowLink';

const ItemGrid: React.FC<{
  items: ProjectItemProps[] | BlogItemProps[];
}> = ({items}) => {
  return (
    <div className="grid grid-cols-2 gap-x-12">
      {items.map((item, i) => {
        if (isProjectItem(item)) {
          if (i === 0) {
            return (
              <Link key={item.id} href={`projects/${item.id}`}>
                <div className="cursor-pointer col-span-2 mb-6 sm:mb-8">
                  <ItemCard
                    id={item.id}
                    name={item.name}
                    backgroundImageUrl={item.backgroundImageUrl}
                    timestamp={item.timestamp}
                    tags={item.tags}
                    backgroundPosition={item.backgroundPosition}
                  />
                </div>
              </Link>
            );
          }
          return (
            <div key={item.id} className="cursor-pointer mb-12 sm:mb-14">
              <Link href={`projects/${item.id}`}>
                <div>
                  <h3>{item.name}</h3>
                  <div className="line-clamp-4 mb-4 sm:mb-6">{item.children}</div>
                  <ArrowLink href={`projects/${item.id}`} text="Read More" />
                </div>
              </Link>
            </div>
          );
        }
        return <div>{item.id}</div>;
      })}
    </div>
  );
};
ItemGrid.displayName = 'ItemGrid';

export default ItemGrid;
