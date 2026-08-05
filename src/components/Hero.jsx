import React from 'react';
import { contentData } from '../data/content';

export default function Hero() {
  const { personal, metrics } = contentData;

  return (
    <section style={{
      paddingTop: '140px',
      paddingBottom: '80px',
      position: 'relative'
    }}>
      <div className="container">
        {/* Availability Badge */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          padding: '6px 14px',
          backgroundColor: 'var(--accent-light)',
          border: '1px solid rgba(201, 98, 43, 0.2)',
          borderRadius: '40px',
          color: 'var(--accent)',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.8rem',
          fontWeight: 600,
          marginBottom: '24px'
        }}>
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--accent)' }}></span>
          {personal.status}
        </div>

        {/* Display Typography */}
        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(2.8rem, 6.5vw, 5.5rem)',
          fontWeight: 800,
          lineHeight: 1.05,
          letterSpacing: '-0.03em',
          color: 'var(--text-primary)',
          marginBottom: '20px',
          textTransform: 'uppercase'
        }}>
          {personal.shortName}<br />
          <span style={{ color: 'var(--accent)' }}>AI / MACHINE LEARNING</span><br />
          <span style={{ fontSize: '0.6em', color: 'var(--text-secondary)' }}>COMPUTER VISION / DATA</span>
        </h1>

        <p style={{
          fontSize: 'clamp(1.1rem, 2vw, 1.35rem)',
          color: 'var(--text-secondary)',
          maxWidth: '820px',
          marginBottom: '40px',
          fontWeight: 400,
          lineHeight: 1.6
        }}>
          "{personal.heroStatement}"
        </p>

        {/* Call To Actions */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginBottom: '64px' }}>
          <a href="#projects" className="btn btn-primary">
            Explore Work ↓
          </a>
          <a href={personal.github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
            GitHub @abidcore ↗
          </a>
          <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
            LinkedIn ↗
          </a>
        </div>

        {/* Key Metrics Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '20px',
          padding: '32px',
          backgroundColor: 'var(--bg-card)',
          border: '1px solid var(--border)',
          borderRadius: 'var(--radius-md)'
        }}>
          {metrics.map((m, idx) => (
            <div key={idx} style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{
                fontFamily: 'var(--font-display)',
                fontSize: '2.5rem',
                fontWeight: 800,
                color: 'var(--text-primary)',
                lineHeight: 1,
                marginBottom: '8px'
              }}>{m.value}</span>
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                color: 'var(--text-muted)',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>{m.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
