"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Shield, Play, Lock, X, Zap, Award, Sparkles } from 'lucide-react';
import styles from './page.module.css';

export default function Home() {
  const router = useRouter();
  const [repoUrl, setRepoUrl] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);

  const handleTestProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!repoUrl) return;
    setLoading(true);
    // In a real implementation we would call our API here.
    // For this MVP, we pass the URL in the query string or localStorage.
    localStorage.setItem('evalipie_repo', repoUrl);
    localStorage.setItem('evalipie_desc', description);
    router.push('/dashboard');
  };

  const handleDemoMode = () => {
    setRepoUrl('https://github.com/evalipie-demo/broken-calculator-mvp');
    setDescription('Calculator returns the wrong result when calculating the square of a number. Expected square(5) = 25, but got 10.');
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>
          <div className={styles.logoIcon}>
            <Sparkles size={14} color="#8b5cf6" />
          </div>
          EVALI<span style={{ color: '#8b5cf6' }}>PIE</span>
          <span className={styles.badge}>AUTONOMOUS INSPECTOR</span>
        </div>
        
        <div className={styles.headerRight}>
          <div className={styles.sandboxBadge}>
            <div className={styles.dot}></div>
            TrueForge Sandbox: <strong style={{ color: '#10b981' }}>Armed</strong>
          </div>
          <button className={styles.demoBtn} onClick={handleDemoMode}>
            <Play size={14} />
            Run Demo Project
          </button>
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.heroBadge}>
          <Shield size={14} />
          Ticket Resolver & Autonomous Bug Reproduction for Hackathons
        </div>
        
        <h1 className={styles.title}>
          Your project makes claims.<br />
          <span className={styles.textGradient}>We try to break them.</span>
        </h1>
        
        <p className={styles.subtitle}>
          An autonomous AI agent that inspects, runs, tests and challenges your hackathon project in an isolated sandbox before the judges do.
        </p>
        
        <div className={styles.steps}>
          <span className={styles.step}>PROJECT</span>
          <span className={styles.arrow}>→</span>
          <span className={styles.step}>INSPECT</span>
          <span className={styles.arrow}>→</span>
          <span className={styles.step}>RUN</span>
          <span className={styles.arrow}>→</span>
          <span className={styles.step}>TEST</span>
          <span className={styles.arrow}>→</span>
          <span className={`${styles.step} ${styles.activePurple}`}>REPRODUCE</span>
          <span className={styles.arrow}>→</span>
          <span className={styles.step}>INVESTIGATE</span>
          <span className={styles.arrow}>→</span>
          <span className={styles.step}>VERIFY</span>
          <span className={styles.arrow}>→</span>
          <span className={`${styles.step} ${styles.activeGreen}`}>REPORT</span>
        </div>
        
        <form className={styles.card} onSubmit={handleTestProject}>
          <div className={styles.inputGroup}>
            <div className={styles.label}>
              GITHUB REPOSITORY URL <span style={{color: 'var(--accent)'}}>*</span>
              <div className={styles.labelLinks}>
                <span className={styles.labelLink} onClick={handleDemoMode}>Load Sample Repo</span>
              </div>
            </div>
            <input 
              type="url" 
              className={styles.input}
              placeholder="https://github.com/hacker-team/math-matrix-mvp" 
              value={repoUrl}
              onChange={(e) => setRepoUrl(e.target.value)}
              required
            />
          </div>
          
          <div className={styles.inputGroup}>
            <div className={styles.label}>
              <div style={{display: 'flex', alignItems: 'center', gap: '0.25rem'}}>
                <Shield size={12} color="#8b5cf6" />
                PROBLEM STATEMENT / PROJECT DESCRIPTION <span style={{color: 'var(--text-muted)', fontWeight: 'normal'}}>(optional)</span>
              </div>
            </div>
            <textarea 
              className={styles.textarea}
              placeholder="e.g. Build an autonomous distributed computing algorithm that accurately squares numerical inputs without precision drops under concurrency..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          
          <div className={styles.disclaimer}>
            <Lock className={styles.disclaimerIcon} size={16} />
            <div className={styles.disclaimerText}>
              <strong>Authorized Sandbox Execution:</strong> Evalipie compiles dependencies, boots the entrypoint, and executes functional invariant tests inside an isolated TrueForge VM.
            </div>
          </div>
          
          <div className={styles.actions}>
            <button type="submit" className={styles.primaryBtn} disabled={loading}>
              <Zap size={16} />
              {loading ? 'STARTING SANDBOX...' : 'TEST MY PROJECT'}
            </button>
            <button type="button" className={styles.secondaryBtn} onClick={handleDemoMode}>
              <Play size={16} />
              Launch Demo Mode
            </button>
          </div>
        </form>
        
        <div className={styles.cardFooter}>
          <span>Evidence over assumptions.</span>
          <span className={styles.highlight}>Claim vs Reality.</span>
          <span>Observed / Inferred / Unverified.</span>
        </div>
        
        <div className={styles.features}>
          <div className={styles.featureCard}>
            <div className={`${styles.featureIcon} ${styles.red}`}>
              <X size={20} />
            </div>
            <div className={styles.featureTitle}>Generic AI Review</div>
            <div className={styles.featureDesc}>
              Reads the README, takes your claims at face value, and gives polite compliments: "Looks clean, great design!"
            </div>
          </div>
          
          <div className={`${styles.featureCard} ${styles.highlighted}`}>
            <div className={styles.featureBadge}>THE EVALIPIE WAY</div>
            <div className={`${styles.featureIcon} ${styles.purple}`}>
              <Zap size={20} />
            </div>
            <div className={styles.featureTitle}>Autonomous Bug Repro</div>
            <div className={styles.featureDesc}>
              Spins up an isolated sandbox, compiles code, runs edge cases, reproduces breaking states, and isolates root causes.
            </div>
          </div>
          
          <div className={styles.featureCard}>
            <div className={`${styles.featureIcon} ${styles.blue}`}>
              <Award size={20} />
            </div>
            <div className={styles.featureTitle}>Judge-Readiness Report</div>
            <div className={styles.featureDesc}>
              Delivers verified claims, observed failures, exact code diff fixes, and the tough questions judges will ask during judging.
            </div>
          </div>
        </div>
      </main>
      
      <footer className={styles.footer}>
        <span>Evalipie MVP • TrueForge Agent Runtime • Sandboxed Execution</span>
        <span>"Evidence over assumptions." <span style={{color: '#8b5cf6', fontWeight: 600}}>Claim vs Reality</span></span>
      </footer>
    </>
  );
}
