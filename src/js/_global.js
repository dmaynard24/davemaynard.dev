// defined constants
const SCREEN_SM = 576;
const SCREEN_MD = 768;
const SCREEN_LG = 992;
const SCREEN_XL = 1200;
const SCREEN_XXL = 1440;

const EASE_IN_QUAD = `cubicBezier(0.55, 0.085, 0.68, 0.53)`;
const EASE_OUT_QUAD = `cubicBezier(0.25, 0.46, 0.45, 0.94)`;

function onDesktop() {
  return window.matchMedia(`(min-width: ${SCREEN_LG}px)`).matches;
}

function onMobile() {
  return !onDesktop();
}

function isTouchDevice() {
  return `ontouchstart` in window || navigator.msMaxTouchPoints;
}

function getWindowBounds() {
  return {
    top: window.pageYOffset,
    right: window.pageXOffset + window.innerWidth,
    bottom: window.pageYOffset + window.innerHeight,
    left: window.pageXOffset,
    width: window.innerWidth,
    height: window.innerHeight,
  };
}

function getElementBounds(element) {
  const elementRect = element.getBoundingClientRect();
  const windowBounds = getWindowBounds();
  return {
    top: elementRect.top + windowBounds.top,
    right: elementRect.left + elementRect.width,
    bottom: elementRect.top + windowBounds.top + elementRect.height,
    left: elementRect.left,
  };
}

function isElementVisible(element, entirely) {
  const windowBounds = getWindowBounds();
  const elementBounds = getElementBounds(element);

  return entirely
    ? (elementBounds.top >= windowBounds.top - 5 &&
        elementBounds.right <= windowBounds.right + 5 &&
        elementBounds.bottom <= windowBounds.bottom + 5 &&
        elementBounds.left >= windowBounds.left - 5) ||
        element.style.position === `fixed`
    : (elementBounds.top < windowBounds.bottom &&
        elementBounds.right > windowBounds.left &&
        elementBounds.bottom > windowBounds.top &&
        elementBounds.left < windowBounds.right) ||
        element.style.position === `fixed`;
}
