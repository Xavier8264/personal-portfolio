import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

const LAB_ITEMS = [
  {
    emoji: '🍗',
    title: 'Bulk Meal Plan',
    description: 'High-protein dirty bulk nutrition plan. Tracks macros and weekly meals to keep the gains clean-ish.',
    href: '/bulk-meal-plan.html',
  },
  {
    emoji: '🏋️',
    title: 'Workout Tracker',
    description: 'Logging sets, reps, and progression over time. PRs, programs, and volume tracking.',
    href: null,
  },
  {
    emoji: '💸',
    title: 'Budget Tracker',
    description: 'Monthly spending breakdown and savings goals. Where is the money actually going.',
    href: null,
  },
  {
    emoji: '📚',
    title: 'Reading & Watchlist',
    description: 'Books, films, and shows I want to get through. Rated and reviewed as I go.',
    href: null,
  },
]

function LabCard({ emoji, title, description, href }) {
  const canOpen = Boolean(href)
  return (
    <div
      style={{
        backgroundColor: '#1a1a1a',
        border: '1px solid #2e2e2e',
        borderRadius: 16,
        padding: '28px 24px',
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
        transition: 'border-color 0.2s ease',
      }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = canOpen ? '#d4ff00' : '#444' }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = '#2e2e2e' }}
    >
      <span style={{ fontSize: '2rem', lineHeight: 1 }}>{emoji}</span>
      <h2
        style={{
          color: '#f0f0f0',
          fontSize: '1.05rem',
          fontWeight: 700,
          margin: 0,
          letterSpacing: '-0.01em',
        }}
      >
        {title}
      </h2>
      <p
        style={{
          color: '#888',
          fontSize: '0.875rem',
          lineHeight: 1.6,
          margin: 0,
          flex: 1,
        }}
      >
        {description}
      </p>
      {canOpen ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            marginTop: 4,
            padding: '8px 16px',
            backgroundColor: '#d4ff00',
            color: '#0e0e0e',
            borderRadius: 8,
            fontSize: '0.8rem',
            fontWeight: 700,
            textDecoration: 'none',
            letterSpacing: '0.03em',
            width: 'fit-content',
            transition: 'opacity 0.15s ease',
          }}
          onMouseEnter={e => { e.currentTarget.style.opacity = '0.85' }}
          onMouseLeave={e => { e.currentTarget.style.opacity = '1' }}
        >
          Open →
        </a>
      ) : (
        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            marginTop: 4,
            padding: '6px 12px',
            backgroundColor: '#2a2a2a',
            color: '#555',
            borderRadius: 8,
            fontSize: '0.75rem',
            fontWeight: 600,
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            width: 'fit-content',
            cursor: 'default',
          }}
        >
          Coming Soon
        </span>
      )}
    </div>
  )
}

export default function LabDashboard() {
  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#0e0e0e',
        color: '#f0f0f0',
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <Helmet>
        <title>lab — jordan prunty</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      {/* Minimal top bar */}
      <header
        style={{
          padding: '0 32px',
          height: 60,
          borderBottom: '1px solid #2e2e2e',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <span
          style={{
            fontFamily: 'monospace',
            fontSize: '0.8rem',
            color: '#d4ff00',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
          }}
        >
          JP / lab
        </span>
        <Link
          to="/"
          style={{
            fontSize: '0.8rem',
            color: '#555',
            textDecoration: 'none',
            transition: 'color 0.15s ease',
          }}
          onMouseEnter={e => { e.currentTarget.style.color = '#f0f0f0' }}
          onMouseLeave={e => { e.currentTarget.style.color = '#555' }}
        >
          ← back to portfolio
        </Link>
      </header>

      {/* Main content */}
      <main style={{ maxWidth: 900, margin: '0 auto', padding: '64px 24px 96px' }}>
        <h1
          style={{
            fontSize: 'clamp(2.5rem, 7vw, 4.5rem)',
            fontWeight: 800,
            color: '#f0f0f0',
            letterSpacing: '-0.04em',
            margin: '0 0 10px',
            lineHeight: 1,
          }}
        >
          personal lab
        </h1>
        <p
          style={{
            color: '#555',
            fontSize: '0.95rem',
            margin: '0 0 56px',
            fontFamily: 'monospace',
            letterSpacing: '0.02em',
          }}
        >
          tools, trackers &amp; experiments — not for public consumption.
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
            gap: 20,
          }}
        >
          {LAB_ITEMS.map(item => (
            <LabCard key={item.title} {...item} />
          ))}
        </div>
      </main>
    </div>
  )
}
