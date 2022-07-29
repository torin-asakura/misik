import React           from 'react'
import { FC }          from 'react'

import { Button }      from '@ui/button'
import { Box }         from '@ui/layout'
import { Row }         from '@ui/layout'
import { Column }      from '@ui/layout'
import { Layout }      from '@ui/layout'
import { NextLink }    from '@ui/link'
import { Text }        from '@ui/text'
import { useLanguage } from '@globals/language'
import { messages }    from '@globals/messages'

const NotFound: FC = () => {
  const [language] = useLanguage()

  return (
    <Box width='100%' height='100%' backgroundColor='background.lightBeige' justifyContent='center'>
      <Layout flexBasis={[20, 20, 0]} flexShrink={0} />
      <Column fill justifyContent='center' alignItems='center'>
        <Layout flexBasis={[108, 108, 275]} />
        <Row justifyContent='center'>
          <Text
            textTransform='uppercase'
            fontSize={['tiny', 'tiny', 'regular']}
            lineHeight='big'
            color='text.accent'
          >
            {messages.error404[language]}
          </Text>
        </Row>
        <Layout flexBasis={[12, 12, 8]} />
        <Row justifyContent='center' alignItems='center'>
          <Text
            textAlign='center'
            fontFamily='secondary'
            textTransform='uppercase'
            fontWeight='thin'
            fontSize={['big', 'big', 'giant']}
            lineHeight='small'
          >
            {messages.pageNotFound[language]}
          </Text>
        </Row>
        <Layout flexBasis={[12, 12, 8]} />
        <Row justifyContent='center'>
          <Text
            textAlign='center'
            fontSize={['tiny', 'tiny', 'regular']}
            lineHeight='big'
            color='text.secondary'
          >
            {messages.thisPageDoesNotExist[language]}
          </Text>
        </Row>
        <Layout flexBasis={[32, 32, 52]} />
        <Row justifyContent='center'>
          <NextLink path='/'>
            <Button>
              <Text fontSize='semiRegular' lineHeight='small'>
                {messages.goBack[language]}
              </Text>
            </Button>
          </NextLink>
        </Row>
        <Layout flexBasis={[149, 149, 188]} />
      </Column>
      <Layout flexBasis={[20, 20, 0]} flexShrink={0} />
    </Box>
  )
}

export { NotFound }
