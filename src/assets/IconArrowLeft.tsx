import type { IconType } from "./type"

export const IconArrowLeft: React.FC<IconType> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="27"
      viewBox="0 0 26 27"
      fill="none"
      {...props}
    >
      <path
        d="M25 13.3232H1"
        stroke="white"
        strokeWidth="1.7648"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.0001 1.32324L1.00012 13.3232L13.0001 25.3232"
        stroke="white"
        strokeWidth="1.7648"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
