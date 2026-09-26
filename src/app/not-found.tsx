"use client";
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
