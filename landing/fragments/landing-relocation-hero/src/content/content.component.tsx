import React            from 'react'
import { FC }           from 'react'

import { Layout }       from '@ui/layout'
import { Column }       from '@ui/layout'
import { Text }         from '@ui/text'
import { Space }        from '@ui/text'

import { ContentProps } from './content.interface'

const Content: FC<ContentProps> = ({ highlightedText, children }) => (
  <Layout width={['100%', '100%', 864]}>
    <Layout>
      <Column>
        <Text
          display='inline'
          fontFamily='secondary'
          fontWeight='thin'
          fontSize={['big', 'big', 'giant']}
          textTransform='uppercase'
          lineHeight='small'
        >
          {children}
          <Space />
          <Text
            fontFamily='secondary'
            color='text.accent'
            fontWeight='thin'
            fontSize={['big', 'big', 'giant']}
            textTransform='uppercase'
            fontStyle='italic'
          >
            {highlightedText}
          </Text>
        </Text>
      </Column>
    </Layout>
  </Layout>
)

export { Content }
