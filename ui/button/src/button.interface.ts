import { ButtonProps as BaseButtonProps } from '@atls-ui-parts/button'

import { LayoutProps }                    from 'styled-system'
import { SpaceProps }                     from 'styled-system'

type ButtonColors = 'primary' | 'secondary' | 'ternary' | 'transparent'

export interface ButtonProps extends BaseButtonProps, LayoutProps, SpaceProps {
  success?: boolean | null
  failure?: boolean | null
  divider?: number
  width?: number | string | number[] | string[]
  height?: number | string | number[] | string[]
  colors?: ButtonColors
}
