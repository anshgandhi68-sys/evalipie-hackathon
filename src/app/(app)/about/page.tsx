"use client";

import React from 'react';
import { Target, Users, Zap, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div style={{ padding: '0', maxWidth: '100%', margin: '0 auto' }}>
      
      {/* Hero Section */}
      <div style={{ backgroundColor: '#0f172a', padding: '6rem 3rem', textAlign: 'center', color: 'white' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1.5rem', letterSpacing: '-1px' }}>
          Building the <span style={{ color: '#a78bfa' }}>future</span> of debugging.
        </h1>
        <p style={{ fontSize: '1.25rem', color: '#94a3b8', maxWidth: '700px', margin: '0 auto', lineHeight: 1.6 }}>
          We believe engineers should spend their time building new features, not drowning in a backlog of maintenance tickets. Evalipie automates the toughest part of software development: finding out why it broke.
        </p>
      </div>

      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '4rem 3rem' }}>
        
        {/* Core Values */}
        <div style={{ marginBottom: '6rem' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#0f172a', marginBottom: '3rem', textAlign: 'center' }}>Our Core Principles</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
            
            <div style={{ display: 'flex', gap: '1.5rem' }}>
              <div style={{ width: '48px', height: '48px', backgroundColor: '#f3e8ff', color: '#8b5cf6', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Target size={24} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.5rem' }}>Evidence over Guesses</h3>
                <p style={{ color: '#64748b', lineHeight: 1.6 }}>LLMs hallucinate. Compilers don't. That's why Evalipie relies entirely on strict execution sandboxes and actual stack traces to verify hypotheses before proposing fixes.</p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1.5rem' }}>
              <div style={{ width: '48px', height: '48px', backgroundColor: '#f0fdf4', color: '#10b981', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <ShieldCheck size={24} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.5rem' }}>Security First</h3>
                <p style={{ color: '#64748b', lineHeight: 1.6 }}>Your source code is your most valuable asset. We use ephemeral, isolated environments and strict permission models so the agent only accesses what you authorize.</p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1.5rem' }}>
              <div style={{ width: '48px', height: '48px', backgroundColor: '#eff6ff', color: '#3b82f6', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Users size={24} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.5rem' }}>Human-in-the-Loop</h3>
                <p style={{ color: '#64748b', lineHeight: 1.6 }}>We don't aim to replace developers. Evalipie acts as a junior engineer that does the heavy lifting, presenting a clean PR and explanation for the senior engineer to approve.</p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1.5rem' }}>
              <div style={{ width: '48px', height: '48px', backgroundColor: '#fff7ed', color: '#f97316', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Zap size={24} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.5rem' }}>Speed & Efficiency</h3>
                <p style={{ color: '#64748b', lineHeight: 1.6 }}>Powered by TrueForge, our agent executes parallel exploratory tasks, meaning a bug that takes a human 3 hours to reproduce takes our agent 3 minutes.</p>
              </div>
            </div>

          </div>
        </div>

        {/* CTA */}
        <div style={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '4rem', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#0f172a', marginBottom: '1rem' }}>Join the Private Beta</h2>
          <p style={{ color: '#64748b', fontSize: '1.125rem', marginBottom: '2rem', maxWidth: '500px', margin: '0 auto 2rem' }}>Experience autonomous resolution on your own repositories.</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
            <Link href="/contact" style={{ backgroundColor: '#8b5cf6', color: 'white', padding: '0.75rem 2rem', borderRadius: '999px', fontWeight: 600, textDecoration: 'none' }}>Contact Sales</Link>
            <Link href="/docs" style={{ backgroundColor: 'white', color: '#0f172a', border: '1px solid #cbd5e1', padding: '0.75rem 2rem', borderRadius: '999px', fontWeight: 600, textDecoration: 'none' }}>Read Docs</Link>
          </div>
        </div>

      </div>
    </div>
  );
}
