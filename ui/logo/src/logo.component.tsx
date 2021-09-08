import React        from 'react'
import { FC }       from 'react'

import { NextLink } from '@ui/link'

import { Icon }     from './icon.component'

const Logo: FC = () => (
  <NextLink href='/'>
    <Icon />
  </NextLink>
)

export { Logo }
