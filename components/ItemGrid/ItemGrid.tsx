import * as React from 'react';
import Link from 'next/link';

import {BlogItemProps, ProjectItemProps} from '../../types';
import ArrowLink from '../ArrowLink/ArrowLink';
import isProjectItem from '../../util/isProjectItem';
import ItemCard from '../ItemCard/ItemCard';

const ItemGrid: React.FC<{
  items: ProjectItemProps[] | BlogItemProps[];
}> = ({items}) => {
  return (
    <div className="sm:grid sm:grid-cols-2 gap-x-12 xl:gap-x-14">
      {items.map((item, i) => {
        if (isProjectItem(item)) {
          if (i === 0) {
            return (
              <Link key={item.id} href={`projects/${item.id}`}>
                <div className="cursor-pointer col-span-2">
                  <ItemCard
                    id={item.id}
                    name={item.name}
                    imageUrl={item.imageUrl}
                    timestamp={item.timestamp}
                    tags={item.tags}
                    objectPosition={item.objectPosition}
                  />
                </div>
              </Link>
            );
          }
          return (
            <div key={item.id} className="cursor-pointer mb-12 sm:mb-14 lg:mb-16">
              <Link href={`projects/${item.id}`}>
                <div>
                  <h3>{item.name}</h3>
                  <div className="line-clamp-4 mb-5 sm:mb-6 lg:mb-7">{item.children}</div>
                  <ArrowLink href={`projects/${item.id}`} text="Read More" />
                </div>
              </Link>
            </div>
          );
        }
        return <div key={item.id} />;
      })}
    </div>
  );
};
ItemGrid.displayName = 'ItemGrid';

export default ItemGrid;
