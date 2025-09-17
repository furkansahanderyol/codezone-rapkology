import Image from "next/image"
import styles from "./index.module.scss"
import clsx from "clsx"

interface IProps {
  url: string
  alt: string
  className?: string
  objectFit: "cover" | "contain"
  name: string
}

export default function AuthorInformation({
  url,
  alt,
  className,
  objectFit,
  name,
}: IProps) {
  return (
    <div className={clsx(styles.container, className)}>
      <div className={styles.authorImage}>
        <Image src={url} alt={alt} fill objectFit={objectFit} />
      </div>
      <div className={styles.authorName}>{name}</div>
    </div>
  )
}
