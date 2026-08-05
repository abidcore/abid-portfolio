import React from 'react';
import { contentData } from '../data/content';

export default function Education() {
  const { education } = contentData;

  return (
    <section id="education" className="section">
      <div className="container">
        <span className="section-tag">// 05. Academic Qualifications</span>
        <h2 className="section-title">EDUCATION</h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {education.map((edu, idx) => (
            <div key={idx} style={{
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-md)',
              padding: '32px',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '24px',
              alignItems: 'start'
            }}>
              <div>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--accent)', fontWeight: 600 }}>
                  {edu.status}
                </span>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)', marginTop: '4px' }}>
                  {edu.institution}
                </h3>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{edu.location}</span>
              </div>

              <div>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '8px' }}>
                  {edu.qualification}
                </h4>
                <div style={{
                  display: 'inline-block',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.8rem',
                  padding: '4px 10px',
                  backgroundColor: 'var(--bg-secondary)',
                  borderRadius: 'var(--radius-sm)',
                  color: 'var(--text-primary)',
                  marginBottom: '12px'
                }}>
                  {edu.score}
                </div>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  {edu.details}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
