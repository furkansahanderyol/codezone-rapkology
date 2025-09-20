"use client"

import SwiperContainer from "@/components/-Swiper/SwiperContainer"
import styles from "./index.module.scss"
import HeroCard from "@/components/HeroCard"
import { DataService } from "@/services/data"
import { dataAtom, loadingAtom } from "@/stores"
import { useAtom } from "jotai"
import { useEffect, useState } from "react"
import { SwiperSlide } from "swiper/react"
import Image from "next/image"
import { HERO_CARDS } from "@/constants/heroCards"

export default function Hero() {
  const [, setDataAtom] = useAtom(dataAtom)
  const [, setLoading] = useAtom(loadingAtom)
  const [heroPaginationRef, setHeroPaginationRef] =
    useState<HTMLDivElement | null>(null)

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
        pagination={{ el: heroPaginationRef }}
        delay={5000}
        thumbs={true}
        arrows
        loop
        scrollbar={false}
        autoPlay
      >
        {HERO_CARDS?.map((card) => {
          return (
            <SwiperSlide key={card.id}>
              <HeroCard
                id={card.id}
                title={card.title}
                description={card.description}
                image={card.image}
                dark={card.dark}
                slug={card.slug}
              />
            </SwiperSlide>
          )
        })}
      </SwiperContainer>
      <div className={styles.heroVector}>
        <Image src={"/vector.webp"} fill alt="" objectFit="cover" />
      </div>
      <div
        ref={setHeroPaginationRef}
        className={styles.customPaginationContainer}
      />
    </section>
  )
}
