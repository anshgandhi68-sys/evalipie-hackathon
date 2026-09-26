const fs = require('fs');
const path = require('path');

const routes = [
  '/tickets',
  '/investigations',
  '/investigations/new',
  '/investigations/[id]',
  '/projects',
  '/projects/[id]',
  '/agent',
  '/analytics',
  '/docs',
  '/about',
  '/contact',
  '/security',
  '/settings',
  '/notifications',
];

const baseDir = path.join(__dirname, 'src', 'app');

function createPageContent(routeName) {
  const title = routeName.replace(/[^a-zA-Z0-9]/g, ' ').trim().replace(/\b\w/g, l => l.toUpperCase());
  return `"use client";
import React from 'react';
import styles from '../dashboard/dashboard.module.css';

export default function ${title.replace(/\s/g, '')}Page() {
  return (
    <div className={styles.content} style={{ padding: '3rem' }}>
      <h1 className={styles.title}>${title || 'Page'}</h1>
      <p className={styles.subtitle}>This section is currently under development.</p>
      
      <div className={styles.panel} style={{ marginTop: '2rem', padding: '3rem', textAlign: 'center', color: 'var(--text-muted)' }}>
        <p>No data available yet.</p>
      </div>
    </div>
  );
}
`;
}

routes.forEach(route => {
  const dirPath = path.join(baseDir, route);
  fs.mkdirSync(dirPath, { recursive: true });
  
  const filePath = path.join(dirPath, 'page.tsx');
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, createPageContent(route));
    console.log(`Created ${filePath}`);
  }
});

// Also create not-found.tsx
const notFoundPath = path.join(baseDir, 'not-found.tsx');
if (!fs.existsSync(notFoundPath)) {
  fs.writeFileSync(notFoundPath, `"use client";
import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', gap: '1rem', color: 'white', backgroundColor: '#0f172a' }}>
      <h1 style={{ fontSize: '3rem', fontWeight: 800 }}>404</h1>
      <p style={{ color: '#9ca3af' }}>Looks like this ticket doesn't exist.</p>
      <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
        <Link href="/dashboard" style={{ padding: '0.5rem 1rem', backgroundColor: '#1f2937', borderRadius: '6px' }}>Back to Dashboard</Link>
        <Link href="/" style={{ padding: '0.5rem 1rem', backgroundColor: '#8b5cf6', borderRadius: '6px' }}>Go Home</Link>
      </div>
    </div>
  );
}
`);
}
