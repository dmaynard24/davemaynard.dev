import * as React from 'react';
import {StatProps} from '../../types';

const Stat: React.FC<StatProps> = ({value, stat}) => {
  return (
    <div className="mb-5 sm:mb-6">
      <h3 className="mb-0">{value}</h3>
      <p>{stat}</p>
    </div>
  );
};
Stat.displayName = 'Stat';

const Stats: React.FC<{stats: StatProps[]}> = ({stats}) => {
  return (
    <div className="my-10 sm:mt-12 lg:mt-14 sm:mb-6 lg:mb-8">
      <h2>Stats</h2>
      <div className="sm:grid sm:grid-cols-3 gap-x-12">
        {stats.map((s) => {
          return <Stat key={s.stat.split(' ').join('_')} {...s} />;
        })}
      </div>
    </div>
  );
};
Stats.displayName = 'Stats';

export default Stats;
