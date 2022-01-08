import React           from 'react'
import { FC }          from 'react'
import { useState }    from 'react'
import { useEffect }   from 'react'
import styled          from '@emotion/styled'

import { Text }        from '@ui/text'
import { Box }         from '@ui/layout'
import { Layout }      from '@ui/layout'
import { Column }      from '@ui/layout'
import { useLanguage } from '@globals/language'

import { useStep }     from '../context'
import { useSteps }    from '../data'

const VerticalText: FC = styled(Text)({
  transform: 'rotate(-90deg)',
  whiteSpace: 'nowrap',
})

const TransitionBox = styled(Box)({
  transition: '.2s',
})

const StepDisplay = () => {
  const [step, setStep] = useState<string>('')
  const [traps, setTraps] = useState([])
  const [passedTraps, setPassedTraps] = useState([])
  const store = useStep()
  const steps = useSteps()
  const [language] = useLanguage()

  useEffect(() => {
    store.on('update-step', setStep)
    store.on('register-trap', setTraps)
    store.on('update-passed-traps', setPassedTraps)
  }, [store])

  return (
    <Column fill alignItems='center'>
      <VerticalText>
        {steps[language].find((s) => s.stepAddons.stepid === step)?.title}
      </VerticalText>
      <Layout flexGrow={1} flexBasis={32} />
      <Box backgroundColor='background.lightGray' width={2} height={240}>
        <TransitionBox
          height={`${(passedTraps.length / traps.length) * 100}%`}
          backgroundColor='black'
          width='100%'
        />
      </Box>
    </Column>
  )
}

export { StepDisplay }
