import clsx from "clsx"
import styles from "./index.module.scss"

interface IProps {
  className?: string
  children: React.ReactNode
  onClick?: () => void
}

export default function SkewedButton({ className, children, onClick }: IProps) {
  return (
    <div className={styles.container}>
      <button onClick={onClick} className={clsx(styles.button, className)}>
        {children}
      </button>
    </div>
  )
}
