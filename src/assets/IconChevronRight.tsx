import type { IconType } from "./type"

export const IconChevronRight: React.FC<IconType> = (props) => {
  return (
    <svg
      width="6"
      height="9"
      viewBox="0 0 6 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1.22656 8.1958L5.06836 4.354L1.22656 0.512207"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
