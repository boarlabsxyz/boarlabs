'use client';
import { motion } from 'framer-motion';
import {
  Achievement,
  Interview,
  Period,
  Rate,
} from '@/common/components/Icons';
import { motionVisibleSettings } from '@/common/constants/motionVisibleSettings';

import styles from './HowItWorksSection.module.scss';

export const HowItWorksSection = () => {
  return (
    <section className={styles.section}>
      <motion.div className={styles.textBlock} {...motionVisibleSettings}>
        <h2>How it works:</h2>
        <h3>а beginner comes to school</h3>
        <p>
          Goal - to obtain an offer from a company within 9 months by acquiring
          the necessary level of practical knowledge.
        </p>
      </motion.div>
      <div className={styles.cardsBlock}>
        <motion.div
          className={styles.stageBlock}
          {...motionVisibleSettings}
          transition={{ duration: 1, delay: 0.6, ease: 'easeIn' }}
        >
          <h2>Selection stage:</h2>
          <p>
            <Achievement /> Completing a technical assignment
          </p>
          <p>
            <Interview /> Technical interview
          </p>
        </motion.div>
        <motion.div
          className={styles.offerBlock}
          {...motionVisibleSettings}
          transition={{ duration: 1, delay: 0.9, ease: 'easeIn' }}
        >
          <h2>What we offer:</h2>
          <div className={styles.item}>
            <span>
              <Period /> Period
            </span>
            <span> 9 MONTH </span>
          </div>
          <div className={styles.item}>
            <span>
              <Rate /> Rate
            </span>
            <span>$4 / hour </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
