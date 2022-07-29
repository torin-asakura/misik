import React             from 'react'
import { FC }            from 'react'
import { useMemo }       from 'react'

import { Condition }     from '@ui/condition'
import { Box }           from '@ui/layout'
import { Layout }        from '@ui/layout'
import { Column }        from '@ui/layout'
import { Row }           from '@ui/layout'
import { AnimateOnLoad } from '@ui/preloader'
import { Text }          from '@ui/text'
import { useData }       from '@globals/data'
import { extractObject } from '@globals/data'
import { useLanguage }   from '@globals/language'

import { Branch }        from './branch'
import { BranchesProps } from './branches.interface'
import { useContacts }   from './data'
import { extractType }   from './helpers'

const Branches: FC<BranchesProps> = ({ contacts }) => {
  const { fragments } = useData()
  const [language] = useLanguage()
  const contactsData = useContacts()

  let { title, branches, workingHours, workingHoursHighlighted } = useMemo(() => {
    if (!fragments) {
      return { title: '', branches: [], workingHours: '', workingHoursHighlighted: '' }
    }

    const titleFragment = extractObject('title', fragments.contacts[language])
    const branchesFragment = extractType('phone', contactsData[language])
    const workingHoursFragment = extractObject('workingHours', fragments.feedback[language])
    const workingHoursHighlightedFragment = extractObject(
      'workingHours',
      fragments.feedback[language]
    )
    title = titleFragment?.title
    branches = branchesFragment
    workingHours = workingHoursFragment?.content
    workingHoursHighlighted = workingHoursHighlightedFragment?.fragmentParams?.highlightedText

    return {
      title,
      branches,
      workingHours,
      workingHoursHighlighted,
    }
  }, [fragments, language, contactsData])

  return (
    <Box
      width='100%'
      height={['auto', 'auto', '100%']}
      itemScope
      itemType='http://schema.org/Organization'
    >
      <Box
        width='100%'
        height='100%'
        backgroundColor={contacts ? 'background.lightBeige' : 'background.beige'}
        justifyContent='center'
      >
        <Condition match={contacts}>
          <Layout
            flexBasis={[20, 20, 616]}
            flexShrink={[0, 0, 1]}
            maxWidth={['auto', 'auto', 430]}
          />
          <Layout width='100%' height='100%' maxWidth={1243}>
            <Column width='100%'>
              <Layout flexBasis={[108, 108, 160]} />
              <AnimateOnLoad
                initial={{ opacity: 0, y: '100%' }}
                transition={{ duration: 1 }}
                animation={{ y: 0, opacity: 1 }}
              >
                <Row>
                  <Text
                    fontSize={['big', 'big', 'giant']}
                    textTransform='uppercase'
                    fontWeight='thin'
                    lineHeight='small'
                    fontFamily='secondary'
                  >
                    {title}
                  </Text>
                </Row>
              </AnimateOnLoad>
              <Layout flexBasis={[60, 60, 80]} />
              <AnimateOnLoad
                initial={{ opacity: 0, y: '100%' }}
                transition={{ duration: 1 }}
                animation={{ y: 0, opacity: 1 }}
              >
                <Layout flexDirection={['column', 'column', 'row']} width='100%'>
                  {branches.reverse().map((
                    { title: branchTitle, content: branchContent, contactAddons, fragmentParams },
                    index
                  ) => (
                    <>
                      <Condition match={index !== 0}>
                        <Layout flexBasis={40} flexShrink={0} />
                      </Condition>
                      <Branch
                        title={branchTitle}
                        highlighted={fragmentParams?.highlightedText}
                        address={contactAddons?.address}
                        messengers={contactAddons?.messengers}
                        viber={contactAddons?.viberLink}
                        whatsapp={contactAddons?.whatsappLink}
                        phone={branchContent}
                        workingHours={workingHours}
                        workingHoursHighlighted={workingHoursHighlighted}
                        index={index}
                      />
                    </>
                  ))}
                </Layout>
              </AnimateOnLoad>
              <Layout flexBasis={[48, 48, 160]} />
            </Column>
          </Layout>
          <Layout flexBasis={[20, 20, 280]} flexShrink={[0, 0, 1]} />
        </Condition>
        <Condition match={!contacts}>
          <Layout flexDirection={['column', 'column', 'row']} width='100%'>
            {branches.map((
              { title: branchTitle, content: branchContent, contactAddons, fragmentParams },
              index
            ) => (
              <>
                <Condition match={index !== 0}>
                  <Layout flexBasis={40} flexShrink={0} />
                </Condition>
                <Branch
                  title={branchTitle}
                  highlighted={fragmentParams?.highlightedText}
                  address={contactAddons?.address}
                  messengers={contactAddons?.messengers}
                  viber={contactAddons?.viberLink}
                  whatsapp={contactAddons?.whatsappLink}
                  phone={branchContent}
                  workingHours={workingHours}
                  workingHoursHighlighted={workingHoursHighlighted}
                  index={index}
                />
              </>
            ))}
          </Layout>
        </Condition>
      </Box>
    </Box>
  )
}

export { Branches }
