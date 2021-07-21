import * as React from 'react';
import styles from './TextHero.module.css';
import useElementVisible from '../../hooks/useElementVisible';

const TextHero: React.FC<{
  headline: string;
  markPosition?: 'above' | 'below';
}> = ({headline, children, markPosition = 'below'}) => {
  const [className, setClassName] = React.useState(`${styles['text-hero']} ${styles[`mark-${markPosition}`]}`);
  const componentRef = React.useRef<HTMLDivElement>(null);
  const isElementVisible = useElementVisible(componentRef);

  React.useEffect(() => {
    if (isElementVisible) {
      setClassName(`${styles['text-hero']} ${styles[`mark-${markPosition}`]} ${styles.active}`);
    }
  }, [isElementVisible, setClassName, markPosition]);

  return (
    <div ref={componentRef} className={className}>
      <h1>{headline}</h1>
      <div>{children}</div>
    </div>
  );
};
TextHero.displayName = 'TextHero';

export default TextHero;
