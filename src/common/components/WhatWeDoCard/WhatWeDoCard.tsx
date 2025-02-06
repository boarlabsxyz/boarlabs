import { FC, ReactNode } from 'react';

import styles from './WhatWeDoCard.module.scss';

interface IWhatWeDoCardProps {
  icon: ReactNode;
  text: string;
}

const WhatWeDoCard: FC<IWhatWeDoCardProps> = ({ icon, text }) => {
  return (
    <div className={styles.wrapper}>
      <span>{icon}</span>
      <p>{text}</p>
    </div>
  );
};

export default WhatWeDoCard;
