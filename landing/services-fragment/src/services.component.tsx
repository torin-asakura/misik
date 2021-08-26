import React              from 'react'
import { FC }             from 'react'

import { Box }            from '@ui/layout'
import { Column }         from '@ui/layout'
import { Layout }         from '@ui/layout'
import { useData }        from '@globals/data'
import { extractObjects } from '@globals/data'
import { useLanguage }    from '@globals/language'

import { List }           from './list'

const Services: FC = () => {
  const { fragments } = useData()
  const [language] = useLanguage()

  let items = []

  if (fragments) {
    items = extractObjects('item', fragments.services[language])
  }

  return (
    <Box width='100%' height='100%' border='1px solid red'>
      <Layout maxWidth={1280}>
        <Column width='100%'>
          <Layout flexBasis={160} />
          <Layout>
            <Box border='1px solid black' width={['100%', '100%', 242]} height={77}>
              Services
            </Box>
          </Layout>
          <Layout flexBasis={64} />
          <Box width='100%' height={1} backgroundColor='black' />
          <Layout flexBasis={120} />
          <List items={items} />
          <Layout flexBasis={120} />
          <Box width='100%' height={560}>
            Accordion
          </Box>
          <Layout flexBasis={160} />
        </Column>
      </Layout>
    </Box>
  )
}
export { Services }
