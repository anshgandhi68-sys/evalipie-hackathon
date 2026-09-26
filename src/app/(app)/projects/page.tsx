"use client";

import React from 'react';
import Link from 'next/link';
import { Folder, GitBranch, Github, MoreHorizontal, Plus } from 'lucide-react';

export default function ProjectsPage() {
  const projects = [
    { id: 1, name: 'acme-corp/billing-service', tickets: 12, resolved: 8, framework: 'Node.js / Express', lastActive: '2 hrs ago' },
    { id: 2, name: 'acme-corp/auth-service', tickets: 5, resolved: 5, framework: 'Go / gRPC', lastActive: 'Yesterday' },
    { id: 3, name: 'evalipie-demo/broken-calculator-mvp', tickets: 1, resolved: 1, framework: 'React / Next.js', lastActive: 'Just now' },
    { id: 4, name: 'acme-corp/frontend-app', tickets: 24, resolved: 19, framework: 'React / Next.js', lastActive: '3 days ago' },
  ];

  return (
    <div style={{ padding: '2rem 3rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div>
          <h1 style={{ fontSize: '1.875rem', fontWeight: 700, marginBottom: '0.5rem', color: '#0f172a' }}>Projects</h1>
          <p style={{ color: '#64748b' }}>Manage your connected repositories and agent integrations.</p>
        </div>
        <button style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', backgroundColor: '#0f172a', color: 'white', padding: '0.75rem 1.5rem', borderRadius: '8px', fontWeight: 600, border: 'none', cursor: 'pointer' }}>
          <Github size={18} /> Connect GitHub
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '1.5rem' }}>
        {/* Add New Card */}
        <div style={{ border: '2px dashed #cbd5e1', borderRadius: '12px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '200px', cursor: 'pointer', backgroundColor: '#f8fafc', transition: 'all 0.2s' }}>
          <div style={{ width: '48px', height: '48px', backgroundColor: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 5px rgba(0,0,0,0.05)', marginBottom: '1rem', color: '#64748b' }}>
            <Plus size={24} />
          </div>
          <div style={{ fontWeight: 600, color: '#334155' }}>Add New Project</div>
          <div style={{ fontSize: '0.875rem', color: '#94a3b8' }}>Import from GitHub, GitLab, or Bitbucket</div>
        </div>

        {/* Project Cards */}
        {projects.map((proj) => (
          <div key={proj.id} style={{ backgroundColor: 'white', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '1.5rem', display: 'flex', flexDirection: 'column', boxShadow: '0 1px 3px rgba(0,0,0,0.05)', transition: 'box-shadow 0.2s, transform 0.2s' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{ width: '40px', height: '40px', backgroundColor: '#f3e8ff', color: '#8b5cf6', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Folder size={20} />
                </div>
                <div>
                  <h3 style={{ fontWeight: 600, color: '#0f172a', fontSize: '1rem' }}>{proj.name.split('/')[1]}</h3>
                  <div style={{ fontSize: '0.75rem', color: '#64748b' }}>{proj.name.split('/')[0]}</div>
                </div>
              </div>
              <button style={{ background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer' }}>
                <MoreHorizontal size={20} />
              </button>
            </div>
            
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: '#475569', marginBottom: '0.5rem' }}>
                <GitBranch size={16} color="#94a3b8" /> {proj.framework}
              </div>
              
              <div style={{ marginTop: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', fontWeight: 600, color: '#64748b', marginBottom: '0.5rem' }}>
                  <span>Resolution Progress</span>
                  <span style={{ color: '#10b981' }}>{proj.resolved} / {proj.tickets} fixed</span>
                </div>
                <div style={{ width: '100%', height: '6px', backgroundColor: '#f1f5f9', borderRadius: '3px', overflow: 'hidden' }}>
                  <div style={{ width: \`\${(proj.resolved / proj.tickets) * 100}%\`, height: '100%', backgroundColor: '#10b981', borderRadius: '3px' }}></div>
                </div>
              </div>
            </div>

            <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid #f1f5f9', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.75rem', color: '#94a3b8' }}>
              <span>Active {proj.lastActive}</span>
              <Link href={\`/projects/\${proj.id}\`} style={{ color: '#8b5cf6', fontWeight: 600 }}>View Details</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
