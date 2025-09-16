import type { IconType } from "./type"

export const IconArrowRight: React.FC<IconType> = (props) => {
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
        d="M1 13.3232H25"
        stroke="currentColor"
        strokeWidth="1.7648"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.9999 1.32324L24.9999 13.3232L12.9999 25.3232"
        stroke="currentColor"
        strokeWidth="1.7648"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
