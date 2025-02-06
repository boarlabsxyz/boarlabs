'use client';
import { motion } from 'framer-motion';
import {
  Brain,
  Education,
  Goal,
  Graphics,
  Info,
} from '@/common/components/Icons';
import WhatWeDoCard from '@/common/components/WhatWeDoCard/WhatWeDoCard';
import { motionVisibleSettings } from '@/common/constants/motionVisibleSettings';

import styles from './WhatWeDoSection.module.scss';

const cardProps = [
  { icon: <Goal />, text: 'start their career path' },
  { icon: <Brain />, text: 'gain experience and skills' },
  { icon: <Education />, text: 'experiment and self-develop' },
  { icon: <Graphics />, text: 'share their experience' },
];
const dontDoList = [
  { icon: <Info />, text: 'We don’t teach or mentor' },
  { icon: <Info />, text: 'We don’t force or control' },
  { icon: <Info />, text: 'We don’t help with career choice' },
];
export const WhatWeDoSection = () => {
  return (
    <motion.section className={styles.section}>
      <motion.h2 {...motionVisibleSettings}>What we do:</motion.h2>
      <motion.p {...motionVisibleSettings}>
        We provide a “space for self-development and self-organization” where
        beginners can:
      </motion.p>
      <motion.div className={styles.cardsWrapper} {...motionVisibleSettings}>
        {cardProps.map((card) => (
          <WhatWeDoCard key={card.text} {...card} />
        ))}
      </motion.div>
      <div className={styles.dontDoWrapper}>
        <motion.div
          className={styles.leftBlock}
          {...motionVisibleSettings}
          transition={{ duration: 1, delay: 0.6, ease: 'easeIn' }}
        >
          <p>What we don’t do</p>
          <ul>
            {dontDoList.map(({ icon, text }) => (
              <li key={text}>
                {icon} {text}
              </li>
            ))}
          </ul>
        </motion.div>
        <motion.div
          className={styles.rightBlock}
          {...motionVisibleSettings}
          transition={{ duration: 1, delay: 0.9, ease: 'easeIn' }}
        >
          And at the same time, they get paid for completed tasks, so that they
          have the financial opportunity to grow into their first job.
        </motion.div>
      </div>
    </motion.section>
  );
};
