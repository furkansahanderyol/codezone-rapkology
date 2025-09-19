"use client"

import { IconSearch } from "@/assets/IconSearch"
import styles from "./index.module.scss"
import { IconList } from "@/assets/IconList"
import { IconGrid } from "@/assets/IconGrid"
import { IconCompass } from "@/assets/IconCompass"
import { useAtom } from "jotai"
import { dataAtom } from "@/stores"
import Post from "@/components/Post"
import ContactForm from "@/components/ContactForm"
import Categories from "@/components/Categories"
import { CATEGORIES } from "@/constants/categories"
import { SOCIAL_LINKS } from "@/constants/socialLinks"
import SectionHeader from "@/components/SectionHeader"
import SectionLayout from "@/layouts/SectionLayout"

export default function Explore() {
  const [data] = useAtom(dataAtom)

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
                  <div className={styles.icon}>
                    <IconList width={24} height={24} />
                  </div>
                  <div className={styles.icon}>
                    <IconGrid width={24} height={24} />
                  </div>
                </div>
              }
            />
          </div>
        </div>

        <div className={styles.list}>
          {data?.map((value) => {
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
              />
            )
          })}
        </div>
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
