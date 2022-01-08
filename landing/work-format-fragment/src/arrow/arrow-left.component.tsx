import React             from 'react'
import { FC }            from 'react'

import { useHover }      from '@ui/utils'

import { ArrowLeftIcon } from './icons'
import { Container }     from './container'

const ArrowLeft: FC = (props) => {
  const [hover, hoverProps] = useHover()

  return (
    <Container hover={hover} {...hoverProps} {...props}>
      <ArrowLeftIcon />
    </Container>
  )
}

export { ArrowLeft }
