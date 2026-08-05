import React from 'react';
import { contentData } from '../data/content';

export default function About() {
  const { personal, careerInterests, languages } = contentData;

  return (
    <section id="about" className="section">
      <div className="container">
        <span className="section-tag">// 01. Background & Profile</span>
        <h2 className="section-title">ABOUT ME</h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '48px',
          alignItems: 'start'
        }}>
          {/* Profile Photo / Visual Card */}
          <div style={{
            backgroundColor: 'var(--bg-card)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius-md)',
            padding: '24px'
          }}>
            <div style={{
              width: '100%',
              aspectRatio: '4 / 3',
              borderRadius: 'var(--radius-sm)',
              backgroundColor: 'var(--bg-secondary)',
              border: '1px solid var(--border)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '24px',
              color: 'var(--text-muted)'
            }}>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '3.5rem', fontWeight: 800 }}>AA</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', marginTop: '8px' }}>PROFILE PHOTO PLACEHOLDER</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px dashed var(--border)', paddingBottom: '8px', fontSize: '0.9rem' }}>
                <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>Name</span>
                <span style={{ fontWeight: 600 }}>{personal.name}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px dashed var(--border)', paddingBottom: '8px', fontSize: '0.9rem' }}>
                <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>Location</span>
                <span style={{ fontWeight: 600 }}>{personal.location}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px dashed var(--border)', paddingBottom: '8px', fontSize: '0.9rem' }}>
                <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>Status</span>
                <span style={{ fontWeight: 600 }}>Final-Year Student</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px dashed var(--border)', paddingBottom: '8px', fontSize: '0.9rem' }}>
                <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>Expected Completion</span>
                <span style={{ fontWeight: 600 }}>2027</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '4px', fontSize: '0.9rem' }}>
                <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>Languages</span>
                <span style={{ fontWeight: 600 }}>{languages.join(', ')}</span>
              </div>
            </div>
          </div>

          {/* Editorial Biography */}
          <div>
            <p style={{
              fontSize: '1.2rem',
              lineHeight: 1.7,
              color: 'var(--text-primary)',
              marginBottom: '24px',
              fontWeight: 500
            }}>
              {personal.bio}
            </p>

            <div style={{
              padding: '20px 24px',
              backgroundColor: 'var(--accent-light)',
              borderLeft: '4px solid var(--accent)',
              borderRadius: '0 var(--radius-sm) var(--radius-sm) 0',
              marginBottom: '32px'
            }}>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-primary)', fontWeight: 600 }}>
                Career Focus: Bridging Computer Vision & Real-World Machine Learning Systems.
              </p>
            </div>

            <h3 style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.85rem',
              color: 'var(--text-muted)',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              marginBottom: '16px'
            }}>CAREER INTERESTS</h3>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {careerInterests.map((interest, idx) => (
                <span key={idx} style={{
                  padding: '8px 16px',
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: '0.85rem',
                  color: 'var(--text-primary)',
                  fontWeight: 600
                }}>
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
