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

const StepDisplay = () => {

  return (
    <Column fill alignItems='center'>
      <VerticalText>
        text
      </VerticalText>
      <Layout flexGrow={1} flexBasis={32} />
      <Box backgroundColor='background.lightGray' width={2} height={240}>
        <TransitionBox
          height={`100%`}
          backgroundColor='black'
          width='100%'
        />
      </Box>
    </Column>
  )
}

export { StepDisplay }
