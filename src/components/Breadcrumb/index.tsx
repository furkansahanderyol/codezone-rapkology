import Link from "next/link"
import styles from "./index.module.scss"
import { IconChevronRight } from "@/assets/IconChevronRight"
import clsx from "clsx"

interface IProps {
  history: { label: string; url: string }[]
  textColor?: string
}

export default function Breadcrumb({ history, textColor }: IProps) {
  return (
    <div className={styles.container}>
      {history.map((link, index) => {
        return index === history.length - 1 ? (
          <div key={index} className={clsx(styles.current, textColor)}>
            {link.label}
          </div>
        ) : (
          <Link
            key={index}
            className={clsx(styles.link, textColor)}
            href={link.url}
          >
            {link.label}
            <IconChevronRight />
          </Link>
        )
      })}
    </div>
  )
}
