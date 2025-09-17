import { Swiper, SwiperRef, useSwiper } from "swiper/react"

import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import "swiper/css/autoplay"
import "swiper/css/scrollbar"
import styles from "./index.module.scss"
import { Autoplay, Pagination, Scrollbar, Thumbs } from "swiper/modules"
import { IconArrowLeft } from "@/assets/IconArrowLeft"
import { IconArrowRight } from "@/assets/IconArrowRight"
import { useEffect, useRef, useState } from "react"
import { Swiper as SwiperType } from "swiper"
import { SwiperOptions } from "swiper/types"

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
  breakpoints?: { [width: number]: SwiperOptions }
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
  breakpoints,
}: IProps) {
  const swiperS = useSwiper()
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

  useEffect(() => {
    // Swiper örneği mevcutsa
    if (swiper) {
      // Swiper'ı güncelle
      swiper.update()
    }
  }, [swiper])

  return (
    <div className={styles.container}>
      <Swiper
        onSwiper={(swiper) => setSwiper(swiper)}
        // spaceBetween={spaceBetween}
        // slidesPerView={slidersPerView}
        loop={loop}
        modules={swiperModules}
        autoplay={{ delay: delay }}
        // breakpoints={breakpoints}
        breakpoints={{
          1025: {
            slidesPerView: 3,
          },

          768: {
            slidesPerView: 2,
          },

          280: {
            slidesPerView: 1,
          },
        }}
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
