"use client"

import SwiperContainer from "@/components/-Swiper/SwiperContainer"
import styles from "./index.module.scss"
import HeroCard from "@/components/HeroCard"
import { DataService } from "@/services/data"
import { dataAtom, loadingAtom } from "@/stores"
import { useAtom } from "jotai"
import { useEffect } from "react"
import { SwiperSlide } from "swiper/react"
import Image from "next/image"

const HERO_CARDS = [
  {
    id: 0,
    title: "Dünya Rap Trendlerini Konuşuyoruz.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ",
    image: "/hero-image-1.webp",
    dark: false,
  },
  {
    id: 1,
    title: "Türkçe Rap ve Dünya Müzil Haberlerini Takip Et.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi  ",
    image: "/hero-image-2.webp",
    dark: true,
  },
]

export default function Hero() {
  const [, setDataAtom] = useAtom(dataAtom)
  const [, setLoading] = useAtom(loadingAtom)

  useEffect(() => {
    setLoading(true)

    DataService.getData()
      .then((response) => {
        setDataAtom(response)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [setDataAtom, setLoading])

  return (
    <section className={styles.container}>
      <SwiperContainer
        slidersPerView={1}
        spaceBetween={3}
        loop={true}
        autoPlay
        delay={10000}
        thumbs={true}
        arrows
      >
        {HERO_CARDS?.map((card) => {
          return (
            <SwiperSlide key={card.id}>
              <HeroCard
                title={card.title}
                description={card.description}
                image={card.image}
                dark={card.dark}
              />
            </SwiperSlide>
          )
        })}
      </SwiperContainer>
      <div className={styles.heroVector}>
        <Image src={"/vector.webp"} fill alt="" objectFit="cover" />
      </div>
    </section>
  )
}
