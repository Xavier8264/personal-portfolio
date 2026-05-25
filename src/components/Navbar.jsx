import { useState, useEffect, useRef } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Projects', to: '/projects' },
  { label: 'Skills', to: '/skills' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [showToast, setShowToast] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const clickCount = useRef(0)
  const resetTimer = useRef(null)

  function handleWordmarkClick() {
    clearTimeout(resetTimer.current)
    const newCount = clickCount.current + 1
    clickCount.current = newCount
    if (newCount >= 5) {
      clickCount.current = 0
      setShowToast(true)
      setTimeout(() => setShowToast(false), 2500)
      navigate('/lab')
      return
    }
    resetTimer.current = setTimeout(() => { clickCount.current = 0 }, 2000)
    if (newCount === 1) navigate('/')
  }

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
        {/* Wordmark — click 5× quickly to unlock /lab */}
        <span
          onClick={handleWordmarkClick}
          role="link"
          tabIndex={0}
          onKeyDown={e => e.key === 'Enter' && handleWordmarkClick()}
          style={{
            fontWeight: 600,
            fontSize: '1.05rem',
            color: 'var(--color-accent-dark)',
            letterSpacing: '-0.02em',
            textDecoration: 'none',
            cursor: 'pointer',
            userSelect: 'none',
          }}
        >
          Jordan Prunty
        </span>

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

      {/* Easter egg toast */}
      {showToast && (
        <div
          style={{
            position: 'fixed',
            bottom: 24,
            right: 24,
            backgroundColor: '#0e0e0e',
            color: '#d4ff00',
            border: '1px solid #d4ff00',
            borderRadius: 10,
            padding: '12px 20px',
            fontSize: '0.85rem',
            fontWeight: 600,
            fontFamily: 'monospace',
            letterSpacing: '0.05em',
            zIndex: 9999,
            boxShadow: '0 4px 24px rgba(212,255,0,0.25)',
            pointerEvents: 'none',
          }}
        >
          ⚡ secret lab unlocked
        </div>
      )}
    </header>
  )
}
