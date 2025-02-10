'use client';
import { motion } from 'framer-motion';

import styles from './OurGoalsSection.module.scss';

export const OurGoalsSection = () => {
  return (
    <div className={styles.section} role="region" aria-label="Our Mission">
      <motion.div
        className={styles.textWrapper}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 2 }}
        variants={{
          visible: { opacity: 1 },
          hidden: { opacity: 0 },
        }}
        aria-live="polite"
      >
        <h2>Our Mission</h2>
        <p className={styles.quote}>
          We know how difficult it is to get the very first job, especially if
          you haven't graduated from university with a programming
          specialization. Thus, our mission is to give beginners the opportunity
          to gain enough skills to get their first real job.
        </p>
      </motion.div>
    </div>
  );
};
