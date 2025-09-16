import Image from "next/image"
import styles from "./index.module.scss"
import clsx from "clsx"
import { IconTwitch } from "@/assets/IconTwitch"
import { IconStar } from "@/assets/IconStar"
import { IconChevronDown } from "@/assets/IconChevronDown"
import { IconHeart } from "@/assets/IconHeart"
import Link from "next/link"

export default function Announcement() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.backgroundImagesWrapper}>
          <Image
            src={"/announcement-background.webp"}
            fill
            alt=""
            className={styles.background}
            objectFit="cover"
          />
        </div>
        <div className={styles.announcement}>
          <div className={styles.announcementInformation}>
            <div className={styles.upperSide}>
              <div className={styles.leftSide}>
                <IconTwitch />
              </div>
              <div className={styles.rightSide}>
                <span className={styles.regular}>Her Hafta</span>
                <span className={styles.highlighted}>Canlıdayız!</span>
                <span className={styles.followUs}>Bizi Takip Edin!</span>
              </div>
            </div>
            <div className={styles.bottomSide}>
              <Link
                href={"#"}
                className={clsx(styles.channelLink, styles.follow)}
              >
                <IconHeart />
                <span>Takip Et</span>
              </Link>
              <Link
                href={"#"}
                className={clsx(styles.channelLink, styles.subscribe)}
              >
                <IconStar />
                <span>Abone Ol</span>
                <IconChevronDown />
              </Link>
            </div>
          </div>
          <div className={styles.artistImages}>
            <div className={clsx(styles.artistImage, styles.artistFirst)}>
              <Image src={"/artist-1.webp"} alt="" fill />
            </div>
            <div className={clsx(styles.artistImage, styles.artistSecond)}>
              <Image src={"/artist-2.webp"} alt="" fill />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.vector}>
        <Image src={"/vector-2.webp"} fill objectFit="cover" alt="" />
      </div>
    </section>
  )
}
