import React from 'react';
import { contentData } from '../data/content';

export default function Internship() {
  const { internship } = contentData;

  if (!internship) return null;

  return (
    <section className="section" style={{ paddingTop: '40px' }}>
      <div className="container">
        <span className="section-tag">// 06. Technical Experience</span>
        <h2 className="section-title" style={{ fontSize: '2rem', marginBottom: '32px' }}>INTERNSHIP & TRAINING</h2>

        <div style={{
          backgroundColor: 'var(--bg-card)',
          border: '1px solid var(--border)',
          borderRadius: 'var(--radius-md)',
          padding: '32px'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', marginBottom: '12px' }}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 700 }}>
              {internship.role} — <span style={{ color: 'var(--accent)' }}>{internship.organization}</span>
            </h3>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              {internship.status}
            </span>
          </div>

          <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
            {internship.description}
          </p>
        </div>
      </div>
    </section>
  );
}
