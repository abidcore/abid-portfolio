import React from 'react';
import { contentData } from '../data/content';

export default function ResumeSection() {
  const { resumePath } = contentData.personal;

  return (
    <section className="section">
      <div className="container">
        <div style={{
          backgroundColor: 'var(--bg-card)',
          border: '1px solid var(--border)',
          borderRadius: 'var(--radius-lg)',
          padding: '60px 32px',
          textAlign: 'center',
          maxWidth: '840px',
          margin: '0 auto'
        }}>
          <span className="section-tag" style={{ marginBottom: '8px' }}>// CREDENTIALS</span>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '2.2rem', marginBottom: '16px' }}>
            FULL TECHNICAL RESUME
          </h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', marginBottom: '32px' }}>
            Access my complete academic transcript, project portfolio repositories, and technical skills breakdown.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <a href={resumePath} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              View Resume in Tab (PDF) ↗
            </a>
            <a href={resumePath} download="Abid-Ali-Resume.pdf" className="btn btn-secondary">
              Download PDF ⬇
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
