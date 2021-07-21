import * as React from 'react';

const useNavigation = (
  screens: any,
): [boolean, boolean, boolean, boolean, boolean, () => void, () => void, () => void, () => void] => {
  const [isProfileActive, setIsProfileActive] = React.useState(false);
  const [isMenuActive, setIsMenuActive] = React.useState(false);
  const [isProfileBlurry, setIsProfileBlurry] = React.useState(false);
  const [isMainBlurry, setIsMainBlurry] = React.useState(false);
  const [isMotionEnabled, setIsMotionEnabled] = React.useState(true);
  const [windowWidth, setWindowWidth] = React.useState(0);

  const handleResize = React.useCallback(() => {
    setWindowWidth(window.innerWidth);
    setIsMotionEnabled(false);
  }, []);

  React.useEffect(() => {
    setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize, false);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize, false);
    };
  }, [handleResize]);

  React.useEffect(() => {
    setIsProfileBlurry(() => {
      if (window.matchMedia(`(min-width: ${screens.lg})`).matches) {
        return false;
      }
      return isMenuActive;
    });
    setIsMainBlurry(() => {
      if (window.matchMedia(`(min-width: ${screens.lg})`).matches) {
        return false;
      }
      if (window.matchMedia(`(min-width: ${screens.md})`).matches) {
        return isMenuActive;
      }
      return isProfileActive || isMenuActive;
    });
  }, [isProfileActive, isMenuActive, windowWidth]);

  const openProfile = () => {
    setIsMenuActive(false);
    setIsProfileActive(true);
    setIsMotionEnabled(true);
  };

  const closeProfile = () => {
    setIsMotionEnabled(true);
    setIsProfileActive(false);
  };

  const openMenu = () => {
    setIsProfileActive(false);
    setIsMenuActive(true);
    setIsMotionEnabled(true);
  };

  const closeMenu = () => {
    setIsMotionEnabled(true);
    setIsMenuActive(false);
  };

  return [
    isProfileActive,
    isMenuActive,
    isProfileBlurry,
    isMainBlurry,
    isMotionEnabled,
    openProfile,
    closeProfile,
    openMenu,
    closeMenu,
  ];
};

export default useNavigation;
