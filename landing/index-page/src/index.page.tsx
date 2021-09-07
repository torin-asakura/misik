import React                from 'react'
import { FC }               from 'react'
import { useState }         from 'react'

import { Navigation }       from '@landing/navigation-fragment'
import { About }            from '@landing/about-fragment'
import { SliderContainer }  from '@ui/page-slider'
import { DataProvider }     from '@globals/data'
import { LanguageProvider } from '@globals/language'
import { Language }         from '@globals/language'

const IndexPage: FC = () => {
  const languageContext = useState<Language>('RU')

  return (
    <LanguageProvider value={languageContext}>
      <DataProvider>
        <Navigation />
        <SliderContainer progressContainerWidth={400}>
          <About />
        </SliderContainer>
      </DataProvider>
    </LanguageProvider>
  )
}
export default IndexPage
