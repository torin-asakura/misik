import React          from 'react'
import Helmet         from 'react-helmet'

import { usePreview } from './preview.data'
import { useSeo }     from './seo.data'

const Seo = ({ language }) => {
  const SEO = useSeo()

  const { title } = SEO[language] || { title: 'Boris Misik' }
  const { preview } = usePreview() || {
    preview: 'https://wp.misik.pro/wp-content/uploads/2022/07/relocation-preview.jpg',
  }

  return (
    <Helmet
      title={title}
      meta={[
        {
          name: 'description',
          lang: 'ru',
          content: SEO.RU.metaDesc,
        },
        {
          name: 'description',
          lang: 'en',
          content: SEO.EN.metaDesc,
        },
        {
          property: 'og:title',
          content: title,
        },
        {
          property: 'og:description',
          lang: 'ru',
          content: SEO.RU.metaDesc,
        },
        {
          property: 'og:description',
          lang: 'en',
          content: SEO.EN.metaDesc,
        },
        {
          property: 'og:image',
          content: preview,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          name: 'twitter:card',
          content: 'summary',
        },
        {
          name: 'twitter:title',
          content: title,
        },
        {
          name: 'twitter:description',
          lang: 'ru',
          content: SEO.RU.metaDesc,
        },
        {
          name: 'twitter:description',
          lang: 'en',
          content: SEO.EN.metaDesc,
        },
      ]}
    />
  )
}
export { Seo }
