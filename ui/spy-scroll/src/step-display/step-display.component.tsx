import React           from 'react'
import { FC }          from 'react'

import styled          from '@emotion/styled'

import { Text }        from '@ui/text'
import { Box }         from '@ui/layout'
import { Layout }      from '@ui/layout'
import { Column }      from '@ui/layout'
import { Condition }   from '@ui/condition'
import { useLanguage } from '@globals/language'

import { useSteps }    from '../data'

const VerticalText: FC = styled(Text)({
  transform: 'rotate(-90deg)',
  whiteSpace: 'nowrap',
})

const TransitionBox = styled(Box)({
  transition: '.2s',
})

const StepDisplay = ({ activeDot }) => {
  const steps = useSteps()
  const [language] = useLanguage()

  return (
    <Column fill alignItems='center'>
      <VerticalText>
        <Condition match={activeDot === 0}>
          {steps[language][activeDot]?.title}
        </Condition>
        <Condition match={activeDot === 1}>
          {steps[language][activeDot]?.title}
        </Condition>
        <Condition match={activeDot === 2}>
          {steps[language][activeDot]?.title}
        </Condition>
        <Condition match={activeDot === 3}>
          {steps[language][activeDot]?.title}
        </Condition>
        <Condition match={activeDot === 4}>
          {steps[language][activeDot]?.title}
        </Condition>
      </VerticalText>
      <Layout flexGrow={1} flexBasis={32} />
      <Box backgroundColor='background.lightGray' width={2} height={240}>
        <TransitionBox height={`${(activeDot + 1) / (steps[language].length) * 120}%`} backgroundColor='black' width='100%' />
      </Box>
    </Column>
  )
}

export { StepDisplay }
