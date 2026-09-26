"use client";

import React from 'react';
import { BarChart2, TrendingUp, CheckCircle, Clock } from 'lucide-react';

export default function AnalyticsPage() {
  return (
    <div style={{ padding: '2rem 3rem', maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '1.875rem', fontWeight: 700, marginBottom: '0.5rem', color: '#0f172a' }}>Analytics & Reporting</h1>
        <p style={{ color: '#64748b' }}>Insights into agent performance, resolution rates, and repository health.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem', marginBottom: '2.5rem' }}>
        <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#64748b', fontSize: '0.875rem', fontWeight: 600, marginBottom: '1rem' }}>
            <CheckCircle size={16} /> Total Resolutions
          </div>
          <div style={{ fontSize: '2rem', fontWeight: 800, color: '#0f172a' }}>1,284</div>
          <div style={{ fontSize: '0.875rem', color: '#10b981', display: 'flex', alignItems: 'center', gap: '0.25rem', marginTop: '0.5rem', fontWeight: 500 }}>
            <TrendingUp size={14} /> +12% this month
          </div>
        </div>

        <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#64748b', fontSize: '0.875rem', fontWeight: 600, marginBottom: '1rem' }}>
            <Clock size={16} /> Avg. Resolution Time
          </div>
          <div style={{ fontSize: '2rem', fontWeight: 800, color: '#0f172a' }}>14m 20s</div>
          <div style={{ fontSize: '0.875rem', color: '#10b981', display: 'flex', alignItems: 'center', gap: '0.25rem', marginTop: '0.5rem', fontWeight: 500 }}>
            <TrendingUp size={14} /> -3m since last week
          </div>
        </div>
        
        <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#64748b', fontSize: '0.875rem', fontWeight: 600, marginBottom: '1rem' }}>
            <BarChart2 size={16} /> Automated Fix Rate
          </div>
          <div style={{ fontSize: '2rem', fontWeight: 800, color: '#0f172a' }}>78%</div>
          <div style={{ fontSize: '0.875rem', color: '#64748b', marginTop: '0.5rem' }}>Of 1,646 total tickets</div>
        </div>

        <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#64748b', fontSize: '0.875rem', fontWeight: 600, marginBottom: '1rem' }}>
            <Clock size={16} /> Engineering Hours Saved
          </div>
          <div style={{ fontSize: '2rem', fontWeight: 800, color: '#0f172a' }}>~320 hrs</div>
          <div style={{ fontSize: '0.875rem', color: '#8b5cf6', marginTop: '0.5rem', fontWeight: 500 }}>Estimated this month</div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1.5rem' }}>
        <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 1px 3px rgba(0,0,0,0.05)', minHeight: '400px', display: 'flex', flexDirection: 'column' }}>
          <h3 style={{ fontSize: '1rem', fontWeight: 600, color: '#0f172a', marginBottom: '1.5rem' }}>Resolution Volume</h3>
          <div style={{ flex: 1, display: 'flex', alignItems: 'flex-end', gap: '2%', paddingBottom: '1rem' }}>
            {/* Mock Chart Bars */}
            {[40, 55, 30, 80, 65, 45, 90, 75, 60, 85, 100, 70].map((h, i) => (
              <div key={i} style={{ flex: 1, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', gap: '0.5rem' }}>
                <div style={{ width: '100%', height: \`\${h}%\`, backgroundColor: '#e0e7ff', borderRadius: '4px 4px 0 0', position: 'relative' }}>
                  <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: \`\${h * 0.7}%\`, backgroundColor: '#8b5cf6', borderRadius: '4px 4px 0 0' }}></div>
                </div>
                <div style={{ fontSize: '0.625rem', color: '#94a3b8', textAlign: 'center' }}>{i+1}</div>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', fontSize: '0.75rem', color: '#64748b', marginTop: '1rem' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}><div style={{ width: '8px', height: '8px', borderRadius: '2px', backgroundColor: '#e0e7ff' }}></div> Total Tickets</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}><div style={{ width: '8px', height: '8px', borderRadius: '2px', backgroundColor: '#8b5cf6' }}></div> Resolved by Evalipie</span>
          </div>
        </div>

        <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
          <h3 style={{ fontSize: '1rem', fontWeight: 600, color: '#0f172a', marginBottom: '1.5rem' }}>Most Affected Services</h3>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {[
              { name: 'acme-corp/billing-service', val: 42, color: '#ef4444' },
              { name: 'acme-corp/frontend-app', val: 28, color: '#f59e0b' },
              { name: 'acme-corp/auth-service', val: 18, color: '#3b82f6' },
              { name: 'acme-corp/background-jobs', val: 12, color: '#10b981' },
            ].map(item => (
              <div key={item.name}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem', marginBottom: '0.5rem' }}>
                  <span style={{ fontWeight: 500, color: '#334155' }}>{item.name}</span>
                  <span style={{ fontWeight: 600, color: '#0f172a' }}>{item.val}%</span>
                </div>
                <div style={{ width: '100%', height: '6px', backgroundColor: '#f1f5f9', borderRadius: '3px' }}>
                  <div style={{ width: \`\${item.val}%\`, height: '100%', backgroundColor: item.color, borderRadius: '3px' }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
