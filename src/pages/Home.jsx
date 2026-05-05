import { Link } from 'react-router-dom'
import { projects } from '../data/projects'
import { skillCategories } from '../data/skills'
import ProjectCard from '../components/ProjectCard'
import SkillTag from '../components/SkillTag'
import SectionFade from '../components/SectionFade'

const published = projects.filter(p => p.published)

const btnPrimary = {
  display: 'inline-block',
  backgroundColor: 'var(--color-accent)',
  color: '#ffffff',
  padding: '12px 28px',
  borderRadius: 'var(--radius-button)',
  fontWeight: 600,
  fontSize: '0.95rem',
  textDecoration: 'none',
  transition: 'background-color 0.2s ease, transform 0.2s ease',
  border: '2px solid var(--color-accent)',
}

const btnOutline = {
  display: 'inline-block',
  backgroundColor: 'transparent',
  color: 'var(--color-accent)',
  padding: '12px 28px',
  borderRadius: 'var(--radius-button)',
  fontWeight: 600,
  fontSize: '0.95rem',
  textDecoration: 'none',
  transition: 'background-color 0.2s ease, color 0.2s ease',
  border: '2px solid var(--color-accent)',
}

const sectionHeading = {
  fontSize: '2rem',
  fontWeight: 700,
  color: 'var(--color-text-primary)',
  letterSpacing: '-0.03em',
  marginBottom: 8,
}

export default function Home() {
  return (
    <div>
      {/* ─── Hero ─── */}
      <section
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          padding: '80px 24px 60px',
          maxWidth: 1200,
          margin: '0 auto',
        }}
      >
        {/* Mobile: column, photo first via flex-direction row-reverse on desktop */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 64,
            width: '100%',
            flexWrap: 'wrap-reverse',
          }}
        >
          {/* Text */}
          <div style={{ flex: '1 1 320px', minWidth: 280 }}>
            <h1
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: 800,
                color: 'var(--color-text-primary)',
                letterSpacing: '-0.04em',
                margin: '0 0 16px',
                lineHeight: 1.1,
              }}
            >
              Hi, I'm Jordan.
            </h1>
            <p
              style={{
                fontSize: '1.2rem',
                color: 'var(--color-text-secondary)',
                margin: '0 0 36px',
                fontWeight: 400,
                lineHeight: 1.5,
              }}
            >
              Mechanical Engineering Student. Builder. Tinkerer.
            </p>
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <Link
                to="/projects"
                style={btnPrimary}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'var(--color-accent-hover)')}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'var(--color-accent)')}
              >
                See My Projects
              </Link>
              <Link
                to="/contact"
                style={btnOutline}
                onMouseEnter={e => {
                  e.currentTarget.style.backgroundColor = 'var(--color-accent)'
                  e.currentTarget.style.color = '#ffffff'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.backgroundColor = 'transparent'
                  e.currentTarget.style.color = 'var(--color-accent)'
                }}
              >
                Get In Touch
              </Link>
            </div>
          </div>

          {/* Photo */}
          <div style={{ flex: '0 0 auto' }}>
            <img
              src="/images/profile/jordan-prunty.jpg"
              alt="Jordan Prunty"
              style={{
                width: 'clamp(220px, 30vw, 360px)',
                aspectRatio: '4/5',
                objectFit: 'cover',
                borderRadius: 'var(--radius-card)',
                display: 'block',
              }}
            />
          </div>
        </div>
      </section>

      {/* ─── Projects Preview ─── */}
      <SectionFade>
        <section
          style={{
            padding: '80px 24px',
            backgroundColor: 'var(--color-surface)',
          }}
        >
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <h2 style={sectionHeading}>Projects</h2>
            <p style={{ color: 'var(--color-text-secondary)', margin: '0 0 40px', fontSize: '1rem' }}>
              A few things I've built.
            </p>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                gap: 24,
                marginBottom: 40,
              }}
            >
              {published.slice(0, 3).map(p => (
                <ProjectCard key={p.slug} project={p} />
              ))}
            </div>
            <div style={{ textAlign: 'center' }}>
              <Link
                to="/projects"
                style={btnOutline}
                onMouseEnter={e => {
                  e.currentTarget.style.backgroundColor = 'var(--color-accent)'
                  e.currentTarget.style.color = '#ffffff'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.backgroundColor = 'transparent'
                  e.currentTarget.style.color = 'var(--color-accent)'
                }}
              >
                See All Projects
              </Link>
            </div>
          </div>
        </section>
      </SectionFade>

      {/* ─── Skills Preview ─── */}
      <SectionFade>
        <section style={{ padding: '80px 24px' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <h2 style={sectionHeading}>Skills</h2>
            <p style={{ color: 'var(--color-text-secondary)', margin: '0 0 40px', fontSize: '1rem' }}>
              Tools and technologies I work with.
            </p>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
                gap: 32,
                marginBottom: 40,
              }}
            >
              {skillCategories.slice(0, 3).map(cat => (
                <div key={cat.category}>
                  <h3
                    style={{
                      fontSize: '0.85rem',
                      fontWeight: 700,
                      color: 'var(--color-accent-dark)',
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      marginBottom: 12,
                    }}
                  >
                    {cat.category}
                  </h3>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {cat.skills.map(s => <SkillTag key={s} label={s} />)}
                  </div>
                </div>
              ))}
            </div>
            <div style={{ textAlign: 'center' }}>
              <Link
                to="/skills"
                style={btnOutline}
                onMouseEnter={e => {
                  e.currentTarget.style.backgroundColor = 'var(--color-accent)'
                  e.currentTarget.style.color = '#ffffff'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.backgroundColor = 'transparent'
                  e.currentTarget.style.color = 'var(--color-accent)'
                }}
              >
                See All Skills
              </Link>
            </div>
          </div>
        </section>
      </SectionFade>

      {/* ─── Contact Preview ─── */}
      <SectionFade>
        <section
          style={{
            padding: '80px 24px',
            backgroundColor: 'var(--color-accent-dark)',
            textAlign: 'center',
          }}
        >
          <div style={{ maxWidth: 600, margin: '0 auto' }}>
            <h2
              style={{
                fontSize: '2rem',
                fontWeight: 700,
                color: '#ffffff',
                letterSpacing: '-0.03em',
                margin: '0 0 12px',
              }}
            >
              Say Hello
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', margin: '0 0 32px', fontSize: '1rem' }}>
              Have a question or want to work together?
            </p>
            <Link
              to="/contact"
              style={{
                ...btnPrimary,
                backgroundColor: '#ffffff',
                color: 'var(--color-accent-dark)',
                border: '2px solid #ffffff',
              }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.9')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
            >
              Contact Me
            </Link>
          </div>
        </section>
      </SectionFade>
    </div>
  )
}
