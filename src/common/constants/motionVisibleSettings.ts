export const motionVisibleSettings = {
  initial: 'hidden',
  whileInView: 'visible',
  viewport: { once: true },
  transition: { duration: 1, delay: 0.3, ease: 'easeIn' },
  variants: { visible: { opacity: 1 }, hidden: { opacity: 0 } },
};
