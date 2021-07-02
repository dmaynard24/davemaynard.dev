import * as React from 'react';
import styles from './TextHero.module.css';

const TextHero: React.FC<{
  headline: string;
}> = ({headline, children}) => {
  const [className, setClassName] = React.useState(styles['text-hero']);

  React.useEffect(() => {
    setClassName(`${className} ${styles.active}`);
  }, [setClassName, className]);

  return (
    <div className={className}>
      <h1>{headline}</h1>
      <div>{children}</div>
    </div>
  );
};
TextHero.displayName = 'TextHero';

export default TextHero;
