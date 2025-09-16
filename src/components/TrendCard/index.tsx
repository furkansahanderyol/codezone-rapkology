import Link from "next/link"
import styles from "./index.module.scss"
import Image from "next/image"
import { IconArrowRight } from "@/assets/IconArrowRight"

interface IProps {
  title: string
  description: string
  image: string
  authorName: string
  authorImage: string
  index: number
}

export default function TrendCard({
  description,
  image,
  authorName,
  index,
}: IProps) {
  return (
    <Link href={"#"} className={styles.container}>
      <div className={styles.index}>{index < 10 ? `0${index}` : index}</div>
      <div className={styles.wrapper}>
        <div className={styles.authorInformation}>
          <div className={styles.authorImage}>
            <Image src={image} fill alt="" objectFit="cover" />
          </div>
          <div className={styles.authorName}>{authorName}</div>
        </div>
        <div className={styles.contentWrapper}>
          <div className={styles.content}>{description}</div>
        </div>
        <div className={styles.readMore}>
          Devamını Oku
          <IconArrowRight />
        </div>
      </div>
    </Link>
  )
}
