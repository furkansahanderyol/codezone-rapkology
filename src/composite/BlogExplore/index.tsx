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
import { blogPageVisibleExploreAtom, dataAtom, viewOptionAtom } from "@/stores"
import Post from "@/components/Post"
import { useEffect } from "react"
import { IconDiamondShape } from "@/assets/IconDiamondShape"
import SectionLayout from "@/layouts/SectionLayout"
import { IconExploreBlogBackground } from "@/assets/IconExploreBlogBackground"
import GridLayout from "@/layouts/GridLayout"
import { PostData } from "@/services/type"
import clsx from "clsx"

export default function BlogExplore() {
  const [data] = useAtom(dataAtom)
  const [visibleExploreItemCount, setVisibleExploreItemCount] = useAtom(
    blogPageVisibleExploreAtom
  )
  const [view, setView] = useAtom(viewOptionAtom)

  useEffect(() => {
    setView("grid")
    setVisibleExploreItemCount(8)
  }, [setView, setVisibleExploreItemCount])

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
                <div
                  onClick={() => setView("list")}
                  className={clsx(
                    styles.icon,
                    view === "list" && styles.active
                  )}
                >
                  <IconList width={24} height={24} />
                </div>
                <div
                  onClick={() => setView("grid")}
                  className={clsx(
                    styles.icon,
                    view === "grid" && styles.active
                  )}
                >
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
            gridStyles={clsx(styles.grid, view === "list" && styles.listView)}
            minimumItemCount={8}
            buttonText="Daha Fazla Gör"
            data={data as PostData[]}
            item={(post) => (
              <Post
                key={post._id}
                image={post.attributes.img}
                date={post.createdAt}
                title={post.attributes.title}
                containerStyles={styles.postContainer}
                contentStyles={styles.postContent}
                wrapperStyles={styles.wrapperSpace}
                imageStyles={styles.postImage}
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
      </div>
    </SectionLayout>
  )
}
