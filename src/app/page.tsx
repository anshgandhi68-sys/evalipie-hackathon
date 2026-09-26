import React from 'react';
import Link from 'next/link';
import { Terminal, Shield, Activity, GitBranch, Sparkles } from 'lucide-react';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <div className={styles.logoIcon}>
            <Sparkles size={16} color="#8b5cf6" />
          </div>
          EVALI<span className={styles.accent}>PIE</span>
        </div>
        <div className={styles.navLinks}>
          <a href="#features">Features</a>
          <a href="#how-it-works">How It Works</a>
          <Link href="/docs">Documentation</Link>
          <Link href="/about">About</Link>
          <Link href="/dashboard" className={styles.navCta}>Dashboard</Link>
        </div>
      </nav>

      <div className={styles.hero}>
        <div className={styles.glow} />
        <h1 className={styles.title}>
          Give us the ticket.<br />
          <span className={styles.gradientText}>We'll find what broke.</span>
        </h1>
        <p className={styles.description}>
          An autonomous AI software ticket resolver that investigates bugs, finds root causes, applies authorized fixes, and verifies them with real evidence.
        </p>
        
        <div className={styles.heroActions}>
          <Link href="/investigations/new" className={styles.primaryBtn}>
            Start Investigation
          </Link>
          <Link href="/dashboard" className={styles.secondaryBtn}>
            Explore Demo
          </Link>
        </div>
      </div>

      <div className={styles.workflowSection}>
        <div className={styles.workflowContainer}>
          <div className={styles.workflowStep}>Ticket</div>
          <div className={styles.workflowArrow}>→</div>
          <div className={styles.workflowStep}>Understand</div>
          <div className={styles.workflowArrow}>→</div>
          <div className={styles.workflowStep}>Inspect</div>
          <div className={styles.workflowArrow}>→</div>
          <div className={styles.workflowStep}>Reproduce</div>
          <div className={styles.workflowArrow}>→</div>
          <div className={styles.workflowStep}>Diagnose</div>
          <div className={styles.workflowArrow}>→</div>
          <div className={styles.workflowStep}>Fix</div>
          <div className={styles.workflowArrow}>→</div>
          <div className={styles.workflowStep}>Test</div>
          <div className={styles.workflowArrow}>→</div>
          <div className={styles.workflowStep}>Verify</div>
        </div>
      </div>

      <div className={styles.features} id="features">
        <div className={styles.featureGrid}>
          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <Terminal size={24} color="#8b5cf6" />
            </div>
            <h3 className={styles.cardTitle}>Evidence-Based Debugging</h3>
            <p className={styles.cardDesc}>We don't just guess. Evalipie clones your code, runs it in a secure sandbox, and extracts real stack traces before proposing a fix.</p>
          </div>
          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <Shield size={24} color="#10b981" />
            </div>
            <h3 className={styles.cardTitle}>Security & Authorization</h3>
            <p className={styles.cardDesc}>Granular permissions. You decide if the agent is allowed to just investigate, or if it can push code and run tests.</p>
          </div>
          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <Activity size={24} color="#3b82f6" />
            </div>
            <h3 className={styles.cardTitle}>TrueForge-Powered</h3>
            <p className={styles.cardDesc}>Built on top of TrueForge's autonomous agent orchestration for enterprise-grade reliability and complex reasoning.</p>
          </div>
          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <GitBranch size={24} color="#f59e0b" />
            </div>
            <h3 className={styles.cardTitle}>Regression Testing</h3>
            <p className={styles.cardDesc}>Once a fix is applied, Evalipie automatically runs your test suite to ensure no existing functionality was broken.</p>
          </div>
        </div>
      </div>

      <footer className={styles.footer}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem', maxWidth: '1200px', margin: '0 auto', textAlign: 'left', padding: '0 2rem' }}>
          <div>
            <h4 style={{ color: 'white', marginBottom: '1rem' }}>PRODUCT</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', color: '#94a3b8' }}>
              <Link href="/dashboard">Dashboard</Link>
              <Link href="/investigations">Investigations</Link>
              <Link href="/tickets">Tickets</Link>
              <Link href="/projects">Projects</Link>
              <Link href="/analytics">Analytics</Link>
            </div>
          </div>
          <div>
            <h4 style={{ color: 'white', marginBottom: '1rem' }}>RESOURCES</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', color: '#94a3b8' }}>
              <Link href="/docs">Documentation</Link>
              <Link href="/docs">Help Center</Link>
              <Link href="/docs">FAQ</Link>
              <Link href="/security">Security</Link>
            </div>
          </div>
          <div>
            <h4 style={{ color: 'white', marginBottom: '1rem' }}>COMPANY</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', color: '#94a3b8' }}>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>
          <div>
            <h4 style={{ color: 'white', marginBottom: '1rem' }}>LEGAL</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', color: '#94a3b8' }}>
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
            </div>
          </div>
        </div>
        <div style={{ marginTop: '4rem', color: '#64748b', fontSize: '0.875rem' }}>
          ©️ 2026 Evalipie • Powered by TrueForge
        </div>
      </footer>
    </main>
  );
}
