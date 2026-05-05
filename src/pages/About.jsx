import { bio, resume } from '../data/about'

function DownloadIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline', verticalAlign: 'middle', marginRight: 8 }}>
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  )
}

const sectionBarStyle = {
  backgroundColor: 'var(--color-accent-dark)',
  color: '#ffffff',
  fontWeight: 700,
  fontSize: '0.8rem',
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
  padding: '8px 16px',
  borderRadius: 6,
  margin: '32px 0 20px',
}

const downloadBtn = {
  display: 'inline-flex',
  alignItems: 'center',
  backgroundColor: 'var(--color-accent)',
  color: '#ffffff',
  padding: '11px 24px',
  borderRadius: 'var(--radius-button)',
  fontWeight: 600,
  fontSize: '0.9rem',
  textDecoration: 'none',
  transition: 'background-color 0.2s ease',
  border: 'none',
  cursor: 'pointer',
}

export default function About() {
  return (
    <div style={{ maxWidth: 1000, margin: '0 auto', padding: '100px 24px 80px' }}>

      {/* ─── Bio Section ─── */}
      <div
        style={{
          display: 'flex',
          gap: 56,
          alignItems: 'flex-start',
          marginBottom: 80,
          flexWrap: 'wrap',
        }}
      >
        {/* Text */}
        <div style={{ flex: '1 1 300px', minWidth: 0 }}>
          <h1
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 800,
              color: 'var(--color-text-primary)',
              letterSpacing: '-0.04em',
              margin: '0 0 24px',
            }}
          >
            About Me
          </h1>
          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.8,
              color: 'var(--color-text-primary)',
              margin: 0,
            }}
          >
            {bio}
          </p>
        </div>

        {/* Photo */}
        <div style={{ flex: '0 0 auto' }}>
          <img
            src="/images/profile/jordan-prunty.jpg"
            alt="Jordan Prunty"
            style={{
              width: 'clamp(200px, 25vw, 300px)',
              aspectRatio: '4/5',
              objectFit: 'cover',
              borderRadius: 'var(--radius-card)',
              display: 'block',
            }}
          />
        </div>
      </div>

      {/* ─── Resume Section ─── */}
      <div>
        {/* Download button — top */}
        <div style={{ marginBottom: 40 }}>
          <a
            href="/resume/jordan-prunty-resume.pdf"
            download
            style={downloadBtn}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'var(--color-accent-hover)')}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'var(--color-accent)')}
          >
            <DownloadIcon />
            Download Resume
          </a>
        </div>

        {/* Resume card */}
        <div
          style={{
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-card)',
            padding: '40px',
            boxShadow: 'var(--shadow-card)',
          }}
        >
          {/* Name / contact header */}
          <div style={{ marginBottom: 4 }}>
            <h2
              style={{
                fontSize: '2rem',
                fontWeight: 800,
                color: 'var(--color-text-primary)',
                letterSpacing: '-0.03em',
                margin: '0 0 6px',
              }}
            >
              {resume.name}
            </h2>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.875rem', margin: 0 }}>
              {resume.phone} &nbsp;·&nbsp; {resume.email}
            </p>
          </div>

          {/* Education */}
          <div style={sectionBarStyle}>Education</div>
          {resume.education.map((edu, i) => (
            <div key={i} style={{ marginBottom: 16 }}>
              <p style={{ margin: '0 0 2px', fontWeight: 600, color: 'var(--color-text-primary)' }}>
                {edu.institution}
              </p>
              <p style={{ margin: '0 0 2px', color: 'var(--color-accent)', fontWeight: 500, fontSize: '0.9rem' }}>
                {edu.degree}
              </p>
              <p style={{ margin: '0 0 4px', color: 'var(--color-text-secondary)', fontSize: '0.875rem' }}>
                {edu.graduationDate}
              </p>
              {edu.notes.map((n, ni) => (
                <p key={ni} style={{ margin: '0', fontSize: '0.875rem', color: 'var(--color-text-secondary)' }}>
                  {n}
                </p>
              ))}
            </div>
          ))}

          {/* Experience */}
          <div style={sectionBarStyle}>Experience</div>
          {resume.experience.map((job, i) => (
            <div key={i} style={{ marginBottom: 28 }}>
              <p style={{ margin: '0 0 2px', fontWeight: 700, color: 'var(--color-text-primary)', fontSize: '0.95rem' }}>
                {job.company}
              </p>
              <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 4, marginBottom: 8 }}>
                <span style={{ color: 'var(--color-accent)', fontWeight: 500, fontSize: '0.875rem' }}>{job.role}</span>
                <span style={{ color: 'var(--color-text-secondary)', fontSize: '0.875rem' }}>{job.dates}</span>
              </div>
              <ul style={{ margin: 0, paddingLeft: 20 }}>
                {job.bullets.map((b, bi) => (
                  <li
                    key={bi}
                    style={{
                      fontSize: '0.875rem',
                      color: 'var(--color-text-primary)',
                      lineHeight: 1.65,
                      marginBottom: 4,
                    }}
                  >
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Skills */}
          <div style={sectionBarStyle}>Skills</div>
          {resume.skills.map((cat, i) => (
            <p key={i} style={{ margin: '0 0 8px', fontSize: '0.875rem', color: 'var(--color-text-primary)' }}>
              <span style={{ fontWeight: 600 }}>{cat.category}: </span>
              {cat.items.join(', ')}
            </p>
          ))}
        </div>

        {/* Download button — bottom */}
        <div style={{ marginTop: 32 }}>
          <a
            href="/resume/jordan-prunty-resume.pdf"
            download
            style={downloadBtn}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'var(--color-accent-hover)')}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'var(--color-accent)')}
          >
            <DownloadIcon />
            Download Resume
          </a>
        </div>
      </div>
    </div>
  )
}
