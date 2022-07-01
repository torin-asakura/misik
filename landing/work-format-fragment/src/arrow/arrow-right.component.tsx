import React              from 'react'
import { FC }             from 'react'

import { useHover }       from '@ui/utils'

import { Container }      from './container'
import { ArrowRightIcon } from './icons'

const ArrowRight: FC = (props) => {
  const [hover, hoverProps] = useHover()

  return (
    <Container hover={hover} {...hoverProps} {...props}>
      <ArrowRightIcon />
    </Container>
  )
}

export { ArrowRight }
