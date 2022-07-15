import * as theme    from './theme'

import { Global }    from '@emotion/react'
import { css }       from '@emotion/react'

import React         from 'react'
import { useEffect } from 'react'
import { polyfill }  from 'seamless-scroll-polyfill'

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
        }

        #__next {
          display: flex;
          flex-direction: column;
        }

        .circle_layout {
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

        .circle_layout:hover > span {
          width: min-content;
          opacity: 1;
        }

        .circle_layout:hover {
          z-index: 100;
        }

        .circle_layout > span {
          display: flex;
          align-items: center;
          z-index: -1;
          position: absolute;
          width: 0px;
          height: 40px;
          background-color: white;
          border-radius: 100px;
          font-family: ${theme.fonts.secondary};
          font-size: ${theme.fontSizes.semiLarge}px;
          font-weight: ${theme.fontWeights.medium};
          left: 0px;
          padding-left: 48px;
          padding-right: 16px;
          opacity: 0;
          white-space: nowrap;
          transition: 0.2s;
          text-transform: uppercase;
          box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.08), 0px 0px 16px rgba(0, 0, 0, 0.08);
          pointer-events: none;
        }
        
        @keyframes draw {
          from {
            stroke-dashoffset: 1;
          }
          to {
            stroke-dashoffset: 0;
          }
        }
      `}
    />
  )
}
