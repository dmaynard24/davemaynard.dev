import * as React from 'react';
import {StatProps} from '../../types';
import styles from './Stats.module.css';
import useElementVisible from '../../hooks/useElementVisible';

const Stat: React.FC<StatProps> = ({value, stat}) => {
  return (
    <div className="mb-5 sm:mb-6 lg:mb-7">
      <h3 className="mb-0">{value}</h3>
      <p>{stat}</p>
    </div>
  );
};
Stat.displayName = 'Stat';

const Stats: React.FC<{stats: StatProps[]}> = ({stats}) => {
  const [className, setClassName] = React.useState(styles.stats);
  const componentRef = React.useRef<HTMLDivElement>(null);
  const isElementVisible = useElementVisible(componentRef);

  React.useEffect(() => {
    if (isElementVisible) {
      setClassName(`${styles.stats} ${styles.active}`);
    }
  }, [isElementVisible, setClassName]);

  return (
    <div ref={componentRef} className={className}>
      <h2>Stats</h2>
      <div className="sm:grid sm:grid-cols-3 gap-x-12 xl:gap-x-14">
        {stats.map((s) => {
          return <Stat key={s.stat.split(' ').join('_')} {...s} />;
        })}
      </div>
    </div>
  );
};
Stats.displayName = 'Stats';

export default Stats;
