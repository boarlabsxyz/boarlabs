export const animateSettings = {
  default: {
    transition: {
      default: { duration: 3, ease: 'easeInOut' },
      fill: { delay: 2, duration: 1 },
    },

    variants: {
      hidden: {
        pathLength: 0,
        fill: 'rgba(255, 255, 255, 0)',
      },
      visible: {
        pathLength: 1,
        fill: 'rgba(255, 255, 255, 1)',
      },
    },
  },
  infoIcon: {
    transition: {
      default: { duration: 3, ease: 'easeInOut' },
      fill: { delay: 2, duration: 2 },
    },

    variants: {
      hidden: {
        pathLength: 0,
        fill: 'rgba(255, 255, 255, 0)',
      },
      visible: {
        pathLength: 1,
        fill: '#FFA4A4',
      },
    },
  },
};
