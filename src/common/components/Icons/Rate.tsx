import { useRef } from 'react';
import { useInView, motion } from 'framer-motion';
import { animateSettings } from '@/common/constants/iconAnimateSettings';

export const Rate = () => {
  const ref = useRef(null);
  const inView = useInView(ref);
  return (
    <span ref={ref}>
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        role="img"
        aria-label="Rate icon"
      >
        <motion.path
          d="M2.5 9.6875C2.5 8.77582 2.86216 7.90148 3.50682 7.25682C4.15148 6.61216 5.02582 6.25 5.9375 6.25H24.0625C24.9742 6.25 25.8485 6.61216 26.4932 7.25682C27.1378 7.90148 27.5 8.77582 27.5 9.6875V11.875H2.5V9.6875ZM2.5 13.75H27.5V20.3125C27.5 21.2242 27.1378 22.0985 26.4932 22.7432C25.8485 23.3878 24.9742 23.75 24.0625 23.75H5.9375C5.02582 23.75 4.15148 23.3878 3.50682 22.7432C2.86216 22.0985 2.5 21.2242 2.5 20.3125V13.75ZM19.6875 18.125C19.4389 18.125 19.2004 18.2238 19.0246 18.3996C18.8488 18.5754 18.75 18.8139 18.75 19.0625C18.75 19.3111 18.8488 19.5496 19.0246 19.7254C19.2004 19.9012 19.4389 20 19.6875 20H22.8125C23.0611 20 23.2996 19.9012 23.4754 19.7254C23.6512 19.5496 23.75 19.3111 23.75 19.0625C23.75 18.8139 23.6512 18.5754 23.4754 18.3996C23.2996 18.2238 23.0611 18.125 22.8125 18.125H19.6875Z"
          fill="white"
          stroke="white"
          strokeWidth={0.3}
          initial={'hidden'}
          animate={inView && 'visible'}
          {...animateSettings.default}
        />
      </motion.svg>
    </span>
  );
};
