import React  from 'react'
import { FC } from 'react'

interface IconProps {
  width?: number
  height?: number
}

const Icon: FC<IconProps> = ({ width = 190, height = 32 }) => (
  <svg
    width={width}
    height={height}
    viewBox={`0 0 ${width} ${height}`}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M29.232 27.568C29.304 27.568 29.34 27.64 29.34 27.784C29.34 27.928 29.304 28 29.232 28C28.488 28 27.9 27.988 27.468 27.964L24.984 27.928L22.68 27.964C22.296 27.988 21.756 28 21.06 28C21.012 28 20.988 27.928 20.988 27.784C20.988 27.64 21.012 27.568 21.06 27.568C21.876 27.568 22.476 27.508 22.86 27.388C23.268 27.244 23.532 27.004 23.652 26.668C23.796 26.332 23.844 25.804 23.796 25.084L23.148 8.704L14.94 27.748C14.892 27.844 14.796 27.892 14.652 27.892C14.532 27.892 14.424 27.844 14.328 27.748L5.47203 8.92L5.14803 24.076C5.12403 25.348 5.34003 26.248 5.79603 26.776C6.25203 27.304 7.05603 27.568 8.20803 27.568C8.25603 27.568 8.28003 27.64 8.28003 27.784C8.28003 27.928 8.25603 28 8.20803 28C7.53603 28 7.02003 27.988 6.66003 27.964L4.71603 27.928L2.84403 27.964C2.50803 27.988 2.02803 28 1.40403 28C1.35603 28 1.33203 27.928 1.33203 27.784C1.33203 27.64 1.35603 27.568 1.40403 27.568C2.41203 27.568 3.13203 27.304 3.56403 26.776C4.02003 26.224 4.26003 25.324 4.28403 24.076L4.60803 7.372C3.88803 6.412 2.90403 5.932 1.65603 5.932C1.60803 5.932 1.58403 5.86 1.58403 5.716C1.58403 5.57201 1.60803 5.50001 1.65603 5.50001L2.98803 5.536C3.22803 5.56 3.56403 5.572 3.99603 5.572C4.42803 5.572 4.78803 5.56 5.07603 5.536C5.38803 5.51201 5.62803 5.50001 5.79603 5.50001C6.10803 5.50001 6.36003 5.62001 6.55203 5.86C6.76803 6.076 7.06803 6.58 7.45203 7.372L15.48 24.292L23.328 6.4C23.592 5.8 23.952 5.50001 24.408 5.50001C24.528 5.50001 24.696 5.51201 24.912 5.536C25.152 5.56 25.464 5.572 25.848 5.572L27.54 5.536C27.804 5.51201 28.2 5.50001 28.728 5.50001C28.8 5.50001 28.836 5.57201 28.836 5.716C28.836 5.86 28.8 5.932 28.728 5.932C27.528 5.932 26.664 6.112 26.136 6.472C25.632 6.808 25.392 7.456 25.416 8.416L26.136 25.084C26.16 25.828 26.244 26.368 26.388 26.704C26.556 27.04 26.844 27.268 27.252 27.388C27.66 27.508 28.32 27.568 29.232 27.568Z'
      fill='#121213'
    />
    <path
      d='M40.8578 25.084C40.8578 25.804 40.9298 26.344 41.0738 26.704C41.2178 27.04 41.4938 27.268 41.9018 27.388C42.3338 27.508 43.0058 27.568 43.9178 27.568C43.9898 27.568 44.0258 27.64 44.0258 27.784C44.0258 27.928 43.9898 28 43.9178 28C43.1978 28 42.6218 27.988 42.1898 27.964L39.6338 27.928L37.1498 27.964C36.7178 27.988 36.1298 28 35.3858 28C35.3138 28 35.2778 27.928 35.2778 27.784C35.2778 27.64 35.3138 27.568 35.3858 27.568C36.2978 27.568 36.9578 27.508 37.3658 27.388C37.7978 27.268 38.0858 27.04 38.2298 26.704C38.3978 26.344 38.4818 25.804 38.4818 25.084V8.416C38.4818 7.696 38.3978 7.168 38.2298 6.83201C38.0858 6.496 37.7978 6.268 37.3658 6.148C36.9578 6.004 36.2978 5.932 35.3858 5.932C35.3138 5.932 35.2778 5.86 35.2778 5.716C35.2778 5.57201 35.3138 5.50001 35.3858 5.50001L37.1498 5.536C38.1578 5.584 38.9858 5.608 39.6338 5.608C40.3538 5.608 41.2178 5.584 42.2258 5.536L43.9178 5.50001C43.9898 5.50001 44.0258 5.57201 44.0258 5.716C44.0258 5.86 43.9898 5.932 43.9178 5.932C43.0298 5.932 42.3698 6.004 41.9378 6.148C41.5298 6.292 41.2418 6.544 41.0738 6.904C40.9298 7.24 40.8578 7.768 40.8578 8.488V25.084Z'
      fill='#121213'
    />
    <path
      d='M54.4669 9.712C54.4669 10.648 54.6949 11.464 55.1509 12.16C55.6069 12.856 56.1589 13.444 56.8069 13.924C57.4549 14.38 58.3669 14.968 59.5429 15.688C60.7909 16.432 61.7629 17.056 62.4589 17.56C63.1549 18.064 63.7429 18.712 64.2229 19.504C64.7269 20.272 64.9789 21.196 64.9789 22.276C64.9789 23.428 64.6909 24.472 64.1149 25.408C63.5389 26.344 62.6869 27.088 61.5589 27.64C60.4549 28.168 59.1229 28.432 57.5629 28.432C55.7149 28.432 54.0229 28.012 52.4869 27.172C52.3669 27.1 52.2829 27.016 52.2349 26.92C52.2109 26.824 52.1869 26.68 52.1629 26.488L51.6949 21.592C51.6709 21.496 51.7189 21.436 51.8389 21.412C51.9829 21.388 52.0669 21.424 52.0909 21.52C52.4749 23.248 53.1829 24.736 54.2149 25.984C55.2709 27.232 56.6629 27.856 58.3909 27.856C59.5909 27.856 60.5989 27.532 61.4149 26.884C62.2549 26.212 62.6749 25.156 62.6749 23.716C62.6749 22.636 62.4349 21.7 61.9549 20.908C61.4749 20.116 60.8869 19.468 60.1909 18.964C59.5189 18.436 58.5949 17.824 57.4189 17.128C56.2669 16.432 55.3549 15.832 54.6829 15.328C54.0349 14.824 53.4829 14.188 53.0269 13.42C52.5709 12.652 52.3429 11.752 52.3429 10.72C52.3429 9.52 52.6549 8.5 53.2789 7.66001C53.9269 6.796 54.7549 6.16 55.7629 5.752C56.7949 5.32 57.8869 5.104 59.0389 5.104C60.4549 5.104 61.8589 5.392 63.2509 5.968C63.6109 6.088 63.7909 6.292 63.7909 6.58L64.0429 10.72C64.0429 10.816 63.9829 10.864 63.8629 10.864C63.7429 10.864 63.6709 10.816 63.6469 10.72C63.4549 9.472 62.9389 8.32 62.0989 7.264C61.2589 6.184 60.0469 5.644 58.4629 5.644C57.1189 5.644 56.1109 6.04 55.4389 6.83201C54.7909 7.6 54.4669 8.56 54.4669 9.712Z'
      fill='#121213'
    />
    <path
      d='M77.6945 25.084C77.6945 25.804 77.7665 26.344 77.9105 26.704C78.0545 27.04 78.3305 27.268 78.7385 27.388C79.1705 27.508 79.8425 27.568 80.7545 27.568C80.8265 27.568 80.8625 27.64 80.8625 27.784C80.8625 27.928 80.8265 28 80.7545 28C80.0345 28 79.4585 27.988 79.0265 27.964L76.4705 27.928L73.9865 27.964C73.5545 27.988 72.9665 28 72.2225 28C72.1505 28 72.1145 27.928 72.1145 27.784C72.1145 27.64 72.1505 27.568 72.2225 27.568C73.1345 27.568 73.7945 27.508 74.2025 27.388C74.6345 27.268 74.9225 27.04 75.0665 26.704C75.2345 26.344 75.3185 25.804 75.3185 25.084V8.416C75.3185 7.696 75.2345 7.168 75.0665 6.83201C74.9225 6.496 74.6345 6.268 74.2025 6.148C73.7945 6.004 73.1345 5.932 72.2225 5.932C72.1505 5.932 72.1145 5.86 72.1145 5.716C72.1145 5.57201 72.1505 5.50001 72.2225 5.50001L73.9865 5.536C74.9945 5.584 75.8225 5.608 76.4705 5.608C77.1905 5.608 78.0545 5.584 79.0625 5.536L80.7545 5.50001C80.8265 5.50001 80.8625 5.57201 80.8625 5.716C80.8625 5.86 80.8265 5.932 80.7545 5.932C79.8665 5.932 79.2065 6.004 78.7745 6.148C78.3665 6.292 78.0785 6.544 77.9105 6.904C77.7665 7.24 77.6945 7.768 77.6945 8.488V25.084Z'
      fill='#121213'
    />
    <path
      d='M109.16 27.568C109.232 27.568 109.268 27.64 109.268 27.784C109.268 27.928 109.232 28 109.16 28H105.128C104.936 28 104.588 28 104.084 28C103.604 28.024 102.92 27.424 102.032 26.2C101.144 24.952 100.292 23.812 99.4756 22.78L93.9676 15.832L92.7796 16.984V25.084C92.7796 25.804 92.8516 26.344 92.9956 26.704C93.1396 27.04 93.4156 27.268 93.8236 27.388C94.2556 27.508 94.9276 27.568 95.8396 27.568C95.9116 27.568 95.9476 27.64 95.9476 27.784C95.9476 27.928 95.9116 28 95.8396 28C95.1196 28 94.5436 27.988 94.1116 27.964L91.5916 27.928L89.1436 27.964C88.7116 27.988 88.1116 28 87.3436 28C87.2956 28 87.2716 27.928 87.2716 27.784C87.2716 27.64 87.2956 27.568 87.3436 27.568C88.2556 27.568 88.9156 27.508 89.3236 27.388C89.7556 27.268 90.0436 27.04 90.1876 26.704C90.3556 26.344 90.4396 25.804 90.4396 25.084V8.416C90.4396 7.696 90.3676 7.168 90.2236 6.83201C90.0796 6.496 89.7916 6.268 89.3596 6.148C88.9516 6.004 88.2916 5.932 87.3796 5.932C87.3316 5.932 87.3076 5.86 87.3076 5.716C87.3076 5.57201 87.3316 5.50001 87.3796 5.50001L89.1796 5.536C90.1876 5.584 90.9916 5.608 91.5916 5.608C92.2876 5.608 93.1396 5.584 94.1476 5.536L95.8396 5.50001C95.9116 5.50001 95.9476 5.57201 95.9476 5.716C95.9476 5.86 95.9116 5.932 95.8396 5.932C94.9516 5.932 94.2916 6.004 93.8596 6.148C93.4516 6.292 93.1636 6.544 92.9956 6.904C92.8516 7.24 92.7796 7.768 92.7796 8.488V16.084L100.484 8.416C101.276 7.624 101.672 7.036 101.672 6.652C101.672 6.172 100.964 5.932 99.5476 5.932C99.4996 5.932 99.4756 5.86 99.4756 5.716C99.4756 5.57201 99.4996 5.50001 99.5476 5.50001L101.096 5.536C102.056 5.584 102.932 5.608 103.724 5.608C104.516 5.608 105.344 5.584 106.208 5.536L107.54 5.50001C107.612 5.50001 107.648 5.57201 107.648 5.716C107.648 5.86 107.612 5.932 107.54 5.932C106.556 5.932 105.512 6.148 104.408 6.58C103.304 7.012 102.272 7.696 101.312 8.632L95.6236 14.212L100.808 20.836C102.56 23.116 103.892 24.724 104.804 25.66C105.74 26.596 106.46 27.148 106.964 27.316C107.468 27.484 108.2 27.568 109.16 27.568Z'
      fill='#121213'
    />
    <path
      d='M113.53 28C113.482 28 113.458 27.928 113.458 27.784C113.458 27.64 113.482 27.568 113.53 27.568C114.298 27.568 114.874 27.508 115.258 27.388C115.642 27.268 115.93 27.04 116.122 26.704C116.314 26.344 116.47 25.804 116.59 25.084L119.542 8.41598C119.614 7.93598 119.65 7.56398 119.65 7.29998C119.65 6.74798 119.482 6.38798 119.146 6.21998C118.834 6.02798 118.234 5.93198 117.346 5.93198C117.298 5.93198 117.274 5.85998 117.274 5.71598C117.274 5.57198 117.298 5.49998 117.346 5.49998L118.858 5.53598C119.722 5.58398 120.418 5.60798 120.946 5.60798C121.522 5.60798 122.266 5.58398 123.178 5.53598L124.654 5.49998C124.702 5.49998 124.726 5.57198 124.726 5.71598C124.726 5.85998 124.702 5.93198 124.654 5.93198C123.886 5.93198 123.31 6.00398 122.926 6.14798C122.566 6.26798 122.29 6.50798 122.098 6.86798C121.906 7.20398 121.738 7.73198 121.594 8.45198L118.678 24.94C118.606 25.372 118.57 25.732 118.57 26.02C118.57 26.524 118.726 26.872 119.038 27.064C119.35 27.232 119.914 27.316 120.73 27.316H124.366C125.686 27.316 126.778 26.908 127.642 26.092C128.53 25.276 129.262 24.088 129.838 22.528C129.838 22.48 129.886 22.456 129.982 22.456C130.054 22.456 130.126 22.48 130.198 22.528C130.27 22.552 130.294 22.576 130.27 22.6C129.742 24.352 129.358 25.972 129.118 27.46C129.07 27.652 128.998 27.796 128.902 27.892C128.83 27.964 128.71 28 128.542 28H113.53Z'
      fill='#EA861B'
    />
    <path
      d='M154.825 27.568C154.921 27.568 154.969 27.64 154.969 27.784C154.969 27.928 154.921 28 154.825 28C154.465 28 153.925 27.976 153.205 27.928C152.341 27.88 151.669 27.856 151.189 27.856C150.685 27.856 150.049 27.88 149.281 27.928C148.561 27.976 148.033 28 147.697 28C147.625 28 147.589 27.928 147.589 27.784C147.589 27.64 147.625 27.568 147.697 27.568C148.585 27.568 149.197 27.46 149.533 27.244C149.893 27.004 150.073 26.584 150.073 25.984C150.073 25.576 150.049 25.24 150.001 24.976L148.561 16.12H143.125L139.201 23.248C138.457 24.64 138.085 25.648 138.085 26.272C138.085 26.776 138.277 27.124 138.661 27.316C139.045 27.484 139.633 27.568 140.425 27.568C140.521 27.568 140.557 27.64 140.533 27.784C140.533 27.928 140.485 28 140.389 28C140.125 28 139.585 27.976 138.769 27.928C137.857 27.88 137.149 27.856 136.645 27.856C136.141 27.856 135.553 27.88 134.881 27.928C134.209 27.976 133.693 28 133.333 28C133.237 28 133.189 27.928 133.189 27.784C133.189 27.64 133.237 27.568 133.333 27.568C134.029 27.568 134.773 27.268 135.565 26.668C136.357 26.044 137.173 25.012 138.013 23.572L148.309 5.13998C148.357 5.06798 148.441 5.03198 148.561 5.03198C148.777 5.03198 148.909 5.09198 148.957 5.21198L152.125 24.976C152.245 25.72 152.377 26.26 152.521 26.596C152.665 26.932 152.905 27.184 153.241 27.352C153.601 27.496 154.129 27.568 154.825 27.568ZM143.521 15.364H148.453L147.337 8.41598L143.521 15.364Z'
      fill='#EA861B'
    />
    <path
      d='M188.399 5.49998C188.447 5.49998 188.471 5.57198 188.471 5.71598C188.471 5.85998 188.447 5.93198 188.399 5.93198C187.631 5.93198 186.911 6.15998 186.239 6.61598C185.567 7.07198 185.003 7.80398 184.547 8.81198L176.123 28C176.099 28.096 175.979 28.144 175.763 28.144C175.571 28.144 175.463 28.096 175.439 28L172.559 9.24398L164.171 28C164.171 28.096 164.063 28.144 163.847 28.144C163.631 28.144 163.511 28.096 163.487 28L160.751 8.45198C160.607 7.49198 160.355 6.83198 159.995 6.47198C159.635 6.11198 159.107 5.93198 158.411 5.93198C158.363 5.93198 158.339 5.85998 158.339 5.71598C158.339 5.57198 158.363 5.49998 158.411 5.49998L159.671 5.53598C160.247 5.58398 160.727 5.60798 161.111 5.60798C161.903 5.60798 162.755 5.58398 163.667 5.53598L164.927 5.49998C164.999 5.49998 165.035 5.57198 165.035 5.71598C165.035 5.85998 164.999 5.93198 164.927 5.93198C164.183 5.93198 163.643 6.05198 163.307 6.29198C162.995 6.53198 162.839 6.97598 162.839 7.62398C162.839 7.74398 162.863 7.99598 162.911 8.37998L165.143 24.04L173.423 5.49998C173.471 5.42798 173.591 5.39198 173.783 5.39198C174.023 5.39198 174.143 5.42798 174.143 5.49998L177.059 24.076L183.863 8.63198C184.151 7.88798 184.295 7.37198 184.295 7.08398C184.295 6.67598 184.127 6.38798 183.791 6.21998C183.455 6.02798 182.915 5.93198 182.171 5.93198C182.099 5.93198 182.063 5.85998 182.063 5.71598C182.063 5.57198 182.099 5.49998 182.171 5.49998L183.575 5.53598C184.295 5.58398 184.931 5.60798 185.483 5.60798C185.915 5.60798 186.419 5.58398 186.995 5.53598L188.399 5.49998Z'
      fill='#EA861B'
    />
  </svg>
)

export { Icon }