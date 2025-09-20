import { Swiper } from "swiper/react"

import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import "swiper/css/autoplay"
import "swiper/css/scrollbar"
import "swiper/css/effect-coverflow"
import styles from "./index.module.scss"
import {
  Autoplay,
  Pagination,
  Scrollbar,
  Thumbs,
  EffectCoverflow,
} from "swiper/modules"
import { IconArrowLeft } from "@/assets/IconArrowLeft"
import { IconArrowRight } from "@/assets/IconArrowRight"
import { useRef, useState } from "react"
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
  pagination?: {
    el: string | HTMLElement | undefined | null
  }
  breakpoints?: { [width: number]: SwiperOptions }
  effectCoverflow?: boolean
  coverflowOptions?: {
    rotate: number
    stretch: number
    depth: number
    modifier: number
    slideShadows: boolean
  }
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
  effectCoverflow,
  coverflowOptions,
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

  if (effectCoverflow) {
    swiperModules.push(EffectCoverflow)
  }

  return (
    <div className={styles.container}>
      <Swiper
        onSwiper={setSwiper}
        spaceBetween={spaceBetween}
        slidesPerView={slidersPerView}
        loop={loop}
        modules={swiperModules}
        autoplay={{ delay: delay }}
        coverflowEffect={coverflowOptions}
        effect={effectCoverflow ? "coverflow" : "slide"}
        breakpoints={
          scrollbar
            ? {
                1025: {
                  slidesPerView: 3,
                },

                768: {
                  slidesPerView: 3,
                },

                580: {
                  slidesPerView: 2,
                },

                400: {
                  slidesPerView: 1.2,
                  spaceBetween: 40,
                },

                0: {
                  slidesPerView: 1,
                  spaceBetween: 0,
                },
              }
            : undefined
        }
        pagination={
          pagination
            ? {
                enabled: true,
                clickable: true,
                el: pagination.el,
              }
            : false
        }
        scrollbar={{
          el: swiperRef.current,
          hide: false,
          draggable: true,
        }}
        navigation={false}
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
