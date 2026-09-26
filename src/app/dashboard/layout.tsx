"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, PlusCircle, Activity, CheckCircle, Folder, Settings, Sparkles } from 'lucide-react';
import styles from './dashboard.module.css';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className={styles.layout}>
      <aside className={styles.sidebar}>
        <div className={styles.sidebarHeader}>
          <Link href="/" className={styles.logo}>
            <div className={styles.logoIcon}>
              <Sparkles size={14} color="#8b5cf6" />
            </div>
            EVALI<span style={{ color: '#8b5cf6' }}>PIE</span>
          </Link>
        </div>
        
        <nav className={styles.nav}>
          <Link href="/dashboard" className={`${styles.navItem} ${pathname === '/dashboard' ? styles.active : ''}`}>
            <LayoutDashboard size={18} />
            Dashboard
          </Link>
          <Link href="/" className={`${styles.navItem}`}>
            <PlusCircle size={18} />
            New Ticket
          </Link>
          <Link href="/dashboard" className={`${styles.navItem}`}>
            <Activity size={18} />
            Active Investigations
          </Link>
          <Link href="/dashboard" className={`${styles.navItem}`}>
            <CheckCircle size={18} />
            Resolved
          </Link>
          <Link href="/dashboard" className={`${styles.navItem}`}>
            <Folder size={18} />
            Projects
          </Link>
        </nav>
        
        <div className={styles.spacer} />
        
        <nav className={styles.nav}>
          <Link href="/dashboard" className={`${styles.navItem}`}>
            <Settings size={18} />
            Settings
          </Link>
        </nav>
      </aside>
      
      <main className={styles.mainContent}>
        {children}
      </main>
    </div>
  );
}
