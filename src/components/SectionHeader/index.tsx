import clsx from "clsx"
import styles from "./index.module.scss"

interface IProps {
  header: string
  suffix?: React.ReactNode
  className?: string
  options?: React.ReactNode
}

export default function SectionHeader({
  header,
  suffix,
  className,
  options,
}: IProps) {
  return (
    <div className={clsx(styles.container, className)}>
      <div className={styles.header}>
        {header}
        {suffix}
      </div>
      <div className={styles.options}>{options}</div>
    </div>
  )
}
