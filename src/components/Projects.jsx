import React, { useState } from 'react';
import { contentData } from '../data/content';

export default function Projects() {
  const { featuredProjects, projectLedger } = contentData;
  const [openLedger, setOpenLedger] = useState(null);

  const toggleLedger = (id) => {
    setOpenLedger(openLedger === id ? null : id);
  };

  return (
    <section id="projects" className="section">
      <div className="container">
        <span className="section-tag">// 03. Centerpiece Work</span>
        <h2 className="section-title">FEATURED CASE STUDIES</h2>

        {/* Top 3 Featured Case Studies */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '48px', marginBottom: '80px' }}>
          {featuredProjects.map((p) => (
            <article key={p.id} style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '32px',
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-lg)',
              padding: '36px',
              alignItems: 'center'
            }}>
              <div>
                <span style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.8rem',
                  color: 'var(--accent)',
                  fontWeight: 700,
                  display: 'block',
                  marginBottom: '12px'
                }}>{p.number} • {p.category}</span>

                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '2rem',
                  fontWeight: 800,
                  color: 'var(--text-primary)',
                  marginBottom: '16px',
                  lineHeight: 1.15
                }}>{p.title}</h3>

                <p style={{
                  color: 'var(--text-secondary)',
                  fontSize: '0.95rem',
                  lineHeight: 1.7,
                  marginBottom: '24px'
                }}>{p.description}</p>

                <ul style={{ listStyle: 'none', marginBottom: '28px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {p.highlights.map((h, hIdx) => (
                    <li key={hIdx} style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ color: 'var(--accent)' }}>➔</span> {h}
                    </li>
                  ))}
                </ul>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '28px' }}>
                  {p.technologies.map((tech, tIdx) => (
                    <span key={tIdx} style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      padding: '4px 10px',
                      backgroundColor: 'var(--bg-secondary)',
                      borderRadius: 'var(--radius-sm)',
                      color: 'var(--text-primary)'
                    }}>{tech}</span>
                  ))}
                </div>

                <a href={p.github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                  View Repository on GitHub ↗
                </a>
              </div>

              {/* Visual Project Image or Code Frame Fallback */}
              <div style={{
                backgroundColor: 'var(--bg-secondary)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                aspectRatio: '16 / 10',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative'
              }}>
                <img 
                  src={`./images/projects/${p.id}.jpg`} 
                  alt={p.title}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    const fallback = e.target.nextElementSibling;
                    if (fallback) fallback.style.display = 'block';
                  }}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />

                <div style={{ display: 'none', padding: '20px', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--accent)', lineHeight: 1.6, width: '100%' }}>
                  <pre style={{ margin: 0, whiteSpace: 'pre-wrap' }}>{p.codeSnippet}</pre>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Compact Project Ledger (Remaining 5) */}
        <span className="section-tag">// 04. Additional Repositories</span>
        <h2 className="section-title" style={{ fontSize: '2rem', marginBottom: '32px' }}>PROJECT LEDGER</h2>

        <div style={{
          backgroundColor: 'var(--bg-card)',
          border: '1px solid var(--border)',
          borderRadius: 'var(--radius-md)',
          overflow: 'hidden'
        }}>
          {projectLedger.map((p) => {
            const isOpen = openLedger === p.id;
            return (
              <div key={p.id} style={{ borderBottom: '1px solid var(--border)' }}>
                <div
                  onClick={() => toggleLedger(p.id)}
                  style={{
                    padding: '20px 24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    cursor: 'pointer',
                    userSelect: 'none',
                    backgroundColor: isOpen ? 'var(--bg-hover)' : 'transparent',
                    transition: 'var(--transition-ui)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--accent)', fontWeight: 700 }}>{p.number}</span>
                    <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 700 }}>{p.title}</span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)' }}>{p.category}</span>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: isOpen ? 'var(--accent)' : 'var(--text-secondary)' }}>
                      {isOpen ? '[ - ]' : '[ + ]'}
                    </span>
                  </div>
                </div>

                {isOpen && (
                  <div style={{ padding: '0 24px 20px 56px', color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                    <p style={{ marginBottom: '16px' }}>{p.description}</p>
                    <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                      {p.technologies.map((tech, tIdx) => (
                        <span key={tIdx} style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', padding: '2px 8px', backgroundColor: 'var(--bg-secondary)', borderRadius: 'var(--radius-sm)' }}>
                          {tech}
                        </span>
                      ))}
                      <a href={p.github} target="_blank" rel="noopener noreferrer" style={{ marginLeft: 'auto', color: 'var(--accent)', fontWeight: 600, textDecoration: 'none' }}>
                        View Repository ↗
                      </a>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
