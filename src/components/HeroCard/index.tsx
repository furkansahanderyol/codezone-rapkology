import clsx from "clsx"
import styles from "./index.module.scss"
import Link from "next/link"
import Image from "next/image"
import SkeletonLine from "../-Skeleton/SkeletonLine"

interface IProps {
  id: number
  title: string
  description: string
  image: string
  dark: boolean
  slug: string
}

export default function HeroCard({
  id,
  title,
  description,
  image,
  dark,
  slug,
}: IProps) {
  return (
    <div className={clsx(styles.container, dark && styles.dark)}>
      {id === 0 && (
        <Image
          className={styles.shape}
          fill
          src={"/blog-hero-background.webp"}
          alt=""
          priority
        />
      )}
      <Image
        src={image}
        fill
        priority
        className={clsx(styles.backgroundImage, id === 0 && styles.firstImage)}
        alt=""
      />
      <div className={styles.content}>
        <SkeletonLine width={700} height={60} count={3}>
          <h1 className={styles.title}>{title}</h1>
        </SkeletonLine>
        <SkeletonLine count={4} width={600} height={16}>
          <div className={styles.description}>{description}</div>
        </SkeletonLine>

        <div className={styles.readMoreWrapper}>
          <Link className={styles.readMore} href={`/blog/${slug}`}>
            Devamını Oku
          </Link>
        </div>
      </div>
    </div>
  )
}
