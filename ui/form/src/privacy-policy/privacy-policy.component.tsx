import React           from 'react'
import { FC }          from 'react'
import { useState }    from 'react'

import { Drawer }      from '@ui/drawer'
import { Layer }       from '@ui/layer'
import { Layout }      from '@ui/layout'
import { NextLink }    from '@ui/link'
import { Space }       from '@ui/text'
import { Text }        from '@ui/text'
import { useLanguage } from '@globals/language'
import { messages }    from '@globals/messages'

const PrivacyPolicy: FC = () => {
  const [isPrivacyPolicyOpen, setIsPrivacyPolicyOpen] = useState(false)

  const [language] = useLanguage()

  const handleClosePrivacyPolicy = () => {
    setIsPrivacyPolicyOpen(false)
  }

  return (
    <>
      <Drawer
        active={isPrivacyPolicyOpen}
        onClose={handleClosePrivacyPolicy}
        display='privacy-policy'
      />
      <Layer
        visible={isPrivacyPolicyOpen}
        onClose={handleClosePrivacyPolicy}
        display='privacy-policy'
      />
      <Layout width={[335, 335, '100%']}>
        <NextLink
          fontSize='atomic'
          textAlign='center'
          width='100%'
          whiteSpace='normal'
          color='text.secondary'
          display='flex'
          onClick={() => setIsPrivacyPolicyOpen(true)}
        >
          <Text color='text.secondary' display='inline' whiteSpace='normal' fontSize='atomic'>
            {messages.byClickingYouConfirm[language]}
            <Space />
            <Text
              style={{ textDecoration: 'underline' }}
              display='inline'
              whiteSpace='normal'
              color='text.secondary'
            >
              {messages.privacyPolicy[language]}
            </Text>
          </Text>
        </NextLink>
      </Layout>
    </>
  )
}

export { PrivacyPolicy }
