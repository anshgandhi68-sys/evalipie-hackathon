"use client";

import React, { useState } from 'react';
import { Ticket, Search, Filter, AlertCircle, CheckCircle, Clock } from 'lucide-react';
import Link from 'next/link';

export default function TicketsPage() {
  const [activeTab, setActiveTab] = useState('all');
  
  const tickets = [
    { id: 'TKT-892', title: 'User unable to reset password', priority: 'High', status: 'Open', project: 'acme-corp/auth-service', date: '2 hours ago' },
    { id: 'TKT-891', title: '500 error on checkout webhook', priority: 'Critical', status: 'In Progress', project: 'acme-corp/billing-service', date: '4 hours ago' },
    { id: 'TKT-890', title: 'Broken Calculator logic on addition', priority: 'High', status: 'Resolved', project: 'evalipie-demo/broken-calculator-mvp', date: '1 day ago' },
    { id: 'TKT-889', title: 'Typo in onboarding email', priority: 'Low', status: 'Open', project: 'acme-corp/frontend-app', date: '1 day ago' },
    { id: 'TKT-888', title: 'Database connection pool exhaustion', priority: 'Critical', status: 'Resolved', project: 'acme-corp/billing-service', date: '3 days ago' },
  ];

  return (
    <div style={{ padding: '2rem 3rem', maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div>
          <h1 style={{ fontSize: '1.875rem', fontWeight: 700, marginBottom: '0.5rem', color: '#0f172a' }}>Tickets</h1>
          <p style={{ color: '#64748b' }}>Manage software issues automatically pulled from Jira, GitHub, and Linear.</p>
        </div>
      </div>

      <div style={{ backgroundColor: 'white', border: '1px solid #e2e8f0', borderRadius: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
        
        {/* Toolbar */}
        <div style={{ padding: '1rem 1.5rem', borderBottom: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#f8fafc', borderTopLeftRadius: '12px', borderTopRightRadius: '12px' }}>
          
          <div style={{ display: 'flex', gap: '1rem' }}>
            <button onClick={() => setActiveTab('all')} style={{ padding: '0.5rem 1rem', background: activeTab === 'all' ? '#e2e8f0' : 'transparent', border: 'none', borderRadius: '6px', fontWeight: 600, color: activeTab === 'all' ? '#0f172a' : '#64748b', cursor: 'pointer' }}>All Tickets</button>
            <button onClick={() => setActiveTab('open')} style={{ padding: '0.5rem 1rem', background: activeTab === 'open' ? '#e2e8f0' : 'transparent', border: 'none', borderRadius: '6px', fontWeight: 600, color: activeTab === 'open' ? '#0f172a' : '#64748b', cursor: 'pointer' }}>Open</button>
            <button onClick={() => setActiveTab('resolved')} style={{ padding: '0.5rem 1rem', background: activeTab === 'resolved' ? '#e2e8f0' : 'transparent', border: 'none', borderRadius: '6px', fontWeight: 600, color: activeTab === 'resolved' ? '#0f172a' : '#64748b', cursor: 'pointer' }}>Resolved</button>
          </div>

          <div style={{ display: 'flex', gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', backgroundColor: 'white', padding: '0.5rem 1rem', borderRadius: '6px', border: '1px solid #cbd5e1' }}>
              <Search size={16} color="#94a3b8" />
              <input type="text" placeholder="Search tickets..." style={{ border: 'none', outline: 'none', width: '200px', fontSize: '0.875rem' }} />
            </div>
            <button style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', backgroundColor: 'white', border: '1px solid #cbd5e1', borderRadius: '6px', color: '#475569', fontWeight: 500, fontSize: '0.875rem' }}>
              <Filter size={16} /> Filter
            </button>
          </div>
        </div>

        {/* Ticket List */}
        <div style={{ padding: '0' }}>
          {tickets.map(tkt => (
            <div key={tkt.id} style={{ padding: '1.25rem 1.5rem', borderBottom: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', transition: 'background-color 0.2s' }}>
              
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ marginTop: '0.25rem' }}>
                  {tkt.status === 'Resolved' ? <CheckCircle size={20} color="#10b981" /> : tkt.status === 'In Progress' ? <Clock size={20} color="#f59e0b" /> : <AlertCircle size={20} color="#ef4444" />}
                </div>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.25rem' }}>
                    <span style={{ fontWeight: 600, fontSize: '1rem', color: '#0f172a' }}>{tkt.title}</span>
                    <span style={{ fontSize: '0.75rem', padding: '0.125rem 0.5rem', borderRadius: '999px', fontWeight: 600, backgroundColor: tkt.priority === 'Critical' ? '#fee2e2' : tkt.priority === 'High' ? '#ffedd5' : '#f1f5f9', color: tkt.priority === 'Critical' ? '#991b1b' : tkt.priority === 'High' ? '#9a3412' : '#475569' }}>
                      {tkt.priority}
                    </span>
                  </div>
                  <div style={{ fontSize: '0.875rem', color: '#64748b', display: 'flex', gap: '1rem' }}>
                    <span>{tkt.id}</span>
                    <span>•</span>
                    <span>{tkt.project}</span>
                    <span>•</span>
                    <span>Opened {tkt.date}</span>
                  </div>
                </div>
              </div>

              <div>
                {tkt.status === 'Open' ? (
                  <Link href="/investigations/new" style={{ padding: '0.5rem 1rem', backgroundColor: '#f1f5f9', color: '#475569', borderRadius: '6px', fontWeight: 600, fontSize: '0.875rem', textDecoration: 'none' }}>
                    Investigate
                  </Link>
                ) : tkt.status === 'Resolved' ? (
                  <Link href="/investigations/last" style={{ padding: '0.5rem 1rem', backgroundColor: '#f3e8ff', color: '#7e22ce', borderRadius: '6px', fontWeight: 600, fontSize: '0.875rem', textDecoration: 'none' }}>
                    View Report
                  </Link>
                ) : (
                  <Link href="/investigations/last" style={{ padding: '0.5rem 1rem', backgroundColor: '#fff7ed', color: '#c2410c', borderRadius: '6px', fontWeight: 600, fontSize: '0.875rem', textDecoration: 'none' }}>
                    Watch Live
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
