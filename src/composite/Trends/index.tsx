"use client"

import { IconIncrease } from "@/assets/IconIncrease"
import styles from "./index.module.scss"
import { useAtom } from "jotai"
import { dataAtom } from "@/stores"
import { useState } from "react"
import SkewedButton from "@/components/SkewedButton"
import Post from "@/components/Post"
import SectionHeader from "@/components/SectionHeader"
import SectionLayout from "@/layouts/SectionLayout"

export default function Trends() {
  const [data] = useAtom(dataAtom)
  const [limitVisibleCards, setLimitVisibleCards] = useState(true)

  // const trends = useMemo(() => {
  //   return data?.filter((value) => value.attributes.trends)
  // }, [data])

  return (
    <SectionLayout className={styles.container}>
      <SectionHeader header="Trendler" suffix={<IconIncrease />} />
      {/* <div className={styles.header}>
        TRENDLER <IconIncrease />
      </div> */}
      <div className={styles.grid}>
        {data?.map((value, index) => {
          if (limitVisibleCards && index > 5) return

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
    </SectionLayout>
  )
}
