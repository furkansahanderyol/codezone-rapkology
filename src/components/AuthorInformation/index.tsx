import Image from "next/image"
import styles from "./index.module.scss"
import clsx from "clsx"
import SkeletonImage from "../-Skeleton/SkeletonImage"
import SkeletonLine from "../-Skeleton/SkeletonLine"

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
      <SkeletonImage width={32} height={32} radius={10}>
        <div className={styles.authorImage}>
          <Image src={url} alt={alt} fill objectFit={objectFit} />
        </div>
      </SkeletonImage>

      <SkeletonLine width={120} height={16} count={1}>
        <div className={styles.authorName}>{name}</div>
      </SkeletonLine>
    </div>
  )
}
