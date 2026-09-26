"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Activity, CheckCircle, Bug, Terminal, Clock, ArrowRight } from 'lucide-react';
import styles from './dashboard.module.css';

export default function DashboardPage() {
  const [recentTicketDesc, setRecentTicketDesc] = useState('');
  
  useEffect(() => {
    // Attempt to pull real data from localStorage if they started a demo investigation
    setRecentTicketDesc(localStorage.getItem('evalipie_desc') || '');
  }, []);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Dashboard</h1>
        <p className={styles.subtitle}>Welcome back to Evalipie.</p>
      </header>

      <div className={styles.content}>
        
        {/* Stats Row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
          <div className={styles.statCard} style={{ backgroundColor: 'white' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div className={styles.statLabel}>Active Investigations</div>
              <Activity size={16} color="#8b5cf6" />
            </div>
            <div className={styles.statValue}>1</div>
          </div>
          <div className={styles.statCard} style={{ backgroundColor: 'white' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div className={styles.statLabel}>Resolved Tickets</div>
              <CheckCircle size={16} color="#10b981" />
            </div>
            <div className={styles.statValue}>24</div>
          </div>
          <div className={styles.statCard} style={{ backgroundColor: 'white' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div className={styles.statLabel}>Bugs Reproduced</div>
              <Bug size={16} color="#f59e0b" />
            </div>
            <div className={styles.statValue}>18</div>
          </div>
          <div className={styles.statCard} style={{ backgroundColor: 'white' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div className={styles.statLabel}>Tests Executed</div>
              <Terminal size={16} color="#3b82f6" />
            </div>
            <div className={styles.statValue}>432</div>
          </div>
        </div>

        {/* Recent Investigations */}
        <div className={styles.panel}>
          <div className={styles.panelHeader} style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Clock size={16} color="#64748b" />
              Recent Investigations
            </span>
            <Link href="/investigations" style={{ fontSize: '0.75rem', color: '#8b5cf6', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
              View all <ArrowRight size={12} />
            </Link>
          </div>
          
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid #e2e8f0', backgroundColor: '#f8fafc' }}>
                <th style={{ padding: '1rem', fontSize: '0.75rem', fontWeight: 600, color: '#64748b', textTransform: 'uppercase' }}>Ticket</th>
                <th style={{ padding: '1rem', fontSize: '0.75rem', fontWeight: 600, color: '#64748b', textTransform: 'uppercase' }}>Project</th>
                <th style={{ padding: '1rem', fontSize: '0.75rem', fontWeight: 600, color: '#64748b', textTransform: 'uppercase' }}>Status</th>
                <th style={{ padding: '1rem', fontSize: '0.75rem', fontWeight: 600, color: '#64748b', textTransform: 'uppercase' }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {recentTicketDesc ? (
                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                  <td style={{ padding: '1rem', fontSize: '0.875rem', fontWeight: 500 }}>{recentTicketDesc.substring(0, 40)}...</td>
                  <td style={{ padding: '1rem', fontSize: '0.875rem', color: '#64748b' }}>evalipie-demo/broken-calculator-mvp</td>
                  <td style={{ padding: '1rem' }}>
                    <span style={{ backgroundColor: '#dcfce7', color: '#166534', padding: '0.25rem 0.5rem', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 600 }}>Resolved</span>
                  </td>
                  <td style={{ padding: '1rem' }}>
                    <Link href="/investigations/last" style={{ color: '#8b5cf6', fontSize: '0.875rem', fontWeight: 500 }}>View Report</Link>
                  </td>
                </tr>
              ) : (
                <tr>
                  <td colSpan={4} style={{ padding: '3rem', textAlign: 'center', color: '#94a3b8', fontSize: '0.875rem' }}>
                    No investigations yet.
                    <br />
                    <Link href="/investigations/new" style={{ display: 'inline-block', marginTop: '1rem', padding: '0.5rem 1rem', backgroundColor: '#8b5cf6', color: 'white', borderRadius: '6px', fontWeight: 600 }}>Start your first investigation</Link>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
