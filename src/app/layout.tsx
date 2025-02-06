import { ReactNode } from 'react';
import type { Metadata } from 'next';

import 'modern-normalize/modern-normalize.css';
import '../common/styles/globals.scss';

export const metadata: Metadata = {
  title: 'Boarlabs',
  description: 'Boarlabs site',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
