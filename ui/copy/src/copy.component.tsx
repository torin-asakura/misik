import React               from 'react'
import { FC }              from 'react'
import { useState }        from 'react'

import { Condition }       from '@ui/condition'
import { Button }          from '@ui/button'
import { Box }             from '@ui/layout'
import { Layout }          from '@ui/layout'

import { CopyProps }       from './copy.interface'
import { CopyIcon }        from './copy.icon'
import { CopySuccessIcon } from './copy-success.icon'
import { copy }            from './copy.helper'

const Copy: FC<CopyProps> = ({ content }) => {
  const [success, setSuccess] = useState<boolean>(false)

  if (success) setTimeout(() => setSuccess(false), 3000)

  return (
    <Box width={40} height={40}>
      <Button
        width='100%'
        height='100%'
        px={0}
        onClick={() => {
          copy(content)
          setSuccess(true)
        }}
      >
        <Layout>
          <Condition match={!success}>
            <CopyIcon />
          </Condition>
          <Condition match={success}>
            <CopySuccessIcon />
          </Condition>
        </Layout>
      </Button>
    </Box>
  )
}

export { Copy }
