"use client";

import React from 'react';
import Link from 'next/link';
import { Activity, Clock, Plus, Search, Filter } from 'lucide-react';

export default function InvestigationsPage() {
  const investigations = [
    { id: 'INV-1029', title: 'Payment Gateway Timeout', repo: 'acme-corp/billing-service', status: 'Resolving', time: '10 mins ago', author: 'Alex Chen' },
    { id: 'INV-1028', title: 'Calculator returns wrong result for addition', repo: 'evalipie-demo/broken-calculator-mvp', status: 'Resolved', time: '2 hours ago', author: 'Demo User' },
    { id: 'INV-1027', title: 'Memory leak in worker pool', repo: 'acme-corp/background-jobs', status: 'Failed', time: 'Yesterday', author: 'Sarah Jenkins' },
    { id: 'INV-1026', title: 'Race condition on login token refresh', repo: 'acme-corp/auth-service', status: 'Resolved', time: '2 days ago', author: 'Mike Ross' },
  ];

  return (
    <div style={{ padding: '2rem 3rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div>
          <h1 style={{ fontSize: '1.875rem', fontWeight: 700, marginBottom: '0.5rem', color: '#0f172a' }}>Investigations</h1>
          <p style={{ color: '#64748b' }}>Track and manage all autonomous agent debugging sessions.</p>
        </div>
        <Link href="/investigations/new" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', backgroundColor: '#8b5cf6', color: 'white', padding: '0.75rem 1.5rem', borderRadius: '8px', fontWeight: 600 }}>
          <Plus size={18} /> New Investigation
        </Link>
      </div>

      <div style={{ backgroundColor: 'white', border: '1px solid #e2e8f0', borderRadius: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
        <div style={{ padding: '1rem 1.5rem', borderBottom: '1px solid #e2e8f0', display: 'flex', gap: '1rem', backgroundColor: '#f8fafc', borderTopLeftRadius: '12px', borderTopRightRadius: '12px' }}>
          <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: '0.5rem', backgroundColor: 'white', padding: '0.5rem 1rem', borderRadius: '6px', border: '1px solid #cbd5e1' }}>
            <Search size={16} color="#94a3b8" />
            <input type="text" placeholder="Search by ID, title, or repository..." style={{ border: 'none', outline: 'none', width: '100%', fontSize: '0.875rem' }} />
          </div>
          <button style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', backgroundColor: 'white', border: '1px solid #cbd5e1', borderRadius: '6px', color: '#475569', fontWeight: 500, fontSize: '0.875rem' }}>
            <Filter size={16} /> Filter
          </button>
        </div>

        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
              <th style={{ padding: '1rem 1.5rem', fontSize: '0.75rem', fontWeight: 600, color: '#64748b', textTransform: 'uppercase' }}>ID</th>
              <th style={{ padding: '1rem 1.5rem', fontSize: '0.75rem', fontWeight: 600, color: '#64748b', textTransform: 'uppercase' }}>Issue Title</th>
              <th style={{ padding: '1rem 1.5rem', fontSize: '0.75rem', fontWeight: 600, color: '#64748b', textTransform: 'uppercase' }}>Repository</th>
              <th style={{ padding: '1rem 1.5rem', fontSize: '0.75rem', fontWeight: 600, color: '#64748b', textTransform: 'uppercase' }}>Status</th>
              <th style={{ padding: '1rem 1.5rem', fontSize: '0.75rem', fontWeight: 600, color: '#64748b', textTransform: 'uppercase' }}>Time</th>
            </tr>
          </thead>
          <tbody>
            {investigations.map((inv) => (
              <tr key={inv.id} style={{ borderBottom: '1px solid #e2e8f0', transition: 'background-color 0.2s', cursor: 'pointer' }} onClick={() => window.location.href = inv.id === 'INV-1028' ? '/investigations/last' : \`/investigations/\${inv.id}\`}>
                <td style={{ padding: '1rem 1.5rem', fontSize: '0.875rem', fontWeight: 600, color: '#0f172a' }}>{inv.id}</td>
                <td style={{ padding: '1rem 1.5rem', fontSize: '0.875rem', fontWeight: 500, color: '#334155' }}>{inv.title}</td>
                <td style={{ padding: '1rem 1.5rem', fontSize: '0.875rem', color: '#64748b' }}>{inv.repo}</td>
                <td style={{ padding: '1rem 1.5rem' }}>
                  <span style={{ 
                    padding: '0.25rem 0.75rem', 
                    borderRadius: '999px', 
                    fontSize: '0.75rem', 
                    fontWeight: 600,
                    backgroundColor: inv.status === 'Resolved' ? '#dcfce7' : inv.status === 'Resolving' ? '#fef3c7' : '#fee2e2',
                    color: inv.status === 'Resolved' ? '#166534' : inv.status === 'Resolving' ? '#92400e' : '#991b1b'
                  }}>
                    {inv.status}
                  </span>
                </td>
                <td style={{ padding: '1rem 1.5rem', fontSize: '0.875rem', color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Clock size={14} /> {inv.time}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
