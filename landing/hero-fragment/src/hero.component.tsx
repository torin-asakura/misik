import React             from 'react'
import { FC }            from 'react'

import { Box }           from '@ui/layout'
import { Column }        from '@ui/layout'
import { Layout }        from '@ui/layout'
import { useData }       from '@globals/data'
import { extractObject } from '@globals/data'
import { useLanguage }   from '@globals/language'

const Hero: FC = () => {
  const { fragments } = useData()
  const [language] = useLanguage()

  let title: string = ''

  if (fragments && fragments.hero) {
    title = extractObject('title', fragments.hero[language])?.title
  }

  return (
    <Box border='1px solid red' width='100%' height='100%'>
      <Column width='100%'>
        <Layout flexBasis={80} />
        <Box border='1px solid black' height={288} width={864}>
          {title}
        </Box>
        <Layout flexGrow={1} />
        <Box border='1px solid black' width={215} height={34}>
          Get consult
        </Box>
        <Layout flexBasis={80} />
      </Column>
    </Box>
  )
}

export { Hero }
