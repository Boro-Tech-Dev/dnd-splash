import type { Metadata } from 'next';
import '@fontsource/inter/latin.css';
import './globals.css';

export const metadata: Metadata = {
  title: 'DeployDeliver',
  description:
    'DeployDeliver helps you launch real open-source apps, follow guided learning paths, and turn practical tech skills into career momentum.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
