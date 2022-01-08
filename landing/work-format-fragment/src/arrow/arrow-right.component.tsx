import React              from 'react'
import { FC }             from 'react'

import { useHover }       from '@ui/utils'

import { ArrowRightIcon } from './icons'
import { Container }      from './container'

const ArrowRight: FC = (props) => {
  const [hover, hoverProps] = useHover()

  return (
    <Container hover={hover} {...hoverProps} {...props}>
      <ArrowRightIcon />
    </Container>
  )
}

export { ArrowRight }
