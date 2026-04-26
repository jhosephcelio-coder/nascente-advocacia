import { Helmet } from 'react-helmet-async'
import { SEO as SEO_DATA, ESCRITORIO } from '../constants/index.js'

/**
 * SEO — injeta metatags dinâmicas via react-helmet-async.
 * Pode receber props opcionais para páginas internas.
 */
export default function SEO({
  titulo     = SEO_DATA.titulo,
  descricao  = SEO_DATA.descricao,
  url        = SEO_DATA.url,
  ogImage    = SEO_DATA.og_image,
}) {
  return (
    <Helmet>
      {/* Básico */}
      <html lang="pt-BR" />
      <title>{titulo}</title>
      <meta name="description" content={descricao} />
      <meta name="author" content={ESCRITORIO.nome} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type"        content="website" />
      <meta property="og:url"         content={url} />
      <meta property="og:title"       content={titulo} />
      <meta property="og:description" content={descricao} />
      <meta property="og:image"       content={ogImage} />
      <meta property="og:locale"      content="pt_BR" />
      <meta property="og:site_name"   content={ESCRITORIO.nome} />

      {/* Twitter */}
      <meta name="twitter:card"        content="summary_large_image" />
      <meta name="twitter:url"         content={url} />
      <meta name="twitter:title"       content={titulo} />
      <meta name="twitter:description" content={descricao} />
      <meta name="twitter:image"       content={ogImage} />

      {/* Tema mobile */}
      <meta name="theme-color" content="#1a3d2b" />
    </Helmet>
  )
}
