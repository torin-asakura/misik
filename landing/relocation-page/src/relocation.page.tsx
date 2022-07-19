import React                          from 'react'
import { FC }                         from 'react'
import { useState }                   from 'react'

import { DataProvider }               from '@globals/data'
import { LanguageProvider }           from '@globals/language'
import { Language }                   from '@globals/language'
import { Feedback }                   from '@landing/feedback-fragment'
import { Footer }                     from '@landing/footer-fragment'
import { Map }                        from '@landing/map-fragment'
import { Navigation }                 from '@landing/navigation-fragment'
import { RelocationFaq }              from '@landing/relocation-faq-fragment'
import { RelocationGroundsStatus }    from '@landing/relocation-grounds-status-fragment'
import { RelocationHero }             from '@landing/relocation-hero-fragment'
import { RelocationHowMoveToAmerica } from '@landing/relocation-how-move-to-america-fragment'
import { RelocationOurRole }          from '@landing/relocation-our-role-fragment'
import { RelocationProgramBenefits }  from '@landing/relocation-program-benefits-fragment'
import { Box }                        from '@ui/layout'

const RelocationPage: FC = () => {
  const languageContext = useState<Language>('RU')

  return (
    <LanguageProvider value={languageContext}>
      <DataProvider>
        <Box backgroundColor='background.beige'>
          <Navigation />
        </Box>
        <RelocationHero />
        <RelocationGroundsStatus />
        <RelocationProgramBenefits />
        <RelocationHowMoveToAmerica />
        <RelocationFaq />
        <RelocationOurRole />
        <Feedback background='background.beige' contacts />
        <Map />
        <Footer />
      </DataProvider>
    </LanguageProvider>
  )
}

export default RelocationPage
