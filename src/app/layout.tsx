import { ReactNode } from 'react';
import type { Metadata } from 'next';

import 'modern-normalize/modern-normalize.css';
import '../common/styles/globals.scss';

export const metadata: Metadata = {
  title: 'Boarlabs',
  description: 'Boarlabs site',
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    title: 'Boarlabs',
    description: 'Boarlabs site',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
