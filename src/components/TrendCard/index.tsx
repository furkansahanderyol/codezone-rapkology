import Link from "next/link"
import styles from "./index.module.scss"
import Image from "next/image"
import { IconArrowRight } from "@/assets/IconArrowRight"
import AuthorImage from "../AuthorInformation"
import AuthorInformation from "../AuthorInformation"

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
        <AuthorInformation
          url={image}
          alt=""
          name={authorName}
          objectFit="cover"
        />

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
