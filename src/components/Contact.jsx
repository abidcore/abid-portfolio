import React, { useState } from 'react';
import { contentData } from '../data/content';

export default function Contact() {
  const { personal } = contentData;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <span className="section-tag">// 07. Direct Communication</span>
        <h2 className="section-title">GET IN TOUCH</h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '48px'
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <div>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                Email
              </span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '4px' }}>
                <a href={`mailto:${personal.email}`} style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-primary)', textDecoration: 'none' }}>
                  {personal.email}
                </a>
                <button onClick={handleCopyEmail} style={{
                  padding: '4px 10px',
                  backgroundColor: 'var(--bg-secondary)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: '0.75rem',
                  fontFamily: 'var(--font-mono)',
                  cursor: 'pointer',
                  color: 'var(--text-secondary)'
                }}>
                  {copied ? 'Copied! ✓' : 'Copy 📋'}
                </button>
              </div>
            </div>

            <div>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                Phone Number
              </span>
              <div style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-primary)', marginTop: '4px' }}>
                {personal.phone}
              </div>
            </div>

            <div>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                Location
              </span>
              <div style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-primary)', marginTop: '4px' }}>
                {personal.location}
              </div>
            </div>

            <div>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                Professional Channels
              </span>
              <div style={{ display: 'flex', gap: '12px', marginTop: '12px' }}>
                <a href={personal.github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                  GitHub Profile ↗
                </a>
                <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                  LinkedIn ↗
                </a>
              </div>
            </div>
          </div>

          <div style={{
            backgroundColor: 'var(--bg-card)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius-md)',
            padding: '32px'
          }}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', marginBottom: '16px' }}>
              DIRECT MESSAGE
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '24px' }}>
              Click below to send a message directly to my email address.
            </p>
            <a href={`mailto:${personal.email}?subject=Inquiry%20regarding%20AI/ML%20Roles`} className="btn btn-primary" style={{ width: '100%', textAlign: 'center' }}>
              Send Direct Email ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
