import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sumit Bhardwaj - Senior Frontend Engineer",
  description:
    "Portfolio of Sumit Bhardwaj - Senior Frontend Engineer with 5+ years of experience in React, Next.js, TypeScript, and Web3 development",
  keywords: [
    "Sumit Bhardwaj",
    "Frontend Engineer",
    "React",
    "Next.js",
    "TypeScript",
    "Web3",
    "Developer Portfolio",
  ],
  authors: [{ name: "Sumit Bhardwaj" }],
  openGraph: {
    title: "Sumit Bhardwaj - Senior Frontend Engineer",
    description:
      "Portfolio showcasing 5+ years of frontend development experience",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Segoe+UI:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ margin: 0, padding: 0, overflow: "hidden" }}>
        {children}
      </body>
    </html>
  );
}
