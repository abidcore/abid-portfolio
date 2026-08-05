import React, { useState } from 'react';
import { contentData } from '../data/content';

export default function Navbar({ theme, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '80px',
      backgroundColor: 'var(--bg)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--border)',
      zIndex: 1000,
      transition: 'var(--transition-theme)'
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '100%'
      }}>
        <a href="#" style={{
          textDecoration: 'none',
          color: 'var(--text-primary)',
          fontFamily: 'var(--font-display)',
          fontWeight: 800,
          fontSize: '1.2rem',
          letterSpacing: '-0.02em',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          {contentData.personal.shortName}
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.65rem',
            padding: '2px 6px',
            backgroundColor: 'var(--bg-secondary)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius-sm)',
            color: 'var(--text-secondary)'
          }}>AI/ML</span>
        </a>

        {/* Desktop Links */}
        <nav style={{ display: 'none' }} className="desktop-nav">
          <ul style={{
            display: 'flex',
            gap: '32px',
            listStyle: 'none',
            alignItems: 'center'
          }}>
            <li><a href="#about" style={{ textDecoration: 'none', color: 'var(--text-secondary)', fontSize: '0.9rem', fontWeight: 600 }}>About</a></li>
            <li><a href="#skills" style={{ textDecoration: 'none', color: 'var(--text-secondary)', fontSize: '0.9rem', fontWeight: 600 }}>Skills</a></li>
            <li><a href="#projects" style={{ textDecoration: 'none', color: 'var(--text-secondary)', fontSize: '0.9rem', fontWeight: 600 }}>Work</a></li>
            <li><a href="#education" style={{ textDecoration: 'none', color: 'var(--text-secondary)', fontSize: '0.9rem', fontWeight: 600 }}>Education</a></li>
            <li><a href="#contact" style={{ textDecoration: 'none', color: 'var(--text-secondary)', fontSize: '0.9rem', fontWeight: 600 }}>Contact</a></li>
          </ul>
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          {/* Theme Switcher Button */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme mode"
            style={{
              padding: '6px 14px',
              backgroundColor: 'var(--bg-secondary)',
              border: '1px solid var(--border)',
              borderRadius: '40px',
              color: 'var(--text-primary)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              fontWeight: 600,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--accent)' }}></span>
            {theme === 'dark' ? 'BLACK MODE' : 'WHITE MODE'}
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle mobile menu"
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--text-primary)',
              fontSize: '1.4rem',
              cursor: 'pointer',
              padding: '8px',
              lineHeight: 1
            }}
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div style={{
          position: 'fixed',
          top: '80px',
          left: 0,
          width: '100%',
          height: 'calc(100vh - 80px)',
          backgroundColor: 'var(--bg)',
          padding: '32px 24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
          borderTop: '1px solid var(--border)',
          zIndex: 999
        }}>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <li><a href="#about" onClick={() => setMenuOpen(false)} style={{ textDecoration: 'none', color: 'var(--text-primary)', fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: 700 }}>01. About</a></li>
            <li><a href="#skills" onClick={() => setMenuOpen(false)} style={{ textDecoration: 'none', color: 'var(--text-primary)', fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: 700 }}>02. Skills</a></li>
            <li><a href="#projects" onClick={() => setMenuOpen(false)} style={{ textDecoration: 'none', color: 'var(--text-primary)', fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: 700 }}>03. Featured Work</a></li>
            <li><a href="#education" onClick={() => setMenuOpen(false)} style={{ textDecoration: 'none', color: 'var(--text-primary)', fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: 700 }}>04. Education</a></li>
            <li><a href="#contact" onClick={() => setMenuOpen(false)} style={{ textDecoration: 'none', color: 'var(--text-primary)', fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: 700 }}>05. Contact</a></li>
          </ul>

          <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <a href={contentData.personal.resumePath} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ textAlign: 'center' }}>
              View Resume (PDF) ↗
            </a>
            <a href={contentData.personal.github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ textAlign: 'center' }}>
              GitHub Profile ↗
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
