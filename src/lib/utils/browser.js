import variables from '../variables.json'

let isSupportedWebp
let supportedWebP = isSupportedWebp === undefined ? testWebP() : isSupportedWebp
let isTouch = typeof window !== 'undefined' && 'ontouchstart' in window

// Именно функции, чтобы при ресайзе брать актуальные значения
let isMobile = () => { return window.innerWidth <= parseInt(variables['mobile-upper-limit']) }
let isTablet = () => { return window.innerWidth >= parseInt(variables['tablet-lower-limit']) && window.innerWidth <= parseInt(variables['tablet-upper-limit']) }

function testWebP () {
  const canvas = typeof document === 'object' ? 
  document.createElement('canvas') : {};
  canvas.width = canvas.height = 1;
  return canvas.toDataURL ? canvas.toDataURL('image/webp').indexOf('image/webp') === 5 : false;
}

export default {
  supportedWebP,
  isTouch,
  isMobile,
  isTablet
}
