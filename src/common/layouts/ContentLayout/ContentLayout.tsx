import { FC, ReactNode } from 'react';

import styles from './ContentLayout.module.scss';

interface IContentLayoutProps {
  children: ReactNode;
}

export const ContentLayout: FC<IContentLayoutProps> = ({ children }) => {
  return <main className={styles.container}>{children}</main>;
};
