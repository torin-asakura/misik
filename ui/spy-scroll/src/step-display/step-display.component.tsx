import React           from 'react'
import { FC }          from 'react'

import styled          from '@emotion/styled'

import { Text }        from '@ui/text'
import { Box }         from '@ui/layout'
import { Layout }      from '@ui/layout'
import { Column }      from '@ui/layout'
import { Condition }   from '@ui/condition'
import { useLanguage } from '@globals/language'

const VerticalText: FC = styled(Text)({
  transform: 'rotate(-90deg)',
  whiteSpace: 'nowrap',
})

const TransitionBox = styled(Box)({
  transition: '.2s',
})

const StepDisplay = ({ activeDot }) => (
  <Column fill alignItems='center'>
    <VerticalText>
      <Condition match={activeDot === 0}>
        MisikLaw
      </Condition>
      <Condition match={activeDot === 1}>
        О нас
      </Condition>
      <Condition match={activeDot === 2}>
        Услуги
      </Condition>
      <Condition match={activeDot === 3}>
        Формат работы
      </Condition>
      <Condition match={activeDot === 4}>
        Обратная связь
      </Condition>
    </VerticalText>
    <Layout flexGrow={1} flexBasis={32} />
    <Box backgroundColor='background.lightGray' width={2} height={240}>
        <Box width={48}>
          <Condition match={activeDot === 0}>
            <TransitionBox height={48} backgroundColor='black' width='100%' />
          </Condition>
          <Condition match={activeDot === 1}>
            <TransitionBox height={96} backgroundColor='black' width='100%' />
          </Condition>
          <Condition match={activeDot === 2}>
            <TransitionBox height={144} backgroundColor='black' width='100%' />
          </Condition>
          <Condition match={activeDot === 3}>
            <TransitionBox height={192} backgroundColor='black' width='100%' />
          </Condition>
          <Condition match={activeDot === 4}>
            <TransitionBox height={240} backgroundColor='black' width='100%' />
          </Condition>
        </Box>
    </Box>
  </Column>
)

export { StepDisplay }
