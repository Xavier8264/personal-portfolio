import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Projects', to: '/projects' },
  { label: 'Skills', to: '/skills' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  const isActive = (to) => {
    if (to === '/') return location.pathname === '/'
    return location.pathname.startsWith(to)
  }

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        backgroundColor: '#ffffff',
        borderBottom: '1px solid var(--color-border)',
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '0 24px',
          height: 64,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Wordmark */}
        <Link
          to="/"
          style={{
            fontWeight: 600,
            fontSize: '1.05rem',
            color: 'var(--color-accent-dark)',
            letterSpacing: '-0.02em',
            textDecoration: 'none',
          }}
        >
          Jordan Prunty
        </Link>

        {/* Desktop nav */}
        <nav style={{ display: 'flex', gap: 32 }} className="hidden-mobile">
          {NAV_LINKS.map(({ label, to }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              style={{
                fontSize: '0.9rem',
                fontWeight: isActive(to) ? 600 : 400,
                color: isActive(to) ? 'var(--color-accent)' : 'var(--color-text-secondary)',
                textDecoration: 'none',
                transition: 'color 0.2s ease',
              }}
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Hamburger */}
        <button
          className="show-mobile"
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 8,
            display: 'flex',
            flexDirection: 'column',
            gap: 5,
          }}
        >
          <span
            style={{
              display: 'block',
              width: 22,
              height: 2,
              backgroundColor: 'var(--color-text-primary)',
              borderRadius: 2,
              transition: 'transform 0.2s ease, opacity 0.2s ease',
              transform: menuOpen ? 'translateY(7px) rotate(45deg)' : 'none',
            }}
          />
          <span
            style={{
              display: 'block',
              width: 22,
              height: 2,
              backgroundColor: 'var(--color-text-primary)',
              borderRadius: 2,
              transition: 'opacity 0.2s ease',
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            style={{
              display: 'block',
              width: 22,
              height: 2,
              backgroundColor: 'var(--color-text-primary)',
              borderRadius: 2,
              transition: 'transform 0.2s ease, opacity 0.2s ease',
              transform: menuOpen ? 'translateY(-7px) rotate(-45deg)' : 'none',
            }}
          />
        </button>
      </div>

      {/* Mobile dropdown */}
      <div
        style={{
          overflow: 'hidden',
          maxHeight: menuOpen ? 320 : 0,
          transition: 'max-height 0.3s ease',
          borderTop: menuOpen ? '1px solid var(--color-border)' : 'none',
          backgroundColor: '#ffffff',
        }}
        className="show-mobile"
      >
        {NAV_LINKS.map(({ label, to }) => (
          <Link
            key={to}
            to={to}
            style={{
              display: 'block',
              padding: '16px 24px',
              fontWeight: isActive(to) ? 600 : 400,
              color: isActive(to) ? 'var(--color-accent)' : 'var(--color-text-primary)',
              fontSize: '1rem',
              borderBottom: '1px solid var(--color-border)',
              textDecoration: 'none',
            }}
          >
            {label}
          </Link>
        ))}
      </div>

      <style>{`
        @media (min-width: 768px) {
          .hidden-mobile { display: flex !important; }
          .show-mobile { display: none !important; }
        }
        @media (max-width: 767px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
      `}</style>
    </header>
  )
}
