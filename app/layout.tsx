import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import StyledComponentsRegistry from '@/lib/registry';
import GlobalStyle from '@/components/GlobalStyle';

export const metadata: Metadata = {
  title: 'Sumit Bhardwaj | Senior Frontend Engineer',
  description:
    'Sumit Bhardwaj is a Senior Frontend Engineer who takes products from 0→1 and scales them to millions of users — performance, SSR/SEO, design systems, and security.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,300;12..96,400;12..96,500;12..96,600;12..96,700;12..96,800&family=JetBrains+Mono:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
        <StyledComponentsRegistry>
          <GlobalStyle />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
