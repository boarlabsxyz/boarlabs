'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { animateSettings } from '@/common/constants/iconAnimateSettings';

export const Graphics = () => {
  const ref = useRef(null);
  const inView = useInView(ref);
  return (
    <span ref={ref}>
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width="31"
        height="30"
        viewBox="0 0 31 30"
        fill="none"
      >
        <motion.path
          d="M10.2476 7.18751C10.2478 6.30011 10.4997 5.43097 10.9742 4.68103C11.4486 3.9311 12.126 3.33115 12.9278 2.95087C13.7296 2.5706 14.6229 2.42559 15.5038 2.53271C16.3847 2.63982 17.2171 2.99466 17.9044 3.55601C18.5917 4.11735 19.1056 4.86216 19.3865 5.70394C19.6674 6.54572 19.7037 7.44991 19.4912 8.31149C19.2787 9.17307 18.8261 9.95668 18.186 10.5713C17.546 11.186 16.7446 11.6064 15.8751 11.7838V14.375H19.9376C20.6836 14.375 21.3989 14.6713 21.9264 15.1988C22.4538 15.7262 22.7501 16.4416 22.7501 17.1875V18.2175C23.8864 18.4528 24.8951 19.1007 25.5817 20.0361C26.2682 20.9715 26.5838 22.1281 26.4676 23.2826C26.3514 24.4371 25.8115 25.5075 24.9523 26.2873C24.0931 27.0671 22.9755 27.5009 21.8151 27.505C20.6519 27.5067 19.5294 27.0761 18.6659 26.2967C17.8023 25.5173 17.2592 24.4447 17.142 23.2873C17.0249 22.13 17.342 20.9704 18.0319 20.0337C18.7218 19.097 19.7351 18.4502 20.8751 18.2188V17.1875C20.8751 16.9389 20.7764 16.7004 20.6006 16.5246C20.4247 16.3488 20.1863 16.25 19.9376 16.25H9.93765C9.68901 16.25 9.45055 16.3488 9.27474 16.5246C9.09892 16.7004 9.00015 16.9389 9.00015 17.1875V18.2175C10.1364 18.4528 11.1451 19.1007 11.8317 20.0361C12.5182 20.9715 12.8338 22.1281 12.7176 23.2826C12.6014 24.4371 12.0615 25.5075 11.2023 26.2873C10.3431 27.0671 9.22546 27.5009 8.06515 27.505C6.90186 27.5067 5.77944 27.0761 4.91586 26.2967C4.05228 25.5173 3.50918 24.4447 3.39202 23.2873C3.27486 22.13 3.59202 20.9704 4.28189 20.0337C4.97176 19.097 5.98511 18.4502 7.12515 18.2188V17.1875C7.12515 16.4416 7.42146 15.7262 7.94891 15.1988C8.47636 14.6713 9.19173 14.375 9.93765 14.375H14.0001V11.7838C12.9409 11.5672 11.989 10.9915 11.3052 10.154C10.6215 9.31654 10.2479 8.26865 10.2476 7.18751Z"
          fill="white"
          stroke="white"
          strokeWidth={0.3}
          initial={'hidden'}
          animate={inView && 'visible'}
          viewport={{ once: false }}
          {...animateSettings.default}
        />
      </motion.svg>
    </span>
  );
};
