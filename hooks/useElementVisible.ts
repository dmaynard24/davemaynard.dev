import * as React from 'react';
import isElementVisible from '../util/isElementVisible';

const useElementVisible = (element: React.MutableRefObject<HTMLElement>): boolean => {
  const [isElementVisibleState, setIsElementVisibleState] = React.useState(false);

  const handleScroll = React.useCallback(() => {
    setIsElementVisibleState(isElementVisible(element.current));
  }, [element]);

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll, false);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll, false);
    };
  }, [handleScroll]);

  React.useEffect(() => {
    if (isElementVisibleState === true) {
      window.removeEventListener('scroll', handleScroll, false);
    }
  }, [isElementVisibleState, handleScroll]);

  return isElementVisibleState;
};

export default useElementVisible;
