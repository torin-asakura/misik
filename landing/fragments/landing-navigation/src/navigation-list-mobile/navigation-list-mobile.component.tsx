import React             from 'react'
import { FC }            from 'react'
import { useState }      from 'react'

import { Button }        from '@ui/button'
import { Condition }     from '@ui/condition'
import { Divider }       from '@ui/divider'
import { Layer }         from '@ui/layer'
import { Box }           from '@ui/layout'
import { Layout }        from '@ui/layout'
import { Column }        from '@ui/layout'
import { NextLink }      from '@ui/link'
import { Text }          from '@ui/text'
import { useLanguage }   from '@globals/language'
import { messages }      from '@globals/messages'

import { useNavigation } from '../data'

const NavigationListMobile: FC = () => {
  const [language] = useLanguage()
  const navigation = useNavigation()
  const [visible, setVisible] = useState<boolean>(false)

  return (
    <>
      <Layer visible={visible} onClose={() => setVisible(false)} />
      <Box backgroundColor='white' borderRadius='bottomSmall'>
        <Layout flexBasis={24} flexShrink={0} />
        <Column fill>
          <Layout flexShrink={0} flexBasis={4} />
          {navigation[language]?.reverse().map(({ title, content }, index) => (
            <>
              <Layout flexBasis={16} />
              <Layout>
                <NextLink path={content} fontSize='semiRegular'>
                  <Text
                    fontSize='large'
                    textTransform='uppercase'
                    lineHeight='small'
                    fontFamily='secondary'
                  >
                    {title}
                  </Text>
                </NextLink>
              </Layout>
              <Layout flexBasis={16} />
              <Condition match={index !== navigation[language].length - 1}>
                <Divider />
              </Condition>
            </>
          ))}
          <Layout flexBasis={90} />
          <Layout>
            <Button
              colors='secondary'
              size='medium'
              height={34}
              onClick={() => {
                setVisible(true)
              }}
            >
              {messages.getConsult[language]}
            </Button>
          </Layout>
          <Layout flexShrink={0} flexBasis={40} />
        </Column>
        <Layout flexBasis={24} flexShrink={0} />
      </Box>
    </>
  )
}

export { NavigationListMobile }
