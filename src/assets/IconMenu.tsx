import type { IconType } from "./type"

export const IconMenu: React.FC<IconType> = (props) => {
  return (
    <svg
      width="32"
      height="14"
      viewBox="0 0 32 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M9.43213 2H31.4375" stroke="currentColor" strokeWidth="3" />
      <path d="M0.629883 12L31.4375 12" stroke="currentColor" strokeWidth="3" />
    </svg>
  )
}
