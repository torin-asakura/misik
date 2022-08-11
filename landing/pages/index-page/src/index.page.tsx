import React                        from 'react'
import { FC }                       from 'react'
import { useEffect }                from 'react'
import { useState }                 from 'react'
import { useRef }                   from 'react'

import { LocomotiveScrollProvider } from '@forks/react-locomotive-scroll'
import { DataProvider }             from '@globals/data'
import { LanguageProvider }         from '@globals/language'
import { Language }                 from '@globals/language'
import { About }                    from '@landing/about-fragment'
import { Feedback }                 from '@landing/feedback-fragment'
import { Footer }                   from '@landing/footer-fragment'
import { Hero }                     from '@landing/hero-fragment'
import { Map }                      from '@landing/map-fragment'
import { Navigation }               from '@landing/navigation-fragment'
import { Services }                 from '@landing/services-fragment'
import { WorkDirections }           from '@landing/work-directions-fragment'
import { WorkFormat }               from '@landing/work-format-fragment'
import { Preloader }                from '@ui/preloader'
import { SpyScroll }                from '@ui/spy-scroll'
import { SpyScrollProvider }        from '@ui/spy-scroll'
import { useIntersectionObserver }  from '@ui/intersection-observer'
import { useSpyScroll }             from '@ui/spy-scroll'

import { Seo }                      from './seo.component'

interface Props {
  ogCover: string
  SEO: any
  data: any
}

const Fragments = ({ data: { hero, about, services, workFormats, feedback } }) => {
  const spyScrollStore = useSpyScroll()
  const { getObserverOptions } = useIntersectionObserver((id) => {
    const order = ['hero', 'about', 'services', 'work-format', 'feedback']

    spyScrollStore.setActive(order.indexOf(id))
  })

  useEffect(() => {
    setTimeout(() => {
      spyScrollStore.setActive(0)
    }, 1000)
    // eslint-disable-next-line
  }, [])

  return (
    <>
      <Hero data={hero} {...getObserverOptions('hero', 0.6)} />
      <WorkDirections />
      <About data={about} {...getObserverOptions('about', 0.6)} />
      <Services data={services} {...getObserverOptions('services', 0.3)} />
      <WorkFormat data={workFormats} {...getObserverOptions('work-format', 0.5)} />
      <Feedback data={feedback} {...getObserverOptions('feedback', 0.8)} contacts />
      <Map />
      <Footer />
    </>
  )
}

const IndexPage: FC<Props> = ({ ogCover, SEO = { RU: {}, EN: {} }, data }) => {
  const languageContext = useState<Language>('RU')
  const containerRef = useRef(null)

  return (
    <Preloader>
      <LanguageProvider value={languageContext}>
        <DataProvider>
          <LocomotiveScrollProvider
            options={{
              smooth: true,
              smartphone: {
                smooth: true,
              },
              tablet: {
                smooth: true,
              },
            }}
            containerRef={containerRef}
            watch={[]}
          >
            <SpyScrollProvider>
              <Navigation />
              <SpyScroll />
              <Seo language={languageContext} ogCover={ogCover} SEO={SEO} />
              <main data-scroll-container ref={containerRef}>
                <Fragments data={data} />
              </main>
            </SpyScrollProvider>
          </LocomotiveScrollProvider>
        </DataProvider>
      </LanguageProvider>
    </Preloader>
  )
}

export default IndexPage
