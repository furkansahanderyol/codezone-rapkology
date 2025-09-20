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
import { dataAtom } from "@/stores"
import Post from "@/components/Post"
import { useState } from "react"
import SkewedButton from "@/components/SkewedButton"
import { IconDiamondShape } from "@/assets/IconDiamondShape"
import SectionLayout from "@/layouts/SectionLayout"
import { IconExploreBlogBackground } from "@/assets/IconExploreBlogBackground"

export default function BlogExplore() {
  const [data] = useAtom(dataAtom)
  const [showAll, setShowAll] = useState(false)
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

        <div className={styles.grid}>
          {data?.map((value, index) => {
            if (!showAll && index > 7) return

            return (
              <Post
                key={value._id}
                image={value.attributes.img}
                date={value.createdAt}
                title={value.attributes.title}
                containerStyles={styles.postContainer}
                contentStyles={styles.postContent}
                wrapperStyles={styles.wrapperSpace}
                authorName={value.attributes.authors[0]}
                authorImage={value.attributes.img}
                description={value.attributes.desc}
                showPostImage={true}
                slug={value.attributes.slug}
                vertical
              />
            )
          })}
        </div>

        <SkewedButton
          onClick={() => setShowAll(!showAll)}
          className={styles.button}
        >
          {showAll ? "Daha Az Göster" : "Daha Fazla Gör"}
        </SkewedButton>
      </div>
    </SectionLayout>
  )
}
