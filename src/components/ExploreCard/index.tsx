import Image from "next/image"
import styles from "./index.module.scss"
import AuthorImage from "../AuthorInformation"
import AuthorInformation from "../AuthorInformation"

interface IProps {
  image: string
  date: string
  authorName: string
  authorImage: string
  description: string
}

export default function ExploreCard({
  image,
  date,
  authorName,
  authorImage,
  description,
}: IProps) {
  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <div className={styles.cardImage}>
          <Image src={image} fill objectFit="cover" alt="" />
        </div>
        <div className={styles.date}>{date}</div>
      </div>
      <div className={styles.rightSide}>
        <div className={styles.authorInformation}>
          <AuthorInformation
            url={authorImage}
            alt=""
            objectFit="cover"
            name={authorName}
          />
          <div className={styles.description}>{description}</div>
          <div className={styles.readMore}>Daha fazla oku</div>
        </div>
      </div>
    </div>
  )
}
