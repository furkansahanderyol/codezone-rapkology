"use client"

import SwiperContainer from "@/components/-Swiper/SwiperContainer"
import styles from "./index.module.scss"
import HeroCard from "@/components/HeroCard"
import { useState } from "react"
import { SwiperSlide } from "swiper/react"
import Image from "next/image"
import { HERO_CARDS } from "@/constants/heroCards"

export default function Hero() {
  const [heroPaginationRef, setHeroPaginationRef] =
    useState<HTMLDivElement | null>(null)

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
        autoPlay={true}
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
        <Image src={"/vector.webp"} fill alt="" />
      </div>
      <div
        ref={setHeroPaginationRef}
        className={styles.customPaginationContainer}
      />
    </section>
  )
}
