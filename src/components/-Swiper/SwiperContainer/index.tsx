import { Swiper } from "swiper/react"

import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import "swiper/css/autoplay"
import styles from "./index.module.scss"
import { Autoplay, Pagination, Thumbs } from "swiper/modules"

interface IProps {
  spaceBetween?: number
  slidersPerView?: number
  children: React.ReactNode
  loop: boolean
  autoPlay: boolean
  delay: number
  thumbs: boolean
}

export default function SwiperContainer({
  spaceBetween,
  slidersPerView,
  children,
  loop,
  autoPlay,
  delay,
  thumbs,
}: IProps) {
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
        {children}
      </Swiper>
    </div>
  )
}
