'use client';
import { motion } from 'framer-motion';
import WaveSvg from '@/common/assets/svg/wave.svg';

export const Wave = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 2 }}
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
      }}
    >
      <WaveSvg />
    </motion.div>
  );
};
