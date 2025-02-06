export const iconBase = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: 'rgba(255, 255, 255, 0)',
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    fill: 'rgba(255, 255, 255, 1)',
  },
};

export const iconBlue = {
  ...iconBase,
  visible: {
    ...iconBase.visible,
    fill: '#417EF3',
  },
};

export const iconGreen = {
  ...iconBase,
  visible: {
    ...iconBase.visible,
    fill: '#6AF4D3',
  },
};

export const iconWhite = {
  ...iconBase,
  visible: {
    ...iconBase.visible,
    fill: '#fff',
  },
};

export const pathTransition = {
  default: { duration: 4, ease: 'easeInOut' },
  fill: { duration: 4, ease: [1, 0, 0.8, 1] },
};
