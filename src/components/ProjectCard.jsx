import { Link } from 'react-router-dom'
import SkillTag from './SkillTag'

export default function ProjectCard({ project }) {
  const { slug, title, tagline, tags, heroImage } = project

  return (
    <Link
      to={`/projects/${slug}`}
      style={{
        display: 'block',
        borderRadius: 'var(--radius-card)',
        border: '1px solid var(--color-border)',
        backgroundColor: '#ffffff',
        boxShadow: 'var(--shadow-card)',
        overflow: 'hidden',
        transition: 'box-shadow 0.2s ease, transform 0.2s ease',
        textDecoration: 'none',
        color: 'inherit',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.boxShadow = 'var(--shadow-card-hover)'
        e.currentTarget.style.transform = 'translateY(-3px)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.boxShadow = 'var(--shadow-card)'
        e.currentTarget.style.transform = 'translateY(0)'
      }}
    >
      {/* Hero image — 16:9 */}
      <div style={{ position: 'relative', paddingTop: '56.25%', overflow: 'hidden' }}>
        <img
          src={heroImage}
          alt={title}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </div>

      {/* Card body */}
      <div style={{ padding: '20px 20px 16px' }}>
        <h3
          style={{
            margin: '0 0 6px',
            fontSize: '1.05rem',
            fontWeight: 600,
            color: 'var(--color-text-primary)',
            letterSpacing: '-0.02em',
          }}
        >
          {title}
        </h3>
        <p
          style={{
            margin: '0 0 14px',
            fontSize: '0.875rem',
            color: 'var(--color-text-secondary)',
            lineHeight: 1.5,
          }}
        >
          {tagline}
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
          {tags.map(tag => (
            <SkillTag key={tag} label={tag} />
          ))}
        </div>
      </div>
    </Link>
  )
}
