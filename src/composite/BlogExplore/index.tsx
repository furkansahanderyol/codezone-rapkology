"use client"

import SectionHeader from "@/components/SectionHeader"
import styles from "./index.module.scss"
import { IconCompass } from "@/assets/IconCompass"
import { IconSearch } from "@/assets/IconSearch"
import { IconList } from "@/assets/IconList"
import { IconGrid } from "@/assets/IconGrid"
import Categories from "@/components/Categories"
import { CATEGORIES } from "@/constants/categories"
import { useAtom } from "jotai"
import { blogPageVisibleExploreAtom, dataAtom } from "@/stores"
import Post from "@/components/Post"
import { useState } from "react"
import SkewedButton from "@/components/SkewedButton"
import { IconDiamondShape } from "@/assets/IconDiamondShape"
import SectionLayout from "@/layouts/SectionLayout"
import { IconExploreBlogBackground } from "@/assets/IconExploreBlogBackground"
import GridLayout from "@/layouts/GridLayout"
import { PostData } from "@/services/type"

export default function BlogExplore() {
  const [data] = useAtom(dataAtom)
  const [showAll, setShowAll] = useState(false)
  const [visibleExploreItemCount, setVisibleExploreItemCount] = useAtom(
    blogPageVisibleExploreAtom
  )
  // const [listMode, setListMode] = useState<"grid" | "list">("grid")

  return (
    <SectionLayout className={styles.container}>
      <IconDiamondShape className={styles.diamond} />
      <IconExploreBlogBackground className={styles.shape} />
      <div className={styles.wrapper}>
        <div className={styles.headerWrapper}>
          <SectionHeader
            header="Keşfet"
            suffix={<IconCompass width={53} height={53} />}
            options={
              <div className={styles.buttons}>
                <div className={styles.icon}>
                  <IconSearch width={24} height={24} />
                </div>
                <div className={styles.icon}>
                  <IconList width={24} height={24} />
                </div>
                <div className={styles.icon}>
                  <IconGrid width={24} height={24} />
                </div>
              </div>
            }
          />
          <Categories
            className={styles.categories}
            categories={CATEGORIES}
            header="Ne Görmek İstersin"
          />
        </div>

        {data && (
          <GridLayout
            initialItemCount={visibleExploreItemCount}
            setInitialItemCount={setVisibleExploreItemCount}
            moreItemCount={4}
            gridStyles={styles.grid}
            minimumItemCount={8}
            buttonText="Tümünü Gör"
            data={data as PostData[]}
            item={(post, index) => (
              <Post
                key={post._id}
                image={post.attributes.img}
                date={post.createdAt}
                title={post.attributes.title}
                containerStyles={styles.postContainer}
                contentStyles={styles.postContent}
                wrapperStyles={styles.wrapperSpace}
                authorName={post.attributes.authors[0]}
                authorImage={post.attributes.img}
                description={post.attributes.desc}
                showPostImage={true}
                slug={post.attributes.slug}
                vertical
              />
            )}
          />
        )}

        {/* <SkewedButton
          onClick={() => setShowAll(!showAll)}
          className={styles.button}
        >
          {showAll ? "Daha Az Göster" : "Daha Fazla Gör"}
        </SkewedButton> */}
      </div>
    </SectionLayout>
  )
}
