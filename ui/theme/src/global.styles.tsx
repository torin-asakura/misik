import React      from 'react'
import { Global } from '@emotion/react'
import { css }    from '@emotion/react'

export const GlobalStyles = () => (
  <Global
    styles={css`
      html,
      body,
      #__next {
        margin: 0;
        -webkit-font-smoothing: antialiased;
        -webkit-overflow-scrolling: touch;
        height: 100%;
        scroll-behavior: smooth;
      }

      #__next {
        display: flex;
        flex-direction: column;
      }
    `}
  />
)
