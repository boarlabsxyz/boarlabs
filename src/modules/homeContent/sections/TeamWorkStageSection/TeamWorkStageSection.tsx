'use client';
import { Goal } from '@/common/components/Icons';
import { motion } from 'framer-motion';
import { motionVisibleSettings } from '@/common/constants/motionVisibleSettings';

import styles from './TeamWorkStageSection.module.scss';

export const TeamWorkStageSection = () => {
  const steps = [
    { icon: <Goal />, position: '01', text: 'Onboarding' },
    { icon: <Goal />, position: '02', text: 'Participate in team meeting' },
    { icon: <Goal />, position: '03', text: 'Brainstorming and discussion' },
    { icon: <Goal />, position: '04', text: 'Performing' },
  ];
  return (
    <div className={styles.section}>
      <motion.div className={styles.textBlock} {...motionVisibleSettings}>
        <div className={styles.leftBlock}>
          <h2>Teamwork stage</h2>
          <p>
            IT gives the beginner an opportunity to use his knowledge in
            practice, gain experience working on a project in a team, improve
            his problem-solving skills, communication skills, and ability to
            work collaboratively with others.
          </p>
        </div>
        <motion.div
          className={styles.rightBlock}
          {...motionVisibleSettings}
          transition={{ duration: 1, delay: 0.6, ease: 'easeIn' }}
        >
          Practical experience and the necessary soft skills increase a
          beginner’s chances of getting a job in the tech industry.
        </motion.div>
      </motion.div>
      <motion.div
        className={styles.stepsWrapper}
        initial={{ border: '2px solid #FFFFFF00' }}
        whileInView={{ border: '2px solid #FFFFFFB2' }}
        transition={{ duration: 1, delay: 2, ease: 'easeIn' }}
        viewport={{ once: true }}
      >
        {steps.map(({ icon, position, text }, index) => (
          <motion.div
            className={styles.stepCard}
            key={position}
            {...motionVisibleSettings}
            transition={{
              duration: 0.5,
              delay: 0.5 + index * 0.2,
              ease: 'easeIn',
            }}
          >
            <span className={styles.icon}>{icon}</span>
            <span className={styles.position}>{position}</span>
            <span className={styles.text}>{text}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
