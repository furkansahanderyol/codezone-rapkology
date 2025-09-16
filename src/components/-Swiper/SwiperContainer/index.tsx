import { Swiper } from "swiper/react"

import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import "swiper/css/autoplay"
import "swiper/css/scrollbar"
import styles from "./index.module.scss"
import { Autoplay, Pagination, Scrollbar, Thumbs } from "swiper/modules"
import { IconArrowLeft } from "@/assets/IconArrowLeft"
import { IconArrowRight } from "@/assets/IconArrowRight"
import { useRef, useState } from "react"
import { Swiper as SwiperType } from "swiper"

interface IProps {
  spaceBetween?: number
  slidersPerView?: number
  children: React.ReactNode
  loop?: boolean
  autoPlay?: boolean
  delay?: number
  thumbs?: boolean
  arrows?: boolean
  scrollbar?: boolean
  pagination?: boolean
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
  scrollbar,
  pagination,
}: IProps) {
  const swiperRef = useRef<HTMLDivElement>(null)
  const [swiper, setSwiper] = useState<SwiperType | undefined>(undefined)
  const swiperModules = []

  if (autoPlay) {
    swiperModules.push(Autoplay)
  }

  if (thumbs) {
    swiperModules.push(Thumbs)
  }

  if (scrollbar) {
    swiperModules.push(Scrollbar)
  }

  if (pagination) {
    swiperModules.push(Pagination)
  }

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
        scrollbar={{
          el: swiperRef.current,
          hide: false,
          draggable: true,
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
      {scrollbar && (
        <div
          ref={swiperRef}
          className={`${styles.customScrollbar} swiper-scrollbar`}
        />
      )}
    </div>
  )
}
