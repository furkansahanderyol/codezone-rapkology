import { CSSProperties, MouseEventHandler } from "react"

export type IconType = {
  strokeDashoffset?: undefined | string | number
  strokeWidth?: undefined | string | number
  height?: undefined | string | number
  width?: undefined | string | number
  style?: CSSProperties | undefined
  className?: undefined | string
  color?: undefined | string
  onClick?: MouseEventHandler<SVGSVGElement>
  fill?: undefined | string
}
