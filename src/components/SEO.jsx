import { Helmet } from 'react-helmet-async'

export default function SEO({
  title,
  description,
  canonical,
  image = '/images/profile/jordan-prunty.heic',
}) {
  const fullTitle = title
    ? `${title} | Jordan Prunty`
    : 'Jordan Prunty — Mechanical Engineer | Portfolio'

  const fullCanonical = canonical
    ? `https://jordanprunty.com${canonical}`
    : 'https://jordanprunty.com'

  const fullImage = image.startsWith('http')
    ? image
    : `https://jordanprunty.com${image}`

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullCanonical} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:image" content={fullImage} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />
    </Helmet>
  )
}
