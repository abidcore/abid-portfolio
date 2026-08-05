import React from 'react';
import { contentData } from '../data/content';

export default function Skills() {
  const { skills } = contentData;

  const skillGroups = [
    { title: "Programming Languages", items: skills.programming },
    { title: "Data & Database", items: skills.dataAndDb },
    { title: "AI & Machine Learning", items: skills.aiAndMl },
    { title: "Tools & Technologies", items: skills.toolsAndFrameworks }
  ];

  return (
    <section id="skills" className="section">
      <div className="container">
        <span className="section-tag">// 02. Technical Competencies</span>
        <h2 className="section-title">SKILLS & TECHNOLOGIES</h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px'
        }}>
          {skillGroups.map((group, idx) => (
            <div key={idx} style={{
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-md)',
              padding: '32px'
            }}>
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.2rem',
                fontWeight: 700,
                color: 'var(--text-primary)',
                marginBottom: '20px',
                paddingBottom: '12px',
                borderBottom: '1px solid var(--border)'
              }}>
                {group.title}
              </h3>

              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {group.items.map((skill, sIdx) => (
                  <li key={sIdx} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    fontSize: '0.95rem',
                    color: 'var(--text-secondary)'
                  }}>
                    <span style={{ color: 'var(--accent)', fontFamily: 'var(--font-mono)', fontSize: '0.8rem' }}>•</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
