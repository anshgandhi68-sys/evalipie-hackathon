import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Evalipie | Autonomous Ticket Resolver',
  description: 'An autonomous AI agent that inspects, runs, tests and challenges your hackathon project.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
