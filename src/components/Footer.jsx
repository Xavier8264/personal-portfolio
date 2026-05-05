import { socialLinks, contactInfo } from '../data/social'

function GitHubIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

const ICON_MAP = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
}

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: 'var(--color-accent-dark)',
        color: '#ffffff',
        padding: '32px 24px',
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 16,
        }}
      >
        {/* Left */}
        <p style={{ margin: 0, fontSize: '0.8rem', opacity: 0.7 }}>
          © 2026 Jordan Prunty. All rights reserved.
        </p>

        {/* Center — social icons */}
        <div style={{ display: 'flex', gap: 20 }}>
          {socialLinks.map(({ platform, url, icon }) => {
            const Icon = ICON_MAP[icon]
            return Icon ? (
              <a
                key={platform}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={platform}
                style={{
                  color: '#ffffff',
                  opacity: 0.8,
                  transition: 'opacity 0.2s ease',
                  display: 'flex',
                  alignItems: 'center',
                }}
                onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
                onMouseLeave={e => (e.currentTarget.style.opacity = '0.8')}
              >
                <Icon />
              </a>
            ) : null
          })}
        </div>

        {/* Right */}
        <a
          href={`mailto:${contactInfo.email}`}
          style={{
            fontSize: '0.8rem',
            color: '#ffffff',
            opacity: 0.7,
            textDecoration: 'none',
            transition: 'opacity 0.2s ease',
          }}
          onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
          onMouseLeave={e => (e.currentTarget.style.opacity = '0.7')}
        >
          {contactInfo.email}
        </a>
      </div>
    </footer>
  )
}
