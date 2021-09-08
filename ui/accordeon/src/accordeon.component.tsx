import React              from 'react'
import { FC }             from 'react'
import { useState }       from 'react'

import { Condition }      from '@ui/condition'
import { Button }         from '@ui/button'
import { Row }            from '@ui/layout'
import { Column }         from '@ui/layout'
import { Box }            from '@ui/layout'
import { Layout }         from '@ui/layout'
import { Text }           from '@ui/text'

import { Minus }          from './icons'
import { Plus }           from './icons'
import { AccordeonProps } from './accordeon.interface'

// TODO animate

const Accordeon: FC<AccordeonProps> = ({ title, content }) => {
  const [active, setActive] = useState<boolean>(false)

  return (
    <Box width='100%' height='100%'>
      <Column width='100%'>
        <Button colors='transparent' width='100%' height='100%' onClick={() => setActive(!active)}>
          <Row alignItems='center'>
            <Layout>
              <Condition match={active}>
                <Minus />
              </Condition>
              <Condition match={!active}>
                <Plus />
              </Condition>
            </Layout>
            <Layout flexBasis={19} />
            <Layout>
              <Text
                fontFamily='secondary'
                fontSize='large'
                fontWeight='medium'
                color='text.primary'
              >
                {title}
              </Text>
            </Layout>
          </Row>
        </Button>
        <Condition match={active}>
          <Layout flexBasis={16} />
          <Layout>
            <Text fontSize='tiny' color='text.secondary'>
              {content}
            </Text>
          </Layout>
          <Layout flexBasis={64} />
          <Layout>
            <Button colors='secondary' width={111} height='100%'>
              Заказать услугу
            </Button>
          </Layout>
        </Condition>
      </Column>
    </Box>
  )
}

export { Accordeon }
