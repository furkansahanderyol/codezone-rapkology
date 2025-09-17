"use client"

import { IconSearch } from "@/assets/IconSearch"
import styles from "./index.module.scss"
import { IconList } from "@/assets/IconList"
import { IconGrid } from "@/assets/IconGrid"
import { IconCompass } from "@/assets/IconCompass"
import { useAtom } from "jotai"
import { dataAtom } from "@/stores"
import ExploreCard from "@/components/ExploreCard"
import Post from "@/components/Post"
import Input from "@/components/Input"
import ContactForm from "@/components/ContactForm"
import { IconFacebookLogo } from "@/assets/IconFacebookLogo"
import { IconTwitterLogo } from "@/assets/IconTwitterLogo"
import { IconDiscordLogo } from "@/assets/IconDiscordLogo"
import { IconSpotifyMiniLogo } from "@/assets/IconSpotifyMiniLogo"
import { IconYoutubeMiniLogo } from "@/assets/IconYoutubeMiniLogo"
import Categories from "@/components/Categories"
import { CATEGORIES } from "@/constants/categories"
import { SOCIAL_LINKS } from "@/constants/socialLinks"

export default function Explore() {
  const [data] = useAtom(dataAtom)

  return (
    <section className={styles.container}>
      <div className={styles.leftSide}>
        <div className={styles.headerWrapper}>
          <div className={styles.header}>
            Keşfet
            <IconCompass width={53} height={53} />
          </div>
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
    </section>
  )
}
