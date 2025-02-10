'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { BoarLabsSchoolLogo } from '@/common/components/BoarLabsSchoolLogo/BoarLabsSchoolLogo';
import Earth from '@/common/assets/images/earth.webp';

import styles from './IntroductionSection.module.scss';

export const IntroductionSection = () => {
  const mainTitle = 'BoarLabs is a young growing team of IT developers';
  const subtext =
    'We work  to learn, design, code and build products for the better!';
  return (
    <section className={styles.section} id={'introductionSection'}>
      <motion.div
        className={styles.imageWrapper}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 5, delay: 3 }}
      >
        <Image
          src={Earth}
          alt={'earth'}
          width={270}
          height={270}
          className={styles.earth}
          priority
        />
      </motion.div>
      <BoarLabsSchoolLogo
        classNameWrapper={styles.logoWrapper}
        classNameSvg={styles.logo}
      />
      <motion.div className={styles.mainText}>
        <motion.p className={styles.title}>
          {mainTitle.split('').map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 5 + index * 0.05 }}
            >
              {char}
            </motion.span>
          ))}
        </motion.p>
        <motion.p className={styles.subtext}>
          {subtext.split('').map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 7.5 + index * 0.03 }}
            >
              {char}
            </motion.span>
          ))}
        </motion.p>
      </motion.div>
    </section>
  );
};
