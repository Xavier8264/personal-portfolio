export default function BOMTable({ bom }) {
  const { rows } = bom

  const totals = rows.map(row => {
    const qty = Number(row[1])
    const price = Number(row[2])
    return qty * price
  })
  const grandTotal = totals.reduce((sum, t) => sum + t, 0)

  const fmt = n => `$${n.toFixed(2)}`

  const headerStyle = {
    backgroundColor: 'var(--color-accent-dark)',
    color: '#ffffff',
    fontWeight: 600,
    fontSize: '0.8rem',
    padding: '10px 14px',
    textAlign: 'left',
    letterSpacing: '0.03em',
    textTransform: 'uppercase',
    whiteSpace: 'nowrap',
  }

  const cellStyle = (i) => ({
    padding: '10px 14px',
    fontSize: '0.875rem',
    color: 'var(--color-text-primary)',
    borderBottom: '1px solid var(--color-border)',
    backgroundColor: i % 2 === 0 ? '#ffffff' : 'var(--color-surface)',
  })

  const totalRowStyle = {
    padding: '10px 14px',
    fontSize: '0.875rem',
    fontWeight: 700,
    color: 'var(--color-accent-dark)',
    backgroundColor: 'var(--color-surface)',
  }

  return (
    <div style={{ overflowX: 'auto', borderRadius: 'var(--radius-card)', border: '1px solid var(--color-border)' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 560 }}>
        <thead>
          <tr>
            <th style={headerStyle}>Item Name</th>
            <th style={{ ...headerStyle, textAlign: 'center' }}>Qty</th>
            <th style={{ ...headerStyle, textAlign: 'right' }}>Price / Unit</th>
            <th style={headerStyle}>Retailer</th>
            <th style={headerStyle}>Notes</th>
            <th style={{ ...headerStyle, textAlign: 'right' }}>Total</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              <td style={cellStyle(i)}>{row[0]}</td>
              <td style={{ ...cellStyle(i), textAlign: 'center' }}>{row[1]}</td>
              <td style={{ ...cellStyle(i), textAlign: 'right' }}>{fmt(Number(row[2]))}</td>
              <td style={cellStyle(i)}>{row[3]}</td>
              <td style={cellStyle(i)}>{row[4]}</td>
              <td style={{ ...cellStyle(i), textAlign: 'right' }}>{fmt(totals[i])}</td>
            </tr>
          ))}
          <tr>
            <td style={totalRowStyle}>Total</td>
            <td style={totalRowStyle} />
            <td style={totalRowStyle} />
            <td style={totalRowStyle} />
            <td style={totalRowStyle} />
            <td style={{ ...totalRowStyle, textAlign: 'right' }}>{fmt(grandTotal)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
