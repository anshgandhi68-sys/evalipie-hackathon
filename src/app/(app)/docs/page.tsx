"use client";

import React from 'react';
import { Book, Code, Terminal, Zap, Shield, HelpCircle } from 'lucide-react';

export default function DocsPage() {
  return (
    <div style={{ padding: '2rem 3rem', maxWidth: '1000px', margin: '0 auto' }}>
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '1.875rem', fontWeight: 700, marginBottom: '0.5rem', color: '#0f172a' }}>Documentation</h1>
        <p style={{ color: '#64748b' }}>Learn how to integrate Evalipie into your engineering workflow.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '3rem' }}>
        
        {/* Sidebar Nav */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <h4 style={{ fontSize: '0.75rem', fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '0.5rem' }}>Getting Started</h4>
          <a href="#" style={{ padding: '0.5rem 1rem', backgroundColor: '#f3e8ff', color: '#7e22ce', borderRadius: '6px', fontWeight: 600, fontSize: '0.875rem', textDecoration: 'none' }}>Quickstart Guide</a>
          <a href="#" style={{ padding: '0.5rem 1rem', color: '#475569', borderRadius: '6px', fontWeight: 500, fontSize: '0.875rem', textDecoration: 'none' }}>Installation</a>
          <a href="#" style={{ padding: '0.5rem 1rem', color: '#475569', borderRadius: '6px', fontWeight: 500, fontSize: '0.875rem', textDecoration: 'none' }}>Connecting GitHub</a>
          
          <h4 style={{ fontSize: '0.75rem', fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.5px', marginTop: '1.5rem', marginBottom: '0.5rem' }}>Core Concepts</h4>
          <a href="#" style={{ padding: '0.5rem 1rem', color: '#475569', borderRadius: '6px', fontWeight: 500, fontSize: '0.875rem', textDecoration: 'none' }}>Agent Permissions</a>
          <a href="#" style={{ padding: '0.5rem 1rem', color: '#475569', borderRadius: '6px', fontWeight: 500, fontSize: '0.875rem', textDecoration: 'none' }}>Sandboxing</a>
          <a href="#" style={{ padding: '0.5rem 1rem', color: '#475569', borderRadius: '6px', fontWeight: 500, fontSize: '0.875rem', textDecoration: 'none' }}>Automated Testing</a>
          
          <h4 style={{ fontSize: '0.75rem', fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.5px', marginTop: '1.5rem', marginBottom: '0.5rem' }}>API Reference</h4>
          <a href="#" style={{ padding: '0.5rem 1rem', color: '#475569', borderRadius: '6px', fontWeight: 500, fontSize: '0.875rem', textDecoration: 'none' }}>REST API</a>
          <a href="#" style={{ padding: '0.5rem 1rem', color: '#475569', borderRadius: '6px', fontWeight: 500, fontSize: '0.875rem', textDecoration: 'none' }}>Webhooks</a>
        </div>

        {/* Content */}
        <div style={{ color: '#334155', lineHeight: 1.7 }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0f172a', marginBottom: '1rem' }}>Quickstart Guide</h2>
          <p style={{ marginBottom: '1.5rem' }}>Evalipie is designed to plug directly into your existing issue trackers (Jira, Linear, GitHub Issues) and resolve tickets autonomously.</p>
          
          <div style={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '1.5rem', marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1rem', fontWeight: 600, color: '#0f172a', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Terminal size={18} color="#8b5cf6" /> 1. Install the CLI</h3>
            <p style={{ fontSize: '0.875rem', marginBottom: '1rem' }}>To run Evalipie agents locally against your code, install the CLI:</p>
            <div style={{ backgroundColor: '#0f172a', color: '#f8fafc', padding: '1rem', borderRadius: '6px', fontFamily: 'monospace', fontSize: '0.875rem' }}>
              npm install -g evalipie-cli
            </div>
          </div>

          <div style={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '1.5rem', marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1rem', fontWeight: 600, color: '#0f172a', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Zap size={18} color="#8b5cf6" /> 2. Connect a Repository</h3>
            <p style={{ fontSize: '0.875rem', marginBottom: '1rem' }}>Link your GitHub repository to grant the agent access to clone and push branches.</p>
            <div style={{ backgroundColor: '#0f172a', color: '#f8fafc', padding: '1rem', borderRadius: '6px', fontFamily: 'monospace', fontSize: '0.875rem' }}>
              evalipie init --repo https://github.com/acme/project
            </div>
          </div>
          
          <div style={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '1.5rem', marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1rem', fontWeight: 600, color: '#0f172a', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Shield size={18} color="#8b5cf6" /> 3. Configure Permissions</h3>
            <p style={{ fontSize: '0.875rem' }}>By default, Evalipie requires manual approval before creating a Pull Request. You can edit this in your project settings on the dashboard.</p>
          </div>
          
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0f172a', marginTop: '3rem', marginBottom: '1rem' }}>Need Help?</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div style={{ border: '1px solid #e2e8f0', padding: '1.5rem', borderRadius: '8px', display: 'flex', gap: '1rem' }}>
              <Book size={24} color="#8b5cf6" />
              <div>
                <div style={{ fontWeight: 600, color: '#0f172a', marginBottom: '0.25rem' }}>Read the API Docs</div>
                <div style={{ fontSize: '0.875rem' }}>Integrate programmatically.</div>
              </div>
            </div>
            <div style={{ border: '1px solid #e2e8f0', padding: '1.5rem', borderRadius: '8px', display: 'flex', gap: '1rem' }}>
              <HelpCircle size={24} color="#8b5cf6" />
              <div>
                <div style={{ fontWeight: 600, color: '#0f172a', marginBottom: '0.25rem' }}>Contact Support</div>
                <div style={{ fontSize: '0.875rem' }}>We're here to help you.</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
