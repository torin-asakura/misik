import React                 from 'react'
import { FC }                from 'react'

import { Button }            from '@ui/button'
import { Condition }         from '@ui/condition'
import { Image }             from '@ui/image'
import { Layout }            from '@ui/layout'
import { Link }              from '@ui/link'
import { normalizeString }   from '@globals/data'

import { SocialProps }       from './social.interface'
import { useSocialNetworks } from './data'

export const Socials: FC<SocialProps> = ({ footer = false }) => {
  const socialNetworks = useSocialNetworks()

  return (
    <>
      {socialNetworks.map(({ content, featuredImage }, index) => (
        <>
          <Condition match={index !== 0}>
            <Layout flexBasis={[16, 16, 24]} />
          </Condition>
          <Condition match={!footer}>
            <Layout>
              <Link href={normalizeString(content)} target='_blank'>
                <Button px={0} width={[101, 101, 48]} height={48}>
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
          </Condition>
          <Condition match={footer}>
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
          </Condition>
        </>
      ))}
    </>
  )
}
