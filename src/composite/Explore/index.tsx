"use client"

import { IconSearch } from "@/assets/IconSearch"
import styles from "./index.module.scss"
import { IconList } from "@/assets/IconList"
import { IconGrid } from "@/assets/IconGrid"
import { IconCompass } from "@/assets/IconCompass"
import { useAtom } from "jotai"
import { dataAtom, homepageVisibleExploreAtom, viewOptionAtom } from "@/stores"
import Post from "@/components/Post"
import ContactForm from "@/components/ContactForm"
import Categories from "@/components/Categories"
import { CATEGORIES } from "@/constants/categories"
import { SOCIAL_LINKS } from "@/constants/socialLinks"
import SectionHeader from "@/components/SectionHeader"
import SectionLayout from "@/layouts/SectionLayout"
import GridLayout from "@/layouts/GridLayout"
import { PostData } from "@/services/type"
import { useEffect } from "react"
import clsx from "clsx"

export default function Explore() {
  const [data] = useAtom(dataAtom)
  const [visibleExploreItemCount, setVisibleExploreItemCount] = useAtom(
    homepageVisibleExploreAtom
  )
  const [view, setView] = useAtom(viewOptionAtom)

  useEffect(() => {
    setVisibleExploreItemCount(4)
    setView("list")
  }, [setVisibleExploreItemCount])

  return (
    <SectionLayout className={styles.container}>
      <div className={styles.leftSide}>
        <div className={styles.leftSideUpper}>
          <Categories
            className={styles.categoriesResponsive}
            header="Ne Görmek İstersin?"
            categories={CATEGORIES}
          />
          <div className={styles.headerWrapper}>
            <SectionHeader
              className={styles.header}
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
          </div>
        </div>

        {data && (
          <GridLayout
            initialItemCount={visibleExploreItemCount}
            setInitialItemCount={setVisibleExploreItemCount}
            buttonText="Daha Fazla Göster"
            showAllArticles
            moreItemCount={4}
            gridStyles={clsx(styles.list, view === "grid" && styles.gridView)}
            data={data as PostData[]}
            item={(post) => (
              <Post
                key={post._id}
                title={post.attributes.title}
                description={post.attributes.desc}
                containerStyles={styles.postContainer}
                contentStyles={styles.postContent}
                wrapperStyles={styles.wrapperSpace}
                imageStyles={styles.postImage}
                image={post.attributes.img}
                authorImage=""
                authorName={post.attributes.authors[0]}
                index={undefined}
                date={post.createdAt}
                showPostImage={true}
                slug={post.attributes.slug}
              />
            )}
          />
        )}
      </div>

      <div className={styles.rightSide}>
        <Categories
          className={styles.categories}
          header="Ne Görmek İstersin?"
          categories={CATEGORIES}
        />

        <div className={styles.sticky}>
          <ContactForm
            configuration="body"
            header="GELİŞMELERDEN İLK SEN HABERDAR OL!"
            socialLinks={SOCIAL_LINKS}
          />
        </div>
      </div>
    </SectionLayout>
  )
}
