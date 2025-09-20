"use client"

import { IconIncrease } from "@/assets/IconIncrease"
import styles from "./index.module.scss"
import { useAtom } from "jotai"
import { dataAtom, homepageVisibleTrendsAtom } from "@/stores"
import { useEffect } from "react"
import Post from "@/components/Post"
import SectionHeader from "@/components/SectionHeader"
import SectionLayout from "@/layouts/SectionLayout"
import GridLayout from "@/layouts/GridLayout"
import { PostData } from "@/services/type"

export default function Trends() {
  const [data] = useAtom(dataAtom)
  const [trendsVisibleItemCount, setTrendsVisibleItemCount] = useAtom(
    homepageVisibleTrendsAtom
  )

  useEffect(() => {
    setTrendsVisibleItemCount(6)
  }, [setTrendsVisibleItemCount])

  return (
    <SectionLayout className={styles.container}>
      <SectionHeader header="Trendler" suffix={<IconIncrease />} />
      {data && (
        <GridLayout
          initialItemCount={trendsVisibleItemCount}
          setInitialItemCount={setTrendsVisibleItemCount}
          moreItemCount={3}
          gridStyles={styles.grid}
          data={data as PostData[]}
          minimumItemCount={7}
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
    </SectionLayout>
  )
}
