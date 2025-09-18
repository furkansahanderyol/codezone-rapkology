"use client"

import { useAtom } from "jotai"
import styles from "./index.module.scss"
import { dataAtom } from "@/stores"
import SwiperContainer from "@/components/-Swiper/SwiperContainer"
import { SwiperSlide } from "swiper/react"
import FavoriteCard from "@/components/FavoriteCard"
import Link from "next/link"
import { IconYoutubeLogo } from "@/assets/IconYoutubeLogo"
import { IconSpotifyLogo } from "@/assets/IconSpotifyLogo"
import SectionHeader from "@/components/SectionHeader"

export default function Favorites() {
  const [data] = useAtom(dataAtom)

  return (
    <section className={styles.container}>
      <div className={styles.labels}>
        <Link href={"#"} className={styles.youtubeLogo}>
          <IconYoutubeLogo />
        </Link>
        <Link href={"#"} className={styles.spotifyLogo}>
          <IconSpotifyLogo />
        </Link>
      </div>
      <div className={styles.wrapper}>
        <SectionHeader className={styles.header} header="Ayın Favorileri" />
        <div className={styles.swiperWrapper}>
          <SwiperContainer scrollbar pagination={false}>
            {data?.map((value) => {
              return (
                <SwiperSlide className={styles.swiper} key={value._id}>
                  <FavoriteCard
                    key={value._id}
                    image={value.attributes.img}
                    url="#"
                  />
                </SwiperSlide>
              )
            })}
          </SwiperContainer>
        </div>
      </div>
    </section>
  )
}
