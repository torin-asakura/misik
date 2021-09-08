import React                from 'react'
import { FC }               from 'react'
import { useState }         from 'react'

import { Navigation }       from '@landing/navigation-fragment'
import { Hero }             from '@landing/hero-fragment'
import { About }            from '@landing/about-fragment'
import { Services }         from '@landing/services-fragment'
import { WorkFormat }       from '@landing/work-format-fragment'
import { ScrollProgress }   from '@ui/scroll-progress'
import { DataProvider }     from '@globals/data'
import { LanguageProvider } from '@globals/language'
import { Language }         from '@globals/language'

const IndexPage: FC = () => {
  const languageContext = useState<Language>('RU')

  return (
    <LanguageProvider value={languageContext}>
      <DataProvider>
        <Navigation />
        <ScrollProgress progressContainerWidth={40}>
          <WorkFormat />
        </ScrollProgress>
      </DataProvider>
    </LanguageProvider>
  )
}
export default IndexPage
