import styled          from '@emotion/styled'

import React           from 'react'
import { FC }          from 'react'

import { Box }         from '@ui/layout'
import { Layout }      from '@ui/layout'
import { Column }      from '@ui/layout'
import { Text }        from '@ui/text'
import { useLanguage } from '@globals/language'

import { useSteps }    from '../data'

const VerticalText: FC = styled(Text)({
  whiteSpace: 'nowrap',
  backgroundColor: 'white',
  paddingTop: 6,
  paddingBottom: 6,
  paddingLeft: 9,
  paddingRight: 9,
  borderRadius: 24,
})

const Wrapper: FC = styled(Layout)({
  width: '100%',
  verticalAlign: 'text-bottom',
  transform: 'rotate(-90deg)',
})

const TransitionBox = styled(Box)({
  transition: '.2s',
})

const StepDisplay = ({ activeDot }) => {
  const steps = useSteps()
  const [language] = useLanguage()

  return (
    <Column fill alignItems='center'>
      <Wrapper>
        <VerticalText>{steps[language][activeDot]?.title}</VerticalText>
      </Wrapper>
      <Layout flexBasis={32} flexShrink={0} />
      <Box backgroundColor='background.lightGray' width={2} height={240}>
        <TransitionBox
          height={`${((activeDot + 1) / steps[language].length) * 100}%`}
          backgroundColor='black'
          width='100%'
        />
      </Box>
    </Column>
  )
}

export { StepDisplay }
