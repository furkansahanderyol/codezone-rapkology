"use client"

import Breadcrumb from "@/components/Breadcrumb"
import styles from "./page.module.scss"
import ContactForm from "@/components/ContactForm"
import { SOCIAL_LINKS } from "@/constants/socialLinks"
import SectionLayout from "@/layouts/SectionLayout"
import Image from "next/image"
import { useParams } from "next/navigation"
import { useAtom } from "jotai"
import { dataAtom } from "@/stores"
import { useMemo, useState } from "react"
import { IconEye } from "@/assets/IconEye"
import { IconHeart } from "@/assets/IconHeart"
import { IconComment } from "@/assets/IconComment"
import Link from "next/link"
import SectionHeader from "@/components/SectionHeader"
import Post from "@/components/Post"
import SkewedButton from "@/components/SkewedButton"
import { IconIncrease } from "@/assets/IconIncrease"

export default function BlogPostPage() {
  const { slug } = useParams()
  const [data] = useAtom(dataAtom)
  const [limitVisibleCards, setLimitVisibleCards] = useState(false)

  const selectedPost = useMemo(() => {
    return data?.filter((post) => post.attributes.slug === slug)
  }, [slug, data])

  console.log(selectedPost)

  if (!selectedPost) return
  return (
    <div className={styles.container}>
      <SectionLayout className={styles.wrapper}>
        <div className={styles.postSide}>
          <Breadcrumb
            history={[
              { label: "Ana Sayfa", url: "/" },
              { label: "Blog", url: "/blog" },
              { label: "Lorem Ipsum", url: "" },
            ]}
          />
          <div className={styles.post}>
            <div className={styles.totalViews}>
              <IconEye />
              12.094
            </div>
            <div className={styles.postTitle}>
              {selectedPost[0]?.attributes.title}
            </div>
            <div className={styles.postDescription}>
              {selectedPost[0]?.attributes.desc}
            </div>
            <div className={styles.postContent}>
              {selectedPost[0]?.attributes.content}
            </div>
            <div className={styles.postImageWrapper}>
              <Image src={selectedPost[0].attributes.img} fill alt="" />
            </div>
            <div className={styles.postContent}>
              {selectedPost[0]?.attributes.content}
            </div>
            <div className={styles.postContent}>
              {selectedPost[0]?.attributes.content}
            </div>
            <div className={styles.postTags}>
              {selectedPost[0].attributes.tags.map((tag) => {
                return <div className={styles.tag}>{tag}</div>
              })}
            </div>
            <div className={styles.postInteractions}>
              <div className={styles.interaction}>
                <IconHeart width={26} height={22} />
                <span className={styles.highlighted}>
                  14 Kişi <span>Beğendi</span>
                </span>
              </div>
              <div className={styles.interaction}>
                <IconComment width={26} height={22} />
                <span className={styles.highlighted}>3</span>
              </div>
            </div>
          </div>

          <div className={styles.moreContent}>
            <SectionHeader header="Daha Fazla İçerik" />
            <div className={styles.contents}>
              {data?.map((post, index) => {
                if (index > 2) return

                return (
                  <Link
                    key={index}
                    className={styles.moreContentPost}
                    href={`/blog/${post.attributes.slug}`}
                  >
                    <div className={styles.imageWrapper}>
                      <Image src={post.attributes.img} alt="" fill />
                    </div>
                    <div className={styles.content}>{post.attributes.desc}</div>
                  </Link>
                )
              })}
            </div>
          </div>

          <div className={styles.trends}>
            <SectionHeader
              header="Trendler"
              className={styles.trendsHeader}
              suffix={<IconIncrease />}
            />

            <div className={styles.trendsWrapper}>
              <div className={styles.grid}>
                {data?.map((value, index) => {
                  if (limitVisibleCards && index > 3) return

                  return (
                    <Post
                      key={value._id}
                      title={value.attributes.title}
                      description={value.attributes.desc}
                      contentStyles={styles.content}
                      image={value.attributes.img}
                      authorImage=""
                      authorName={value.attributes.authors[0]}
                      index={index + 1}
                      date={value.createdAt}
                      showPostImage={false}
                      slug={value.attributes.slug}
                    />
                  )
                })}
              </div>
              <div className={styles.showAllWrapper}>
                <SkewedButton
                  onClick={() => setLimitVisibleCards(!limitVisibleCards)}
                  className={styles.showAll}
                >
                  <span className={styles.showAllText}>
                    {limitVisibleCards ? "Tümünü Gör" : "Daha Az Göster"}
                  </span>
                </SkewedButton>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.contactForm}>
          <ContactForm
            configuration="body"
            header="GELİŞMELERDEN İLK SEN HABERDAR OL!"
            socialLinks={SOCIAL_LINKS}
          />
        </div>
      </SectionLayout>
    </div>
  )
}
