"use client"

import Breadcrumb from "@/components/Breadcrumb"
import styles from "./page.module.scss"
import ContactForm from "@/components/ContactForm"
import { SOCIAL_LINKS } from "@/constants/socialLinks"
import SectionLayout from "@/layouts/SectionLayout"
import Image from "next/image"
import { useParams } from "next/navigation"
import { useAtom } from "jotai"
import { blogPostVisibleTrendsAtom, dataAtom } from "@/stores"
import { useMemo } from "react"
import { IconEye } from "@/assets/IconEye"
import { IconHeart } from "@/assets/IconHeart"
import { IconComment } from "@/assets/IconComment"
import Link from "next/link"
import SectionHeader from "@/components/SectionHeader"
import Post from "@/components/Post"
import { IconIncrease } from "@/assets/IconIncrease"
import GridLayout from "@/layouts/GridLayout"
import { PostData } from "@/services/type"
import SkeletonLine from "@/components/-Skeleton/SkeletonLine"
import SkeletonImage from "@/components/-Skeleton/SkeletonImage"

export default function BlogPostPage() {
  const { slug } = useParams()
  const [data] = useAtom(dataAtom)
  const [trendsVisibleItemCount, setTrendsVisibleItemCount] = useAtom(
    blogPostVisibleTrendsAtom
  )

  const selectedPost = useMemo(() => {
    return data?.filter((post) => post.attributes.slug === slug)
  }, [slug, data])

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
            <SkeletonLine height={60} count={1}>
              <h1 className={styles.postTitle}>
                {selectedPost[0]?.attributes.title}
              </h1>
            </SkeletonLine>

            <SkeletonLine height={25} count={2}>
              <div className={styles.postDescription}>
                {selectedPost[0]?.attributes.desc}
              </div>
            </SkeletonLine>

            <SkeletonLine count={6} height={16}>
              <div className={styles.postContent}>
                {selectedPost[0]?.attributes.content}
              </div>
            </SkeletonLine>

            <SkeletonImage radius={0} height={321}>
              <div className={styles.postImageWrapper}>
                <Image src={selectedPost[0].attributes.img} fill alt="" />
              </div>
            </SkeletonImage>

            <SkeletonLine count={6} height={16}>
              children=
              {
                <div className={styles.postContent}>
                  {selectedPost[0]?.attributes.content}
                </div>
              }
            </SkeletonLine>
            <SkeletonLine count={6} height={16}>
              <div className={styles.postContent}>
                {selectedPost[0]?.attributes.content}
              </div>
            </SkeletonLine>
            <div className={styles.postTags}>
              {selectedPost[0].attributes.tags.map((tag, index) => {
                return (
                  <div key={index} className={styles.tag}>
                    {tag}
                  </div>
                )
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
                      <SkeletonImage height={77} radius={0}>
                        <Image src={post.attributes.img} alt="" fill />
                      </SkeletonImage>
                    </div>

                    <SkeletonLine width={1000} height={25} count={3}>
                      <div className={styles.content}>
                        {post.attributes.desc}
                      </div>
                    </SkeletonLine>
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
              {data && (
                <GridLayout
                  initialItemCount={trendsVisibleItemCount}
                  setInitialItemCount={setTrendsVisibleItemCount}
                  moreItemCount={3}
                  gridStyles={styles.grid}
                  data={data as PostData[]}
                  minimumItemCount={6}
                  buttonText={"Tümünü Gör"}
                  item={(post, index) => (
                    <Post
                      key={post._id}
                      title={post.attributes.title}
                      description={post.attributes.desc}
                      contentStyles={styles.content}
                      image={post.attributes.img}
                      authorImage=""
                      authorName={post.attributes.authors[0]}
                      index={index}
                      date={post.createdAt}
                      showPostImage={false}
                      slug={post.attributes.slug}
                    />
                  )}
                />
              )}
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
