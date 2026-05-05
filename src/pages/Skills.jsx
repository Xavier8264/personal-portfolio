import { skillCategories } from '../data/skills'
import SkillTag from '../components/SkillTag'

const ambientImages = [
  '/images/skills/ambient-1.jpg',
  '/images/skills/ambient-2.jpg',
  '/images/skills/ambient-3.jpg',
]

export default function Skills() {
  return (
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '100px 24px 80px' }}>
      <h1
        style={{
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          fontWeight: 800,
          color: 'var(--color-text-primary)',
          letterSpacing: '-0.04em',
          margin: '0 0 8px',
        }}
      >
        Skills
      </h1>
      <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.05rem', margin: '0 0 56px' }}>
        Tools and technologies I work with.
      </p>

      <div style={{ display: 'flex', gap: 64, alignItems: 'flex-start' }}>

        {/* Left: skill categories */}
        <div style={{ flex: '1 1 0', minWidth: 0 }}>
          {skillCategories.map(cat => (
            <div key={cat.category} style={{ marginBottom: 40 }}>
              <h2
                style={{
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  color: 'var(--color-accent-dark)',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  margin: '0 0 14px',
                }}
              >
                {cat.category}
              </h2>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {cat.skills.map(s => <SkillTag key={s} label={s} />)}
              </div>
            </div>
          ))}
        </div>

        {/* Right: ambient photos — hidden on mobile via CSS */}
        <div
          className="skills-photos"
          style={{
            flex: '0 0 280px',
            display: 'flex',
            flexDirection: 'column',
            gap: 24,
            position: 'sticky',
            top: 88,
          }}
        >
          {ambientImages.map((src, i) => (
            <img
              key={i}
              src={src}
              alt=""
              aria-hidden="true"
              style={{
                width: '100%',
                aspectRatio: '4/3',
                objectFit: 'cover',
                borderRadius: 'var(--radius-card)',
                display: 'block',
              }}
            />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .skills-photos { display: none !important; }
        }
      `}</style>
    </div>
  )
}
