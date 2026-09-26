"use client";

import React, { useEffect, useState, useRef } from 'react';
import { Terminal, Check, Loader2, ShieldCheck } from 'lucide-react';
import styles from './dashboard.module.css';

type Phase = 'initializing' | 'understanding' | 'inspecting' | 'reproducing' | 'investigating' | 'fixing' | 'retesting' | 'verifying' | 'done';

const PHASES = [
  { id: 'understanding', label: 'Ticket understood' },
  { id: 'inspecting', label: 'Inspecting project' },
  { id: 'reproducing', label: 'Reproducing issue' },
  { id: 'investigating', label: 'Investigating root cause' },
  { id: 'fixing', label: 'Preparing fix' },
  { id: 'retesting', label: 'Running regression tests' },
  { id: 'verifying', label: 'Verifying resolution' },
];

export default function Dashboard() {
  const [repo, setRepo] = useState<string>('');
  const [desc, setDesc] = useState<string>('');
  const [phase, setPhase] = useState<Phase>('initializing');
  const [logs, setLogs] = useState<{cmd: string, out: string}[]>([]);
  const [report, setReport] = useState<any>(null);
  const [rawOutput, setRawOutput] = useState<string>('');
  
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'auto' });
  }, [logs]);

  useEffect(() => {
    const r = localStorage.getItem('evalipie_repo') || '';
    const d = localStorage.getItem('evalipie_desc') || '';
    setRepo(r);
    setDesc(d);

    if (r) {
      startInvestigation(r, d);
    }
  }, []);

  const addLog = (cmd: string, out: string) => {
    setLogs(prev => [...prev, {cmd, out}]);
  };

  const startInvestigation = async (repoUrl: string, description: string) => {
    setPhase('understanding');
    addLog('system start', 'Initializing TrueForge sandbox execution...');
    
    try {
      const res = await fetch('/api/investigate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ repoUrl, description })
      });

      if (!res.body) throw new Error("No response body");

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      
      let fullText = '';
      setPhase('inspecting');

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        
        const chunk = decoder.decode(value, { stream: true });
        
        const lines = chunk.split('\\n');
        for (const line of lines) {
          if (line.startsWith('data: ')) {
            const dataStr = line.slice(6);
            if (dataStr === '[DONE]') continue;
            try {
              const event = JSON.parse(dataStr);
              if (event.type === 'message.chunk') {
                fullText += event.chunk;
                setRawOutput(fullText);
                
                const lowerText = fullText.toLowerCase();
                if (lowerText.includes('reproduce') && phase === 'inspecting') {
                  setPhase('reproducing');
                  addLog('reproduce issue', 'Attempting to reproduce the reported issue in the sandbox...');
                } else if (lowerText.includes('root cause') && phase === 'reproducing') {
                  setPhase('investigating');
                  addLog('investigate', 'Analyzing stack traces and source code to identify root cause...');
                } else if (lowerText.includes('fix') && phase === 'investigating') {
                  setPhase('fixing');
                  addLog('propose fix', 'Generating code changes...');
                }
              } else if (event.type === 'tool.call') {
                addLog(event.tool_name, JSON.stringify(event.arguments));
              } else if (event.type === 'tool.response') {
                addLog('tool output', String(event.result).substring(0, 500) + '...');
              }
            } catch (e) {
              // Not JSON, skip
            }
          }
        }
      }

      setPhase('done');
      addLog('system done', 'Investigation complete.');
      
      // Parse structured JSON block from the end of the text
      try {
        const jsonMatch = fullText.match(/\`\`\`json\\s*([\\s\\S]*?)\\s*\`\`\`/);
        if (jsonMatch && jsonMatch[1]) {
          const parsed = JSON.parse(jsonMatch[1]);
          setReport(parsed);
        } else {
          // Fallback if the agent didn't format properly, don't invent numbers!
          setReport({
            status: 'UNVERIFIED',
            reproduction: 'Agent returned raw text without JSON. See agent output.',
            rootCause: fullText.substring(0, 200) + '...',
            fix: 'Unverified',
            tests: { total: 0, passed: 0, failed: 0 }
          });
        }
      } catch(e) {
         setReport({
            status: 'ERROR',
            reproduction: 'Failed to parse agent JSON output.',
            rootCause: 'N/A',
            fix: 'N/A',
            tests: { total: 0, passed: 0, failed: 0 }
         });
      }

    } catch (err) {
      console.error(err);
      addLog('error', String(err));
      setPhase('done');
    }
  };

  const getPhaseIndex = (p: Phase) => {
    if (p === 'initializing') return -1;
    if (p === 'done') return 999;
    return PHASES.findIndex(x => x.id === p);
  };

  const currentIdx = getPhaseIndex(phase);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Ticket Resolution</h1>
        <p className={styles.subtitle}>Turn software issues into verified resolutions.</p>
      </header>

      <div className={styles.content}>
        <div className={styles.topBar}>
          <div className={styles.ticketTitle}>
            INVESTIGATING TICKET: {desc.substring(0, 50) || repo || 'Loading...'}
          </div>
          <div className={`${styles.statusBadge} ${phase === 'done' ? styles.resolved : styles.working}`}>
            {phase === 'done' ? <Check size={16} /> : <Loader2 size={16} className="animate-spin" />}
            {phase === 'done' ? 'RESOLUTION COMPLETE' : 'AGENT WORKING'}
          </div>
        </div>

        <div className={styles.timeline}>
          {PHASES.map((p, idx) => (
            <React.Fragment key={p.id}>
              <div className={`${styles.timelineItem} ${idx < currentIdx ? styles.done : idx === currentIdx ? styles.active : ''}`}>
                {idx < currentIdx ? <Check size={14} /> : idx === currentIdx ? <Loader2 size={14} className="animate-spin" /> : <div style={{width: 14, height: 14, borderRadius: '50%', border: '1px solid currentColor'}} />}
                {p.label}
              </div>
              {idx < PHASES.length - 1 && <div className={styles.timelineSeparator}>—</div>}
            </React.Fragment>
          ))}
        </div>

        <div className={styles.twoCol}>
          <div className={styles.panel}>
            <div className={styles.panelHeader}>
              <Terminal size={16} color="#8b5cf6" />
              Agent Activity Panel
            </div>
            <div className={styles.terminal}>
              {logs.map((log, i) => (
                <div key={i} className={styles.terminalLine}>
                  <div className={styles.terminalCmd}>$ {log.cmd}</div>
                  <div className={styles.terminalOutput}>{log.out}</div>
                </div>
              ))}
              {phase !== 'done' && (
                <div className={styles.terminalLine}>
                  <div className={styles.terminalCmd} style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                    <Loader2 size={14} className="animate-spin" /> executing...
                  </div>
                </div>
              )}
              <div ref={endRef} />
            </div>
          </div>

          <div className={styles.panel}>
            <div className={styles.panelHeader}>
              <ShieldCheck size={16} color="#10b981" />
              Resolution Report
            </div>
            <div className={styles.panelContent} style={{overflowY: 'auto', backgroundColor: '#f8fafc'}}>
              {report ? (
                <>
                  <div className={styles.reportBlock}>
                    <div className={styles.reportLabel}>Status</div>
                    <div className={styles.statusBadge} style={{display: 'inline-flex', backgroundColor: report.status === 'RESOLVED' ? '#dcfce7' : '#fee2e2', color: report.status === 'RESOLVED' ? '#166534' : '#991b1b'}}>{report.status}</div>
                  </div>
                  <div className={styles.reportBlock}>
                    <div className={styles.reportLabel}>Reproduction (Observed)</div>
                    <div className={styles.reportValue}>{report.reproduction}</div>
                  </div>
                  <div className={styles.reportBlock}>
                    <div className={styles.reportLabel}>Root Cause (Inferred)</div>
                    <div className={styles.reportValue}>{report.rootCause}</div>
                  </div>
                  <div className={styles.reportBlock}>
                    <div className={styles.reportLabel}>Fix</div>
                    <div className={styles.reportValue}>{report.fix}</div>
                  </div>
                  <div className={styles.reportBlock}>
                    <div className={styles.reportLabel}>Tests Run</div>
                    <div className={styles.cardGrid}>
                      <div className={styles.statCard}>
                        <div className={styles.statLabel}>Total</div>
                        <div className={styles.statValue}>{report.tests?.total || 0}</div>
                      </div>
                      <div className={styles.statCard}>
                        <div className={styles.statLabel}>Passed</div>
                        <div className={`${styles.statValue} ${styles.success}`}>{report.tests?.passed || 0}</div>
                      </div>
                      <div className={styles.statCard}>
                        <div className={styles.statLabel}>Failed</div>
                        <div className={`${styles.statValue} ${report.tests?.failed > 0 ? styles.danger : ''}`}>{report.tests?.failed || 0}</div>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', color: '#9ca3af', gap: '1rem', padding: '2rem'}}>
                  <Loader2 size={32} className="animate-spin" />
                  <p>Awaiting resolution report...</p>
                  <p style={{fontSize: '0.75rem', textAlign: 'center', opacity: 0.7}}>Agent is currently reproducing and investigating the issue.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
