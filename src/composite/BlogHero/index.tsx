"use client"

import SwiperContainer from "@/components/-Swiper/SwiperContainer"
import styles from "./index.module.scss"
import { useAtom } from "jotai"
import { dataAtom } from "@/stores"
import { SwiperSlide } from "swiper/react"
import Link from "next/link"
import Image from "next/image"
import { useMemo, useState } from "react"
import Breadcrumb from "@/components/Breadcrumb"

export default function BlogHero() {
  const [data] = useAtom(dataAtom)
  const [blogPaginationRef, setBlogPaginationRef] =
    useState<HTMLDivElement | null>(null)

  const blogData = useMemo(() => {
    if (!data) return

    const splitData = Math.ceil(data.length / 2)

    const highlightedPosts = data.slice(0, splitData)
    const recommendedPosts = data.slice(splitData)

    return [highlightedPosts, recommendedPosts]
  }, [data])

  return (
    <div className={styles.container}>
      <div className={styles.background} />
      <div className={styles.wrapper}>
        <div className={styles.titleWrapper}>
          <Breadcrumb
            textColor={styles.breadCrumb}
            history={[
              { label: "Ana Sayfa", url: "/" },
              { label: "Blog", url: "/blog" },
              { label: "Lorem Ipsum", url: "" },
            ]}
          />
          <div className={styles.title}>BLOG</div>
        </div>

        <div className={styles.content}>
          <div className={styles.sliderSide}>
            <SwiperContainer
              slidersPerView={1}
              scrollbar={false}
              pagination={{ el: blogPaginationRef }}
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
                      <Link
                        href={`/blog/${value.attributes.slug}`}
                        className={styles.swiperItem}
                      >
                        <div className={styles.postImageWrapper}>
                          <Image
                            className={styles.postImage}
                            src={value.attributes.img}
                            fill
                            priority
                            alt={""}
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
              ref={setBlogPaginationRef}
              className={styles.customPaginationContainer}
            />
          </div>

          <div className={styles.recommendationsSide}>
            {blogData &&
              blogData[1].map((data, index) => {
                if (index > 3) return

                return (
                  <Link
                    href={`/blog/${data.attributes.slug}`}
                    key={data._id}
                    className={styles.recommendedPost}
                  >
                    <div className={styles.imageWrapper}>
                      <Image src={data.attributes.img} alt="" fill />
                    </div>
                    <div className={styles.description}>
                      {data.attributes.desc}
                    </div>
                  </Link>
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
