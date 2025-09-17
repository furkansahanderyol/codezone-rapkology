import Link from "next/link"
import styles from "./index.module.scss"
import AuthorInformation from "../AuthorInformation"
import { IconArrowRight } from "@/assets/IconArrowRight"
import Image from "next/image"
import clsx from "clsx"

interface IProps {
  title: string
  description: React.ReactNode
  image: string
  authorName: string
  authorImage: string
  index?: number
  showPostImage: boolean
  date: string
  containerStyles?: string
  contentStyles?: string
}

export default function Post({
  title,
  description,
  image,
  authorName,
  authorImage,
  index,
  date,
  showPostImage,
  containerStyles,
  contentStyles,
}: IProps) {
  return (
    <Link href={"#"} className={clsx(styles.container, containerStyles)}>
      {index && (
        <div className={styles.index}>{index < 10 ? `0${index}` : index}</div>
      )}
      {showPostImage && (
        <div className={styles.postImageSide}>
          <div className={styles.postImage}>
            <Image src={image} fill objectFit="cover" alt="" />
          </div>
          <div className={styles.date}>{date}</div>
        </div>
      )}
      <div className={styles.wrapper}>
        <div className={styles.postInformation}>
          <AuthorInformation
            url={image}
            alt=""
            name={authorName}
            objectFit="cover"
          />

          <div className={styles.contentWrapper}>
            <div className={clsx(styles.content, contentStyles)}>
              {description}
            </div>
          </div>
        </div>
        <div className={styles.readMore}>
          Devamını Oku
          <IconArrowRight />
        </div>
      </div>
    </Link>
  )
}
