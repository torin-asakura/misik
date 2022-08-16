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
        
        .mapboxgl-ctrl-group {
          background: none;        
        }
        
        .mapboxgl-ctrl-group:not(:empty) {
          box-shadow: none;
        }
        
        .mapboxgl-ctrl-group button+button {
          border: none;
          margin-top: 16px;
        }
        
        .mapboxgl-ctrl-group button {
          background-color: #ffffff;
          width: 40px;
          height: 40px;
          border-radius: 100%;
          box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.08), 0px 0px 16px rgba(0, 0, 0, 0.08);
          transition: .3s;
          overflow: hidden;
        }         
        
        .mapboxgl-ctrl-group button:focus:first-child {
          border-radius: 100%;
        }   
        
        .mapboxgl-ctrl-group button:hover {
          transform: scale(1.2);
          background-color: #ffffff;          
        }
        
        .mapboxgl-ctrl-group button span {          
          background-color: #ffffff;                    
        }
        
        .mapboxgl-ctrl-top-right {
          top: 50%;
          transform: translate(0, -50%);
        }
        
        .mapboxgl-ctrl-group button.mapboxgl-ctrl-compass {
          display: none;
        }             

        .default-circle {
          display: flex;
          width: 40px;
          height: 40px;
          border-radius: 100px;
          background-color: white;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        .default-circle::before {
          content: '';
          width: 16px;
          height: 16px;
          background-color: ${theme.colors.text.accent};
          border-radius: 100px;
        }

        .default-circle:hover > span {
          width: min-content;
          opacity: 1;
        }

        .default-circle:hover {
          z-index: 100;
        }

        .default-circle > span {
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
        
        .circle-cluster {
          display: flex;
          width: 70px;
          height: 70px;
          border-radius: 100%;
          background-color: ${theme.colors.text.accent};
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 100;
        }       
        
        .circle-cluster:hover::before {
          background-color: ${theme.colors.text.accent};
        }
        
        .circle-cluster:hover > span {
          color: white;
        }
        
        .circle-cluster::before {
          content: '';
          width: 62px;
          height: 62px;
          background-color: white;
          border-radius: 100%;
          transition: .4s;
        }
        
        .circle-cluster > span {
          position: absolute;
          left: 0;
          top: 0;          
          font-family: ${theme.fonts.primary};
          font-size: ${theme.fontSizes.moderate}px;
          font-weight: ${theme.fontWeights.medium};
          display: flex;
          width: 100%;
          height: 100%; 
          justify-content: center;
          align-items: center;          
          transition: .4s;       
        }       
        
        .circle-hidden {
          display: none;
        }
        
        .swiper-work-directions {
          max-width: 1830px;
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
