import clsx from "clsx"
import styles from "./index.module.scss"
import Link from "next/link"
import Image from "next/image"

interface IProps {
  title: string
  description: string
  image: string
  dark: boolean
}

export default function HeroCard({ title, description, image, dark }: IProps) {
  return (
    <div className={clsx(styles.container, dark && styles.dark)}>
      <Image src={image} className={styles.backgroundImage} fill alt="" />
      <div className={styles.content}>
        <div className={styles.title}>{title}</div>
        <div className={styles.description}>{description}</div>

        <div className={styles.readMoreWrapper}>
          <Link className={styles.readMore} href={"#"}>
            Devamını Oku
          </Link>
        </div>
      </div>
    </div>
  )
}
