import React                       from 'react'
import { FC }                      from 'react'
import { useState }                from 'react'

import { DataProvider }            from '@globals/data'
import { LanguageProvider }        from '@globals/language'
import { Language }                from '@globals/language'
import { About }                   from '@landing/about-fragment'
import { Feedback }                from '@landing/feedback-fragment'
import { Footer }                  from '@landing/footer-fragment'
import { Hero }                    from '@landing/hero-fragment'
import { Map }                     from '@landing/map-fragment'
import { Navigation }              from '@landing/navigation-fragment'
import { Reviews }                 from '@landing/reviews-fragment'
import { Services }                from '@landing/services-fragment'
import { WorkDirections }          from '@landing/work-directions-fragment'
import { WorkFormat }              from '@landing/work-format-fragment'
import { SpyScroll }               from '@ui/spy-scroll'
import { useIntersectionObserver } from '@ui/intersection-observer'

import { Seo }                     from './seo.component'

const IndexPage: FC = () => {
  const languageContext = useState<Language>('RU')

  const [active, setActive] = useState<number>(0)

  const { getObserverOptions } = useIntersectionObserver((id) => {
    const order = ['hero', 'about', 'services', 'work-format', 'feedback']

    setActive(order.indexOf(id))
  })

  return (
    <LanguageProvider value={languageContext}>
      <DataProvider>
        <SpyScroll activeDot={active}>
          <Seo language={languageContext} />
          <Navigation />
          <Hero {...getObserverOptions('hero', 0.6)} />
          <WorkDirections />
          <About {...getObserverOptions('about', 0.6)} />
          <Services {...getObserverOptions('services', 0.3)} />
          <WorkFormat {...getObserverOptions('work-format', 0.6)} />
          <Reviews />
          <Feedback {...getObserverOptions('feedback', 0.6)} />
          <Map />
          <Footer />
        </SpyScroll>
      </DataProvider>
    </LanguageProvider>
  )
}
export default IndexPage
