import { projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard'
import SEO from '../components/SEO'

const published = projects.filter(p => p.published)

export default function Projects() {
  return (
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '100px 24px 80px' }}>
      <SEO
        title="Engineering Projects — Jordan Prunty"
        description="Browse Jordan Prunty's mechanical engineering projects: a Rubik's Cube solving robot, 3D printed chess robot, 2D iPhone gantry, and plastination lab monitor. Built with Raspberry Pi, Arduino, Python, and CAD."
        canonical="/projects"
      />
      <h1
        style={{
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          fontWeight: 800,
          color: 'var(--color-text-primary)',
          letterSpacing: '-0.04em',
          margin: '0 0 8px',
        }}
      >
        Projects
      </h1>
      <p
        style={{
          color: 'var(--color-text-secondary)',
          fontSize: '1.05rem',
          margin: '0 0 48px',
        }}
      >
        A collection of things I've built.
      </p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 28,
        }}
        className="projects-grid"
      >
        {published.map(p => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>

      <style>{`
        @media (max-width: 1023px) {
          .projects-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 639px) {
          .projects-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}
