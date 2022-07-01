import React               from 'react'
import { FC }              from 'react'
import { motion }          from 'framer-motion'
import { useAnimation }    from 'framer-motion'
import { useState }        from 'react'
import { useEffect }       from 'react'

import { Button }          from '@ui/button'
import { Box }             from '@ui/layout'
import { Layout }          from '@ui/layout'

import { CopySuccessIcon } from './copy-success.icon'
import { CopyIcon }        from './copy.icon'
import { CopyProps }       from './copy.interface'
import { copy }            from './copy.helper'

const Copy: FC<CopyProps> = ({ content }) => {
  const [success, setSuccess] = useState<boolean>(false)
  const iconControls = useAnimation()
  const successIconControls = useAnimation()

  if (success) setTimeout(() => setSuccess(false), 3000)

  useEffect(() => {
    if (success) {
      iconControls.set({ display: 'none' })
      successIconControls.set({ display: 'flex' })
      successIconControls.start({ opacity: 1 })
    }

    if (!success) {
      successIconControls.start({ opacity: 0 }).then(() => {
        successIconControls.set({ display: 'none' })
        iconControls.set({ display: 'flex' })
      })
    }
  }, [success, successIconControls, iconControls])

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
          <motion.div animate={iconControls}>
            <CopyIcon />
          </motion.div>
          <motion.div
            animate={successIconControls}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <CopySuccessIcon />
          </motion.div>
        </Layout>
      </Button>
    </Box>
  )
}

export { Copy }
