import React           from 'react'
import { FC }          from 'react'

import styled          from '@emotion/styled'

import { Text }        from '@ui/text'
import { Box }         from '@ui/layout'
import { Layout }      from '@ui/layout'
import { Column }      from '@ui/layout'
import { useLanguage } from '@globals/language'

const VerticalText: FC = styled(Text)({
  transform: 'rotate(-90deg)',
  whiteSpace: 'nowrap',
})

const TransitionBox = styled(Box)({
  transition: '.2s',
})

const StepDisplay = ({ activeDot, total }) => (
  <Column fill alignItems='center'>
    <VerticalText>
      text
    </VerticalText>
    <Layout flexGrow={1} flexBasis={32} />
    <Box backgroundColor='background.lightGray' width={2} height={240}>
      {[...Array(total)].map((i, idx) => (
        <Box width={activeDot === idx ? 48 : 0}>
          <TransitionBox
            height={activeDot === idx ? 48 : 0}
            backgroundColor='black'
            width='100%'
          />
        </Box>
      ))}
    </Box>
  </Column>
)

export { StepDisplay }
