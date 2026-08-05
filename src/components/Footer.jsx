import React from 'react';
import { contentData } from '../data/content';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{
      padding: '40px 0',
      borderTop: '1px solid var(--border)',
      fontSize: '0.85rem',
      color: 'var(--text-muted)'
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '16px'
      }}>
        <div>
          © 2026 {contentData.personal.name}. All rights reserved. • {contentData.personal.location}
        </div>
        <div>
          Deployed via GitHub Pages •{' '}
          <button onClick={scrollToTop} style={{
            background: 'none',
            border: 'none',
            color: 'var(--text-primary)',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.85rem',
            cursor: 'pointer',
            fontWeight: 600
          }}>
            Back to Top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
