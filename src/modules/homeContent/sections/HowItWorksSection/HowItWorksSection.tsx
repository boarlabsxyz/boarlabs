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

const CONTENT = {
  MAIN_TITLE: 'How it works:',
  SUBTITLE: 'A beginner comes to school',
  GOAL: 'Goal - to obtain an offer from a company within 9 months by acquiring the necessary level of practical knowledge.',
  SELECTION_TITLE: 'Selection stage:',
  OFFER_TITLE: 'What we offer:',
  TASK: 'Completing a technical assignment',
  INTERVIEW: 'Technical interview',
  PERIOD_LABEL: 'Period',
  PERIOD_VALUE: '9 MONTH',
  RATE_LABEL: 'Rate',
  RATE_VALUE: '$4 / hour',
};

export const HowItWorksSection = () => {
  return (
    <section className={styles.section}>
      <motion.div className={styles.textBlock} {...motionVisibleSettings}>
        <h2>{CONTENT.MAIN_TITLE}</h2>
        <p>{CONTENT.SUBTITLE}</p>
        <p>{CONTENT.GOAL}</p>
      </motion.div>
      <div className={styles.cardsBlock}>
        <motion.div
          className={styles.stageBlock}
          {...motionVisibleSettings}
          transition={{ duration: 1, delay: 0.6, ease: 'easeIn' }}
        >
          <h3>{CONTENT.SELECTION_TITLE}</h3>
          <p>
            <Achievement aria-hidden="true" />
            <span>{CONTENT.TASK}</span>
          </p>
          <p>
            <Interview aria-hidden="true" />
            <span>{CONTENT.INTERVIEW}</span>
          </p>
        </motion.div>
        <motion.div
          className={styles.offerBlock}
          {...motionVisibleSettings}
          transition={{ duration: 1, delay: 0.9, ease: 'easeIn' }}
        >
          <h3>{CONTENT.OFFER_TITLE}</h3>
          <div className={styles.item}>
            <span>
              <Period aria-hidden="true" /> {CONTENT.PERIOD_LABEL}
            </span>
            <span>{CONTENT.PERIOD_VALUE}</span>
          </div>
          <div className={styles.item}>
            <span>
              <Rate aria-hidden="true" /> {CONTENT.RATE_LABEL}
            </span>
            <span>{CONTENT.RATE_VALUE}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
