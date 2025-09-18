"use client"

import SwiperContainer from "@/components/-Swiper/SwiperContainer"
import styles from "./index.module.scss"
import { useAtom } from "jotai"
import { dataAtom } from "@/stores"
import { SwiperSlide } from "swiper/react"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useMemo, useRef } from "react"

export default function BlogHero() {
  const [data] = useAtom(dataAtom)

  const blogData = useMemo(() => {
    if (!data) return

    const splitData = Math.ceil(data.length / 2)

    const highlightedPosts = data.slice(0, splitData)
    const recommendedPosts = data.slice(splitData)

    return [highlightedPosts, recommendedPosts]
  }, [data])

  const blogPaginationRef = useRef<HTMLDivElement>(null)

  return (
    <div className={styles.container}>
      <div className={styles.background} />
      <div className={styles.wrapper}>
        <div className={styles.titleWrapper}>
          <div className={styles.breadCrumbs}>
            {"Ana Sayfa > Blog > LOREM IPSUM DOLOR  ...  AMET"}
          </div>
          <div className={styles.title}>BLOG</div>
        </div>

        <div className={styles.content}>
          <div className={styles.sliderSide}>
            <SwiperContainer
              slidersPerView={1}
              scrollbar={false}
              pagination={{ el: blogPaginationRef.current }}
              coverflowOptions={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              thumbs
              effectCoverflow
            >
              {blogData &&
                blogData[0]?.map((value) => {
                  return (
                    <SwiperSlide
                      key={value._id}
                      className={styles.swiperItemWrapper}
                    >
                      <Link href={"#"} className={styles.swiperItem}>
                        <div className={styles.postImageWrapper}>
                          <Image
                            className={styles.postImage}
                            src={value.attributes.img}
                            fill
                            priority
                            alt=""
                          />
                        </div>
                        <div>
                          <div className={styles.postTitle}>
                            Lorem ipsum dolor sit amet consectetur adipiscing
                            elit Ut et massa mi. Mauris nec leo non libero
                            sodales lobortis. Quisque a neque preti ...
                          </div>
                        </div>
                      </Link>
                    </SwiperSlide>
                  )
                })}
            </SwiperContainer>
            <div
              ref={blogPaginationRef}
              className={styles.customPaginationContainer}
            />
          </div>

          <div className={styles.recommendationsSide}>
            {blogData &&
              blogData[1].map((data, index) => {
                if (index > 3) return

                return (
                  <div key={data._id} className={styles.recommendedPost}>
                    <div className={styles.imageWrapper}>
                      <Image src={data.attributes.img} alt="" fill />
                    </div>
                    <div className={styles.description}>
                      {data.attributes.desc}
                    </div>
                  </div>
                )
              })}
          </div>
        </div>
      </div>
      <div className={styles.blogHeroShape}>
        <Image
          src={"/vector-2.webp"}
          className={styles.firstVector}
          fill
          alt=""
        />
        <Image
          src={"/vector.webp"}
          fill
          alt=""
          className={styles.secondVector}
        />
      </div>
    </div>
  )
}
