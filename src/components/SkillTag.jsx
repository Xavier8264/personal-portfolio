export default function SkillTag({ label }) {
  return (
    <span
      style={{
        backgroundColor: 'var(--color-tag-bg)',
        color: 'var(--color-tag-text)',
        borderRadius: 'var(--radius-tag)',
        fontSize: '0.75rem',
        fontWeight: 500,
        padding: '3px 10px',
        display: 'inline-block',
        lineHeight: '1.6',
        whiteSpace: 'nowrap',
      }}
    >
      {label}
    </span>
  )
}
