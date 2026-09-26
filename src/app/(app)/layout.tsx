"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  Activity, 
  Ticket, 
  Folder, 
  Settings, 
  Sparkles, 
  TerminalSquare, 
  BarChart, 
  BookOpen,
  Search,
  Bell,
  HelpCircle,
  User,
  PlusCircle,
  Menu,
  X
} from 'lucide-react';
import styles from './dashboard/dashboard.module.css';

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen(true);
      }
      if (e.key === 'Escape') {
        setSearchOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navItems = [
    { name: 'Dashboard', href: '/dashboard', icon: <LayoutDashboard size={18} /> },
    { name: 'Investigations', href: '/investigations', icon: <Activity size={18} /> },
    { name: 'Tickets', href: '/tickets', icon: <Ticket size={18} /> },
    { name: 'Projects', href: '/projects', icon: <Folder size={18} /> },
    { name: 'Agent', href: '/agent', icon: <TerminalSquare size={18} /> },
    { name: 'Analytics', href: '/analytics', icon: <BarChart size={18} /> },
    { name: 'Documentation', href: '/docs', icon: <BookOpen size={18} /> },
  ];

  return (
    <div className={styles.layout}>
      {/* Search Modal */}
      {searchOpen && (
        <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center' }} onClick={() => setSearchOpen(false)}>
          <div style={{ backgroundColor: '#1e293b', width: '100%', maxWidth: '600px', borderRadius: '12px', border: '1px solid #334155', padding: '1rem' }} onClick={e => e.stopPropagation()}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', borderBottom: '1px solid #334155', paddingBottom: '0.5rem' }}>
              <Search size={18} color="#94a3b8" />
              <input type="text" placeholder="Search tickets, projects, docs..." autoFocus style={{ backgroundColor: 'transparent', border: 'none', color: 'white', width: '100%', outline: 'none', fontSize: '1rem' }} />
            </div>
            <div style={{ padding: '1rem 0', color: '#94a3b8', fontSize: '0.875rem' }}>
              No recent searches.
            </div>
          </div>
        </div>
      )}

      {/* Sidebar Navigation */}
      <aside className={`${styles.sidebar} ${mobileMenuOpen ? styles.mobileOpen : ''}`}>
        <div className={styles.sidebarHeader}>
          <Link href="/" className={styles.logo}>
            <div className={styles.logoIcon}>
              <Sparkles size={14} color="#8b5cf6" />
            </div>
            EVALI<span style={{ color: '#8b5cf6' }}>PIE</span>
          </Link>
          <button className={styles.mobileClose} onClick={() => setMobileMenuOpen(false)}>
            <X size={20} />
          </button>
        </div>
        
        <div style={{ padding: '1rem' }}>
          <Link href="/investigations/new" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', backgroundColor: '#8b5cf6', color: 'white', padding: '0.75rem', borderRadius: '8px', fontWeight: 600, fontSize: '0.875rem', transition: 'background 0.2s' }}>
            <PlusCircle size={16} />
            New Investigation
          </Link>
        </div>

        <nav className={styles.nav}>
          {navItems.map(item => (
            <Link key={item.href} href={item.href} className={`${styles.navItem} ${pathname.startsWith(item.href) ? styles.active : ''}`}>
              {item.icon}
              {item.name}
            </Link>
          ))}
        </nav>
        
        <div className={styles.spacer} />
        
        <nav className={styles.nav}>
          <Link href="/settings" className={`${styles.navItem} ${pathname.startsWith('/settings') ? styles.active : ''}`}>
            <Settings size={18} />
            Settings
          </Link>
        </nav>
      </aside>
      
      <main className={styles.mainContent}>
        {/* Top Navbar */}
        <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem 2rem', backgroundColor: '#ffffff', borderBottom: '1px solid #e2e8f0', zIndex: 10 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <button className={styles.mobileMenuBtn} onClick={() => setMobileMenuOpen(true)}>
              <Menu size={24} color="#64748b" />
            </button>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', backgroundColor: '#f1f5f9', padding: '0.5rem 1rem', borderRadius: '8px', color: '#64748b', fontSize: '0.875rem', cursor: 'text' }} onClick={() => setSearchOpen(true)}>
              <Search size={16} />
              <span>Search...</span>
              <kbd style={{ backgroundColor: '#e2e8f0', padding: '0.125rem 0.375rem', borderRadius: '4px', fontSize: '0.75rem', marginLeft: '2rem' }}>⌘K</kbd>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            <Link href="/notifications" style={{ color: '#64748b', position: 'relative' }}>
              <Bell size={20} />
              <span style={{ position: 'absolute', top: '-2px', right: '-2px', width: '8px', height: '8px', backgroundColor: '#ef4444', borderRadius: '50%' }}></span>
            </Link>
            <Link href="/docs" style={{ color: '#64748b' }}>
              <HelpCircle size={20} />
            </Link>
            <Link href="/settings" style={{ color: '#64748b', display: 'flex', alignItems: 'center', gap: '0.5rem', borderLeft: '1px solid #e2e8f0', paddingLeft: '1.25rem' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <User size={16} color="#64748b" />
              </div>
            </Link>
          </div>
        </header>

        <div style={{ flex: 1, overflowY: 'auto' }}>
          {children}
        </div>
      </main>
    </div>
  );
}
