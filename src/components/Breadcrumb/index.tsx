import Link from "next/link"
import styles from "./index.module.scss"
import { IconChevronRight } from "@/assets/IconChevronRight"

interface IProps {
  history: { label: string; url: string }[]
}

export default function Breadcrumb({ history }: IProps) {
  return (
    <div className={styles.container}>
      {history.map((link, index) => {
        return index === history.length - 1 ? (
          <div key={index} className={styles.current}>
            {link.label}
          </div>
        ) : (
          <Link key={index} className={styles.link} href={link.url}>
            {link.label}
            <IconChevronRight />
          </Link>
        )
      })}
    </div>
  )
}
