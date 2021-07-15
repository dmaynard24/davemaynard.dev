const isElementVisible = (element: HTMLElement): boolean => {
  if (!element) return false;

  const windowBounds = {
    top: window.pageYOffset,
    right: window.pageXOffset + window.innerWidth,
    bottom: window.pageYOffset + window.innerHeight,
    left: window.pageXOffset,
  };
  const elementRect = element.getBoundingClientRect();
  const elementBounds = {
    top: elementRect.top + windowBounds.top,
    right: elementRect.left + elementRect.width,
    bottom: elementRect.top + windowBounds.top + elementRect.height,
    left: elementRect.left,
  };

  return (
    (elementBounds.top < windowBounds.bottom &&
      elementBounds.right > windowBounds.left &&
      elementBounds.bottom > windowBounds.top &&
      elementBounds.left < windowBounds.right) ||
    element.style.position === `fixed`
  );
};

export default isElementVisible;
