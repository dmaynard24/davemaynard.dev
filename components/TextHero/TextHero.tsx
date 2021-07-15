import * as React from 'react';
import styles from './TextHero.module.css';
import useElementVisible from '../../hooks/useElementVisible';

const TextHero: React.FC<{
  headline: string;
}> = ({headline, children}) => {
  const [className, setClassName] = React.useState(styles['text-hero']);
  const componentRef = React.useRef<HTMLDivElement>(null);
  const isElementVisible = useElementVisible(componentRef);

  React.useEffect(() => {
    if (isElementVisible) {
      setClassName(`${styles['text-hero']} ${styles.active}`);
    }
  }, [isElementVisible, setClassName]);

  return (
    <div ref={componentRef} className={className}>
      <h1>{headline}</h1>
      <div>{children}</div>
    </div>
  );
};
TextHero.displayName = 'TextHero';

export default TextHero;
