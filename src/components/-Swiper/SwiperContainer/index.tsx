import { Swiper, SwiperRef } from "swiper/react"

import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import "swiper/css/autoplay"
import styles from "./index.module.scss"
import { Autoplay, Pagination, Thumbs } from "swiper/modules"
import { IconArrowLeft } from "@/assets/IconArrowLeft"
import { IconArrowRight } from "@/assets/IconArrowRight"
import { useState } from "react"
import { Swiper as SwiperType } from "swiper"

interface IProps {
  spaceBetween?: number
  slidersPerView?: number
  children: React.ReactNode
  loop: boolean
  autoPlay: boolean
  delay: number
  thumbs: boolean
  arrows: boolean
}

export default function SwiperContainer({
  spaceBetween,
  slidersPerView,
  children,
  loop,
  autoPlay,
  delay,
  thumbs,
  arrows,
}: IProps) {
  const [swiper, setSwiper] = useState<SwiperType | undefined>(undefined)
  const swiperModules = []

  if (autoPlay) {
    swiperModules.push(Autoplay)
  }

  if (thumbs) {
    swiperModules.push(Thumbs)
  }

  swiperModules.push(Pagination)

  return (
    <div className={styles.container}>
      <Swiper
        onSwiper={(swiper) => setSwiper(swiper)}
        spaceBetween={spaceBetween}
        slidesPerView={slidersPerView}
        loop={loop}
        modules={swiperModules}
        autoplay={{ delay: delay }}
        pagination={{
          enabled: true,
          clickable: true,
        }}
        navigation={true}
      >
        {arrows && (
          <div className={styles.arrows}>
            <div
              onClick={() => swiper?.slidePrev()}
              className={styles.leftArrow}
            >
              <IconArrowLeft />
            </div>
            <div
              onClick={() => swiper?.slideNext()}
              className={styles.rightArrow}
            >
              <IconArrowRight />
            </div>
          </div>
        )}

        {children}
      </Swiper>
    </div>
  )
}
