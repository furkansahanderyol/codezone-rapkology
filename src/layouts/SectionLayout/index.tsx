import clsx from "clsx"
import styles from "./index.module.scss"

interface IProps {
  children: React.ReactNode
  className?: string
}

export default function SectionLayout({ children, className }: IProps) {
  return (
    <section className={clsx(styles.container, className)}>{children}</section>
  )
}
