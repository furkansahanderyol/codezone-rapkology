import clsx from "clsx"
import styles from "./index.module.scss"

interface IProps {
  header: string
  suffix?: React.ReactNode
  className?: string
}

export default function SectionHeader({ header, suffix, className }: IProps) {
  return (
    <div className={clsx(styles.container, className)}>
      {header}
      {suffix}
    </div>
  )
}
