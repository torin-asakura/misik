import React                from 'react'
import { FC }               from 'react'
import { useState }         from 'react'

import { Navigation }       from '@landing/navigation-fragment'
import { Feedback }         from '@landing/feedback-fragment'
import { Map }              from '@landing/map-fragment'
import { Footer }           from '@landing/footer-fragment'
import { DataProvider }     from '@globals/data'
import { LanguageProvider } from '@globals/language'
import { Language }         from '@globals/language'
import { Box }              from '@ui/layout'

import { Seo }              from './seo.component'

const ContactsPage: FC = () => {
  const languageContext = useState<Language>('RU')

  return (
    <LanguageProvider value={languageContext}>
      <DataProvider>
        <Seo language={languageContext} />
        <Box backgroundColor='background.beige'>
          <Navigation contacts />
        </Box>
        <Feedback background='background.beige' contacts />
        <Map />
        <Footer />
      </DataProvider>
    </LanguageProvider>
  )
}
export default ContactsPage
