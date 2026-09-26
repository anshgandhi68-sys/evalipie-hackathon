"use client";
import React from 'react';
import styles from '../dashboard/dashboard.module.css';

export default function SecurityPage() {
  return (
    <div className={styles.content} style={{ padding: '3rem' }}>
      <h1 className={styles.title}>Security</h1>
      <p className={styles.subtitle}>This section is currently under development.</p>
      
      <div className={styles.panel} style={{ marginTop: '2rem', padding: '3rem', textAlign: 'center', color: 'var(--text-muted)' }}>
        <p>No data available yet.</p>
      </div>
    </div>
  );
}
