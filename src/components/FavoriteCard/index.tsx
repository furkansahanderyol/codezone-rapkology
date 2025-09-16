import Link from "next/link"
import styles from "./index.module.scss"
import Image from "next/image"

interface IProps {
  image: string
  url: string
}

export default function FavoriteCard({ image, url }: IProps) {
  return (
    <div className={styles.container}>
      <Link className={styles.link} href={url}>
        <Image src={image} fill objectFit="cover" alt="" />
      </Link>
    </div>
  )
}
