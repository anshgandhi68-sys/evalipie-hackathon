"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FileText, Bug, Terminal, Lock, ChevronRight, Loader2 } from 'lucide-react';
import styles from '../../dashboard/dashboard.module.css';

export default function NewInvestigationPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [repoUrl, setRepoUrl] = useState('');
  const [description, setDescription] = useState('');
  const [expected, setExpected] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [permissions, setPermissions] = useState({ inv: true, code: true, test: true });

  const handleStart = async () => {
    if (!repoUrl || !description) return alert("Repository and Description are required.");
    setIsSubmitting(true);
    
    // Save to local storage for the dashboard to pick up
    localStorage.setItem('evalipie_repo', repoUrl);
    localStorage.setItem('evalipie_desc', description + (expected ? `\\nExpected: ${expected}` : ''));
    
    // We will navigate to the investigation detail with a generic ID or 'last' for MVP
    setTimeout(() => {
      router.push('/investigations/last');
    }, 500);
  };

  const loadDemo = () => {
    setRepoUrl('https://github.com/evalipie-demo/broken-calculator-mvp');
    setDescription('Calculator returns wrong result for addition in the UI.');
    setExpected('It should return the mathematical sum of the two inputs.');
    setStep(4);
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>New Investigation</h1>
        <p className={styles.subtitle}>Submit a ticket for autonomous agent resolution.</p>
      </header>

      <div className={styles.content} style={{ maxWidth: '800px', margin: '0 auto', width: '100%' }}>
        
        {/* Progress Bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem', position: 'relative' }}>
          <div style={{ position: 'absolute', top: '50%', left: '0', right: '0', height: '2px', backgroundColor: '#e2e8f0', zIndex: 0 }}></div>
          <div style={{ position: 'absolute', top: '50%', left: '0', width: \`\${(step / 4) * 100}%\`, height: '2px', backgroundColor: '#8b5cf6', zIndex: 0, transition: 'width 0.3s' }}></div>
          
          {[1, 2, 3, 4].map(s => (
            <div key={s} style={{ zIndex: 1, backgroundColor: step >= s ? '#8b5cf6' : 'white', border: \`2px solid \${step >= s ? '#8b5cf6' : '#e2e8f0'}\`, width: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: step >= s ? 'white' : '#94a3b8', fontWeight: 600, transition: 'all 0.3s' }}>
              {s}
            </div>
          ))}
        </div>

        <div className={styles.panel} style={{ padding: '2rem' }}>
          
          {step === 1 && (
            <div style={{ animation: 'fadeIn 0.3s' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', color: '#8b5cf6', fontWeight: 600 }}>
                <FileText size={20} /> STEP 1: TICKET INFO
              </div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Ticket Title / Description</label>
              <textarea 
                value={description}
                onChange={e => setDescription(e.target.value)}
                placeholder="Describe the bug or issue..."
                style={{ width: '100%', padding: '1rem', borderRadius: '8px', border: '1px solid #cbd5e1', minHeight: '120px', marginBottom: '1rem', outline: 'none', resize: 'vertical' }}
              />
              <button onClick={loadDemo} style={{ color: '#8b5cf6', fontSize: '0.875rem', fontWeight: 500, background: 'none', border: 'none', cursor: 'pointer', marginBottom: '1rem' }}>Load Demo Issue</button>
            </div>
          )}

          {step === 2 && (
            <div style={{ animation: 'fadeIn 0.3s' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', color: '#8b5cf6', fontWeight: 600 }}>
                <Bug size={20} /> STEP 2: BEHAVIOR
              </div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Expected Behavior</label>
              <textarea 
                value={expected}
                onChange={e => setExpected(e.target.value)}
                placeholder="What should happen?"
                style={{ width: '100%', padding: '1rem', borderRadius: '8px', border: '1px solid #cbd5e1', minHeight: '80px', marginBottom: '1.5rem', outline: 'none' }}
              />
            </div>
          )}

          {step === 3 && (
            <div style={{ animation: 'fadeIn 0.3s' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', color: '#8b5cf6', fontWeight: 600 }}>
                <Terminal size={20} /> STEP 3: PROJECT REPOSITORY
              </div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>GitHub Repository URL</label>
              <input 
                type="text"
                value={repoUrl}
                onChange={e => setRepoUrl(e.target.value)}
                placeholder="https://github.com/..."
                style={{ width: '100%', padding: '1rem', borderRadius: '8px', border: '1px solid #cbd5e1', marginBottom: '1.5rem', outline: 'none' }}
              />
            </div>
          )}

          {step === 4 && (
            <div style={{ animation: 'fadeIn 0.3s' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', color: '#8b5cf6', fontWeight: 600 }}>
                <Lock size={20} /> STEP 4: PERMISSIONS
              </div>
              
              <div style={{ border: '1px solid #e2e8f0', borderRadius: '8px', padding: '1rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <input type="checkbox" checked={permissions.inv} onChange={() => setPermissions(p => ({...p, inv: !p.inv}))} style={{ width: '18px', height: '18px' }} />
                <div>
                  <div style={{ fontWeight: 600 }}>Investigation Authorized</div>
                  <div style={{ fontSize: '0.875rem', color: '#64748b' }}>Allow the agent to clone and inspect the repository.</div>
                </div>
              </div>

              <div style={{ border: '1px solid #e2e8f0', borderRadius: '8px', padding: '1rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <input type="checkbox" checked={permissions.code} onChange={() => setPermissions(p => ({...p, code: !p.code}))} style={{ width: '18px', height: '18px' }} />
                <div>
                  <div style={{ fontWeight: 600 }}>Code Modification Authorized</div>
                  <div style={{ fontSize: '0.875rem', color: '#64748b' }}>Allow the agent to propose and apply code fixes.</div>
                </div>
              </div>

            </div>
          )}

          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2rem', paddingTop: '1rem', borderTop: '1px solid #e2e8f0' }}>
            {step > 1 ? (
              <button onClick={() => setStep(s => s - 1)} style={{ padding: '0.75rem 1.5rem', backgroundColor: '#f1f5f9', color: '#475569', borderRadius: '6px', fontWeight: 600, border: 'none', cursor: 'pointer' }}>Back</button>
            ) : <div></div>}
            
            {step < 4 ? (
              <button onClick={() => setStep(s => s + 1)} style={{ padding: '0.75rem 1.5rem', backgroundColor: '#8b5cf6', color: 'white', borderRadius: '6px', fontWeight: 600, border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>Next <ChevronRight size={16} /></button>
            ) : (
              <button onClick={handleStart} disabled={isSubmitting} style={{ padding: '0.75rem 1.5rem', backgroundColor: '#10b981', color: 'white', borderRadius: '6px', fontWeight: 600, border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                {isSubmitting ? <Loader2 size={16} className="animate-spin" /> : <ChevronRight size={16} />}
                {isSubmitting ? 'Initializing...' : 'Start Investigation'}
              </button>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
