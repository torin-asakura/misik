import React                 from 'react'

import { Button }            from '@ui/button'
import { Condition }         from '@ui/condition'
import { Image }             from '@ui/image'
import { Layout }            from '@ui/layout'
import { Link }              from '@ui/link'
import { normalizeString }   from '@globals/data'

import { useSocialNetworks } from './data'

export const Socials = () => {
  const socialNetworks = useSocialNetworks()

  return (
    <>
      {socialNetworks.map(({ content, featuredImage }, index) => (
        <>
          <Condition match={index !== 0}>
            <Layout flexBasis={24} />
          </Condition>
          <Layout>
            <Link href={normalizeString(content)} target='_blank'>
              <Button px={0} width={[40, 40, 48]} height={[40, 40, 48]}>
                <Layout width={21} height={21}>
                  <Image
                    width={21}
                    height={21}
                    src={featuredImage.node.sourceUrl}
                    alt={featuredImage.node.altText}
                    contain
                  />
                </Layout>
              </Button>
            </Link>
          </Layout>
        </>
      ))}
    </>
  )
}
