import React         from 'react'
import { useEffect } from 'react'
import { Global }    from '@emotion/react'
import { css }       from '@emotion/react'
import { polyfill }  from 'smoothscroll-polyfill'

import * as theme    from './theme'

export const GlobalStyles = () => {
  useEffect(() => {
    polyfill()
  }, [])

  return (
    <Global
      styles={css`
        @import url('https://fonts.googleapis.com/css2?family=Inter');
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond');

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

        .placemark_layout_container {
          position: relative;
        }

        .circle_layout {
          position: absolute;
          left: -20px;
          top: -20px;
          display: flex;
          width: 40px;
          height: 40px;
          border-radius: 100px;
          background-color: white;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        .circle_layout::before {
          content: '';
          width: 16px;
          height: 16px;
          background-color: ${theme.colors.text.accent};
          border-radius: 100px;
        }

        .circle_layout-hover {
          left: 0;
          top: 0;
          content: '';
          position: absolute;
          padding-left: 48px;
          padding-right: 16px;
          height: 40px;
          background-color: white;
          border-radius: 100px;
          width: 100px;
        }
      `}
    />
  )
}
