import { useParams, Navigate } from 'react-router-dom'
import { projects } from '../data/projects'
import SkillTag from '../components/SkillTag'
import BOMTable from '../components/BOMTable'
import SectionFade from '../components/SectionFade'
import SEO from '../components/SEO'

function GitHubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline', verticalAlign: 'middle', marginRight: 8 }}>
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  )
}

const sectionDivider = {
  border: 'none',
  borderTop: '1px solid var(--color-border)',
  margin: '40px 0',
}

const sectionHeader = {
  fontSize: '1.4rem',
  fontWeight: 700,
  color: 'var(--color-accent-dark)',
  letterSpacing: '-0.02em',
  margin: '0 0 16px',
}

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find(p => p.slug === slug && p.published)

  if (!project) return <Navigate to="/projects" replace />

  const { title, heroImage, githubUrl, sections, skillsUsed, bom } = project

  return (
    <div>
      <SEO
        title={`${title} — Jordan Prunty`}
        description={`${project.tagline} — A mechanical engineering project by Jordan Prunty using ${skillsUsed.slice(0, 4).join(', ')}.`}
        canonical={`/projects/${project.slug}`}
        image={heroImage}
      />

      {/* JSON-LD CreativeWork schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            "name": title,
            "description": project.tagline,
            "url": `https://jordanprunty.com/projects/${project.slug}`,
            "author": {
              "@type": "Person",
              "name": "Jordan Prunty",
              "url": "https://jordanprunty.com"
            },
            "keywords": skillsUsed.join(', ')
          })
        }}
      />

      {/* Hero image with title overlay */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          maxHeight: 480,
          overflow: 'hidden',
          marginTop: 64,
        }}
      >
        <img
          src={heroImage}
          alt={`${title} — Jordan Prunty engineering project`}
          style={{
            width: '100%',
            maxHeight: 480,
            objectFit: 'cover',
            display: 'block',
          }}
        />
        {/* Gradient + title overlay */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            padding: '60px 40px 28px',
            background: 'linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 100%)',
          }}
        >
          <h1
            style={{
              color: '#ffffff',
              fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              margin: 0,
              textShadow: '0 1px 4px rgba(0,0,0,0.3)',
            }}
          >
            {title}
          </h1>
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: 800, margin: '0 auto', padding: '48px 24px 80px' }}>

        {/* Overview */}
        <SectionFade>
          <p
            style={{
              fontSize: '1.15rem',
              color: 'var(--color-text-primary)',
              lineHeight: 1.75,
              margin: '0 0 32px',
            }}
          >
            {sections.overview}
          </p>
        </SectionFade>

        {/* GitHub button */}
        {githubUrl && (
          <SectionFade>
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '10px 22px',
                borderRadius: 'var(--radius-button)',
                border: '2px solid var(--color-accent)',
                color: 'var(--color-accent)',
                fontWeight: 600,
                fontSize: '0.9rem',
                textDecoration: 'none',
                transition: 'all 0.2s ease',
                marginBottom: 40,
              }}
              onMouseEnter={e => {
                e.currentTarget.style.backgroundColor = 'var(--color-accent)'
                e.currentTarget.style.color = '#ffffff'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = 'transparent'
                e.currentTarget.style.color = 'var(--color-accent)'
              }}
            >
              <GitHubIcon />
              View on GitHub
            </a>
          </SectionFade>
        )}

        <hr style={sectionDivider} />

        {/* The Goal */}
        <SectionFade>
          <h2 style={sectionHeader}>The Goal</h2>
          <p style={{ lineHeight: 1.75, color: 'var(--color-text-primary)', margin: 0 }}>
            {sections.theGoal}
          </p>
        </SectionFade>

        <hr style={sectionDivider} />

        {/* Design and Build */}
        <SectionFade>
          <h2 style={sectionHeader}>Design and Build Process</h2>
          <p style={{ lineHeight: 1.75, color: 'var(--color-text-primary)', margin: 0 }}>
            {sections.designAndBuild}
          </p>
        </SectionFade>

        <hr style={sectionDivider} />

        {/* Problems */}
        <SectionFade>
          <h2 style={sectionHeader}>Problems and How I Solved Them</h2>
          <p style={{ lineHeight: 1.75, color: 'var(--color-text-primary)', margin: 0 }}>
            {sections.problemsEncountered}
          </p>
        </SectionFade>

        <hr style={sectionDivider} />

        {/* What I Learned */}
        <SectionFade>
          <h2 style={sectionHeader}>What I Learned</h2>
          <p style={{ lineHeight: 1.75, color: 'var(--color-text-primary)', margin: 0 }}>
            {sections.whatILearned}
          </p>
        </SectionFade>

        <hr style={sectionDivider} />

        {/* Skills Used */}
        <SectionFade>
          <h2 style={sectionHeader}>Skills Used</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {skillsUsed.map(s => <SkillTag key={s} label={s} />)}
          </div>
        </SectionFade>

        <hr style={sectionDivider} />

        {/* BOM */}
        <SectionFade>
          <h2 style={sectionHeader}>Bill of Materials</h2>
          <BOMTable bom={bom} />
        </SectionFade>
      </div>
    </div>
  )
}
