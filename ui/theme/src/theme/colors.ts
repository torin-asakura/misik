const colors = {
  button: {
    primary: {
      default: 'rgba(18, 18, 19, 0.1)',
      hover: 'rgba(18, 18, 19, 1)',
      active: 'rgba(18, 18, 19, 1)',
      disabled: 'rgba(182,185,201,0.25)',
      fontColor: 'rgba(18, 18, 19, 1)',
      successText: 'rgba(255, 255, 255, 1)',
      error: 'rgba(226,29,29,1)',
    },
    secondary: {
      default: 'rgba(18, 18, 19, 1)',
      hover: 'rgba(234, 134, 27, 1)',
      active: 'rgba(206, 116, 19, 1)',
      disabled: 'rgba(182,185,201,0.25)',
    },
    ternary: {
      default: 'rgba(234, 134, 27, 1)',
      hover: 'rgba(234, 134, 27, 1)',
      active: 'rgba(206, 116, 19, 1)',
      disabled: 'rgba(182,185,201,0.25)',
    },
  },
  text: {
    primary: 'rgba(18, 18, 19, 1)',
    secondary: 'rgb(105,103,102)',
    accent: 'rgba(234,134,27, 1)',
    press: 'rgba(206, 116, 19, 1)',
    disabled: 'rgba(18, 18, 19, 0.3)',
  },
  background: {
    transparentWhite: 'rgba(255, 255, 255, 0.8)',
    transparentBlack: 'rgba(105, 103, 102, 0.5)',
    lightBeige: 'rgba(246,242,237,1)',
    beige: 'rgb(241,234,226)',
    lightGray: 'rgba(18, 18, 19, 0.1)',
    white: 'rgb(255, 255, 255)',
    black: 'rgb(0, 0, 0)',
    accentBlack: 'rgb(18,18,19)',
    radialGradientBlack:
      'radial-gradient(246.26% 141.42% at 0% 0%, rgb(83, 83, 90) 0%, rgb(28, 28, 32) 59.72%)',
  },
  input: {
    background: 'transparent',
    font: 'rgba(18, 18, 19, 1)',
    border: 'rgba(18, 18, 19, 0.1)',
    hover: 'rgba(18, 18, 19, 1)',
    focus: 'rgba(18, 18, 19, 1)',
    press: 'rgba(18, 18, 19, 1)',
    error: 'rgba(226, 29, 29, 1)',
  },
  drawer: {
    backdrop: 'rgba(105,103,102, 0.5)',
  },
  plast: {
    backdrop: 'rgba(105, 103, 102, 0.5)',
  },
  light: {
    white: 'rgb(255, 255, 255)',
    orange: 'rgb(255, 198, 100)',
  },
}

export { colors }
