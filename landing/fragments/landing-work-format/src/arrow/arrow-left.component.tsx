import React             from 'react'
import { FC }            from 'react'

import { useHover }      from '@ui/utils'

import { Container }     from './container'
import { ArrowLeftIcon } from './icons'

const ArrowLeft: FC = (props) => {
  const [hover, hoverProps] = useHover()

  return (
    <Container hover={hover} {...hoverProps} {...props}>
      <ArrowLeftIcon />
    </Container>
  )
}

export { ArrowLeft }
