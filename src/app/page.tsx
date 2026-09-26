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
          <Link href="/investigations">Use Cases</Link>
          <Link href="/projects">Integration</Link>
          <Link href="/docs">Docs</Link>
          <Link href="/about">About Us</Link>
          <Link href="/dashboard" className={styles.navCta}>Go to Dashboard</Link>
        </div>
      </nav>

      <div className={styles.hero}>
        <div className={styles.glow} />
        
        <div className={styles.heroBadge}>
          <Sparkles size={14} /> Evalipie 2.0 is now live for open source
        </div>

        <h1 className={styles.title}>
          Give us the ticket.<br />
          <span className={styles.gradientText}>We'll find what broke.</span>
        </h1>
        
        <p className={styles.description}>
          The premier autonomous AI software ticket resolver. Evalipie seamlessly investigates bugs, finds root causes, applies authorized fixes, and rigorously verifies them using real evidence.
        </p>
        
        <div className={styles.heroActions}>
          <Link href="/investigations/new" className={styles.primaryBtn}>
            Start Investigation
          </Link>
          <Link href="/dashboard" className={styles.secondaryBtn}>
            View Live Demo
          </Link>
        </div>
      </div>

      <div className={styles.workflowSection}>
        <div className={styles.workflowContainer}>
          <div className={styles.workflowStep}>Ticket Submitted</div>
          <div className={styles.workflowArrow}>→</div>
          <div className={styles.workflowStep}>Understand Context</div>
          <div className={styles.workflowArrow}>→</div>
          <div className={styles.workflowStep}>Inspect Source</div>
          <div className={styles.workflowArrow}>→</div>
          <div className={styles.workflowStep}>Reproduce Issue</div>
          <div className={styles.workflowArrow}>→</div>
          <div className={styles.workflowStep}>Diagnose Root Cause</div>
          <div className={styles.workflowArrow}>→</div>
          <div className={styles.workflowStep}>Propose Fix</div>
          <div className={styles.workflowArrow}>→</div>
          <div className={styles.workflowStep}>Run Regression</div>
          <div className={styles.workflowArrow}>→</div>
          <div className={styles.workflowStep} style={{ background: '#f0fdf4', color: '#166534', borderColor: '#86efac' }}>Verified Resolution</div>
        </div>
      </div>

      <div className={styles.features} id="features">
        <h2 className={styles.sectionTitle}>Built for Engineering Teams</h2>
        <p className={styles.sectionSubtitle}>Stop guessing what went wrong. Evalipie relies on hard evidence, execution sandboxes, and actual stack traces to debug your code.</p>
        
        <div className={styles.featureGrid}>
          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <Terminal size={24} />
            </div>
            <h3 className={styles.cardTitle}>Evidence-Based Debugging</h3>
            <p className={styles.cardDesc}>We don't just hallucinate a fix. Evalipie clones your code, runs it in a secure sandbox environment, and extracts real stack traces before proposing a change.</p>
          </div>
          <div className={styles.card}>
            <div className={styles.cardIcon} style={{ background: '#f0fdf4', color: '#10b981' }}>
              <Shield size={24} />
            </div>
            <h3 className={styles.cardTitle}>Granular Authorization</h3>
            <p className={styles.cardDesc}>You retain complete control. Configure granular permissions so the agent is only allowed to investigate, or fully authorize it to push code and execute tests.</p>
          </div>
          <div className={styles.card}>
            <div className={styles.cardIcon} style={{ background: '#eff6ff', color: '#3b82f6' }}>
              <Activity size={24} />
            </div>
            <h3 className={styles.cardTitle}>TrueForge-Powered Engine</h3>
            <p className={styles.cardDesc}>Built natively on top of TrueForge's autonomous agent orchestration platform for enterprise-grade reliability, tool usage, and complex reasoning over large codebases.</p>
          </div>
          <div className={styles.card}>
            <div className={styles.cardIcon} style={{ background: '#fef3c7', color: '#f59e0b' }}>
              <GitBranch size={24} />
            </div>
            <h3 className={styles.cardTitle}>Automated Regression</h3>
            <p className={styles.cardDesc}>Once a fix is applied, Evalipie automatically runs your entire test suite to ensure the fix actually works and no existing functionality was inadvertently broken.</p>
          </div>
        </div>
      </div>

      <footer className={styles.footer}>
        <div className={styles.footerGrid}>
          <div className={styles.footerCol} style={{ gridColumn: 'span 2' }}>
            <div className={styles.logo} style={{ marginBottom: '1.5rem' }}>
              <div className={styles.logoIcon}>
                <Sparkles size={16} color="#8b5cf6" />
              </div>
              EVALI<span className={styles.accent}>PIE</span>
            </div>
            <p style={{ color: '#64748b', lineHeight: 1.6, maxWidth: '300px' }}>
              The premier autonomous agent for investigating and resolving complex software issues with evidence-based verification.
            </p>
          </div>
          
          <div className={styles.footerCol}>
            <h4>PRODUCT</h4>
            <Link href="/dashboard">Dashboard</Link>
            <Link href="/investigations">Investigations</Link>
            <Link href="/tickets">Tickets</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/analytics">Analytics</Link>
          </div>
          
          <div className={styles.footerCol}>
            <h4>RESOURCES</h4>
            <Link href="/docs">Documentation</Link>
            <Link href="/docs">Help Center</Link>
            <Link href="/docs">API Reference</Link>
            <Link href="/security">Security</Link>
            <Link href="/contact">Support</Link>
          </div>
          
          <div className={styles.footerCol}>
            <h4>COMPANY</h4>
            <Link href="/about">About Us</Link>
            <Link href="/contact">Contact</Link>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
        
        <div className={styles.footerBottom}>
          <div>©️ 2026 Evalipie Inc. All rights reserved.</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            Powered by <strong style={{ color: '#0f172a' }}>TrueForge</strong>
          </div>
        </div>
      </footer>
    </main>
  );
}
