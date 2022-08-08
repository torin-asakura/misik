import React          from 'react'
import { FC }         from 'react'
import { useRouter }  from 'next/router'

import { Layout }     from '@ui/layout'
import { NextLink }   from '@ui/link'
import { Link }       from '@ui/link'

import { IconMobile } from './icon-mobile.component'
import { Icon }       from './icon.component'

const Logo: FC = () => {
  const router = useRouter()

  if (router.route === '/') {
    return (
      // eslint-disable-next-line
      <Link href='#'>
        <Layout display={['none', 'none', 'flex']}>
          <Icon />
        </Layout>
        <Layout display={['flex', 'flex', 'none']}>
          <IconMobile />
        </Layout>
      </Link>
    )
  }

  return (
    <NextLink path='/'>
      <Layout display={['none', 'none', 'flex']}>
        <Icon />
      </Layout>
      <Layout display={['flex', 'flex', 'none']}>
        <IconMobile />
      </Layout>
    </NextLink>
  )
}
export { Logo }
