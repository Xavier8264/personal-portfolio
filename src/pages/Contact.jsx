import { useForm, ValidationError } from '@formspree/react'
import { socialLinks, contactInfo } from '../data/social'
import SEO from '../components/SEO'

const inputStyle = {
  width: '100%',
  padding: '11px 14px',
  borderRadius: 'var(--radius-input)',
  border: '1px solid var(--color-border)',
  fontSize: '0.95rem',
  fontFamily: 'Inter, sans-serif',
  color: 'var(--color-text-primary)',
  backgroundColor: '#ffffff',
  outline: 'none',
  transition: 'border-color 0.2s ease',
  boxSizing: 'border-box',
}

const labelStyle = {
  display: 'block',
  fontSize: '0.875rem',
  fontWeight: 600,
  color: 'var(--color-text-primary)',
  marginBottom: 6,
}

function RequiredStar() {
  return <span style={{ color: '#e53e3e', marginLeft: 2 }}>*</span>
}

export default function Contact() {
  const [state, handleSubmit] = useForm('xrejpkbo')

  return (
    <div style={{ maxWidth: 1000, margin: '0 auto', padding: '100px 24px 80px' }}>
      <SEO
        title="Contact Jordan Prunty — Mechanical Engineer"
        description="Get in touch with Jordan Prunty, mechanical engineering student and builder. Open to internships, full-time roles, freelance projects, and collaborations."
        canonical="/contact"
      />
      <h1
        style={{
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          fontWeight: 800,
          color: 'var(--color-text-primary)',
          letterSpacing: '-0.04em',
          margin: '0 0 48px',
        }}
      >
        Contact
      </h1>

      <div
        style={{
          display: 'flex',
          gap: 64,
          alignItems: 'flex-start',
          flexWrap: 'wrap',
        }}
      >
        {/* Left: Form */}
        <div style={{ flex: '1 1 300px', minWidth: 0 }}>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '1rem', margin: '0 0 28px' }}>
            Got a question or want to work together? Reach out.
          </p>

          {state.succeeded ? (
            <div
              style={{
                backgroundColor: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-card)',
                padding: '32px 28px',
                textAlign: 'center',
              }}
            >
              <p
                style={{
                  fontSize: '1.05rem',
                  color: 'var(--color-accent-dark)',
                  fontWeight: 600,
                  margin: 0,
                }}
              >
                Thanks for reaching out. I'll get back to you soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <div style={{ display: 'flex', gap: 16, marginBottom: 20, flexWrap: 'wrap' }}>
                <div style={{ flex: '1 1 120px' }}>
                  <label style={labelStyle}>
                    First Name<RequiredStar />
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    name="firstName"
                    required
                    style={inputStyle}
                    onFocus={e => (e.target.style.borderColor = 'var(--color-accent)')}
                    onBlur={e => (e.target.style.borderColor = 'var(--color-border)')}
                  />
                  <ValidationError prefix="First Name" field="firstName" errors={state.errors} />
                </div>
                <div style={{ flex: '1 1 120px' }}>
                  <label style={labelStyle}>
                    Last Name<RequiredStar />
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    name="lastName"
                    required
                    style={inputStyle}
                    onFocus={e => (e.target.style.borderColor = 'var(--color-accent)')}
                    onBlur={e => (e.target.style.borderColor = 'var(--color-border)')}
                  />
                  <ValidationError prefix="Last Name" field="lastName" errors={state.errors} />
                </div>
              </div>

              <div style={{ marginBottom: 20 }}>
                <label style={labelStyle}>
                  Email<RequiredStar />
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  style={inputStyle}
                  onFocus={e => (e.target.style.borderColor = 'var(--color-accent)')}
                  onBlur={e => (e.target.style.borderColor = 'var(--color-border)')}
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </div>

              <div style={{ marginBottom: 28 }}>
                <label style={labelStyle}>
                  Message<RequiredStar />
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  style={{ ...inputStyle, resize: 'vertical', minHeight: 120 }}
                  onFocus={e => (e.target.style.borderColor = 'var(--color-accent)')}
                  onBlur={e => (e.target.style.borderColor = 'var(--color-border)')}
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>

              <button
                type="submit"
                disabled={state.submitting}
                style={{
                  backgroundColor: state.submitting ? 'var(--color-text-secondary)' : 'var(--color-accent)',
                  color: '#ffffff',
                  padding: '12px 32px',
                  borderRadius: 'var(--radius-button)',
                  border: 'none',
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  fontFamily: 'Inter, sans-serif',
                  cursor: state.submitting ? 'not-allowed' : 'pointer',
                  transition: 'background-color 0.2s ease',
                  width: '100%',
                }}
                onMouseEnter={e => {
                  if (!state.submitting) e.currentTarget.style.backgroundColor = 'var(--color-accent-hover)'
                }}
                onMouseLeave={e => {
                  if (!state.submitting) e.currentTarget.style.backgroundColor = 'var(--color-accent)'
                }}
              >
                {state.submitting ? 'Sending…' : 'Send Message'}
              </button>
            </form>
          )}
        </div>

        {/* Right: Connect */}
        <div style={{ flex: '0 1 260px', minWidth: 200 }}>
          <h2
            style={{
              fontSize: '1.2rem',
              fontWeight: 700,
              color: 'var(--color-text-primary)',
              letterSpacing: '-0.02em',
              margin: '0 0 24px',
            }}
          >
            Connect
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {/* Email */}
            <div>
              <p style={{ margin: '0 0 4px', fontSize: '0.8rem', fontWeight: 600, color: 'var(--color-text-secondary)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                Email
              </p>
              <a
                href={`mailto:${contactInfo.email}`}
                style={{
                  color: 'var(--color-accent)',
                  fontSize: '0.95rem',
                  textDecoration: 'none',
                  fontWeight: 500,
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-accent-hover)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-accent)')}
              >
                {contactInfo.email}
              </a>
            </div>

            {/* Social links */}
            {socialLinks.map(({ platform, url }) => (
              <div key={platform}>
                <p style={{ margin: '0 0 4px', fontSize: '0.8rem', fontWeight: 600, color: 'var(--color-text-secondary)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  {platform}
                </p>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: 'var(--color-accent)',
                    fontSize: '0.95rem',
                    textDecoration: 'none',
                    fontWeight: 500,
                    transition: 'color 0.2s ease',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-accent-hover)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-accent)')}
                >
                  Jordan Prunty on {platform}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
