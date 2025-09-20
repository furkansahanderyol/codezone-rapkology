import Link from "next/link"
import styles from "./index.module.scss"
import AuthorInformation from "../AuthorInformation"
import { IconArrowRight } from "@/assets/IconArrowRight"
import Image from "next/image"
import clsx from "clsx"
import { useAtom } from "jotai"
import { viewOptionAtom } from "@/stores"
import { formatDate } from "@/helpers/formatDate"

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
  wrapperStyles?: string
  imageStyles?: string
  vertical?: boolean
  slug: string
}

export default function Post({
  description,
  image,
  authorName,
  index,
  date,
  slug,
  showPostImage,
  containerStyles,
  contentStyles,
  imageStyles,
  wrapperStyles,
  vertical,
}: IProps) {
  const [view] = useAtom(viewOptionAtom)
  {
    return !vertical ? (
      <Link
        href={`/blog/${slug}`}
        className={clsx(styles.container, containerStyles)}
      >
        {index && (
          <div className={styles.index}>{index < 10 ? `0${index}` : index}</div>
        )}
        {showPostImage && (
          <div className={clsx(styles.postImageSide, imageStyles)}>
            <div className={styles.postImage}>
              <Image src={image} fill objectFit="cover" alt="" />
            </div>
            <div className={styles.date}>{formatDate(date)}</div>
          </div>
        )}
        <div className={clsx(styles.wrapper, wrapperStyles)}>
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
    ) : (
      <Link
        href={"#"}
        className={clsx(
          styles.containerVertical,
          view === "list" && styles.listView
        )}
      >
        <AuthorInformation
          url={image}
          alt=""
          name={authorName}
          objectFit="cover"
        />
        {index && (
          <div className={styles.index}>{index < 10 ? `0${index}` : index}</div>
        )}

        <div className={styles.flex}>
          {showPostImage && (
            <div className={clsx(styles.postImageSide, imageStyles)}>
              <div className={styles.postImage}>
                <Image src={image} fill objectFit="cover" alt="" />
              </div>
              <div className={styles.date}>{formatDate(date)}</div>
            </div>
          )}

          <div className={clsx(styles.wrapper, wrapperStyles)}>
            <div className={styles.postInformation}>
              <div className={styles.contentWrapper}>
                <div className={clsx(styles.content, contentStyles)}>
                  {description}
                </div>
              </div>
            </div>
            <div className={styles.readMore}>
              Daha Fazla Oku
              <IconArrowRight />
            </div>
          </div>
        </div>
      </Link>
    )
  }
}
