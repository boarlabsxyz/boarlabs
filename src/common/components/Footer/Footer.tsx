'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import BoarLabsLogo from '@/common/assets/svg/boarLabsLogo.svg';
import LinkedinLogo from '@/common/assets/svg/linkedin.svg';
import { SOCIAL_MEDIA } from '@/common/constants/SocialMedia';
import { motionVisibleSettings } from '@/common/constants/motionVisibleSettings';

import styles from './Footer.module.scss';

export const Footer = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  const scrollToTop = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <motion.footer className={styles.footer} {...motionVisibleSettings}>
      <div className={styles.topContent}>
        <div className={styles.logoBlock}>
          <BoarLabsLogo />
        </div>
        <div className={styles.social}>
          Social Media
          <Link
            href={SOCIAL_MEDIA.LINKEDIN}
            target="_blank"
            aria-label="Visit our LinkedIn page"
            rel="noopener noreferrer"
          >
            <LinkedinLogo />
          </Link>
        </div>
        <button
          className={styles.toTopButton}
          onClick={scrollToTop}
          aria-label="Scroll to top of page"
        >
          <span className={styles.arrow}></span>
        </button>
      </div>
      <p className={styles.rights}>
        © {currentYear} boarlabs. All rights reserved
      </p>
    </motion.footer>
  );
};
