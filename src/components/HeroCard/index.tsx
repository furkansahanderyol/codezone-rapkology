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
    <div
      className={clsx(styles.container, dark && styles.dark)}
      // style={{
      //   backgroundImage: `url(${image})`,
      //   backgroundRepeat: "no-repeat",
      //   backgroundSize: "contain",
      // }}
    >
      {/* <Image
        objectFit="cover"
        objectPosition="center center"
        src={image}
        fill
        className={styles.backgroundImage}
        alt=""
      /> */}
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
