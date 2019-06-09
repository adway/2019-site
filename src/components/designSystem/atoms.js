const BASELINE = 1.777;

const scales = {
  xsmall: 0.5,
  small: 0.875,
  medium: 1,
  large: 2,
  xlarge: 4
};

export default {
  baseline: BASELINE,
  breakpoints: {
    medium: `56rem`,
    narrow: `30rem`
  },
  colors: {
    wash: '#fefefe',
    site: '#a50104',
    text: '#000207',
    meta: '#747474',
    complementary: '#005bc2',
    duke: '#00539B'
  },
  font: {
    family: {
      serif: `"Tiempos Text Web", "Georgia", serif`,
      sans: `"Founders Grotesk Mono Web", "Input Mono", "Source Code Pro", "Monaco", monospace`
    },
    size: {
      small: `${scales.small}rem`,
      regular: `${scales.medium}rem`,
      h1: `1.333rem`,
      h2: `1.203rem`
    }
  },
  scales,
  // This confusing little function takes `scales` and creates
  // rem-based values for each size
  spacing: Object.assign(
    {},
    ...Object.keys(scales).map(n => ({
      // e.g. small: '(BASELINE * 0.875)rem'
      [n]: `${BASELINE * scales[n]}rem`
    }))
  )
};
