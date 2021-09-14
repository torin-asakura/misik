import React                 from 'react'
import { FC }                from 'react'
import { Fragment }          from 'react'
import { useRef }            from 'react'
import styled                from '@emotion/styled'

import { Column }            from '@ui/layout'
import { Box }               from '@ui/layout'
import { Layout }            from '@ui/layout'
import { Text }              from '@ui/text'
import { useLanguage }       from '@globals/language'

import { useScrollPosition } from './hooks'
import { useChildrenRefs }   from './hooks'
import { useSteps }          from './data'
import { Provider }          from './context'

// TODO separate components

const VerticalText = styled(Text)({
  transform: 'rotate(-90deg)',
  whiteSpace: 'nowrap',
})

const TransitionBox = styled(Box)({
  transition: '.1s',
})

const SpyScroll: FC = ({ children }) => {
  const childrenWithRefs = useChildrenRefs(children)
  const steps = useSteps()
  const [language] = useLanguage()
  const step = useScrollPosition(childrenWithRefs)

  return (
    <Provider value={step}>
      <Box
        height={333}
        width={18}
        position='fixed'
        bottom={64}
        left={32}
        zIndex={10}
        display={['none', 'none', 'flex']}
      >
        <Column width='100%' alignItems='center'>
          <VerticalText>{steps[language][step]?.title}</VerticalText>
          <Layout flexGrow={1} flexBasis={32} />
          <Box backgroundColor='background.lightGray' width={2} height={240}>
            <TransitionBox
              height={`${((step + 1) / 6) * 100}%`}
              backgroundColor='black'
              width='100%'
            />
          </Box>
        </Column>
      </Box>
      {childrenWithRefs}
    </Provider>
  )
}

export { SpyScroll }
