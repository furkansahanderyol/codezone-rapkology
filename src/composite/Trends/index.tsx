"use client"

import { IconIncrease } from "@/assets/IconIncrease"
import styles from "./index.module.scss"
import { useAtom } from "jotai"
import { dataAtom } from "@/stores"
import TrendCard from "@/components/TrendCard"
import { useMemo, useState } from "react"
import SkewedButton from "@/components/SkewedButton"

export default function Trends() {
  const [data] = useAtom(dataAtom)
  const [limitVisibleCards, setLimitVisibleCards] = useState(true)

  const trends = useMemo(() => {
    return data?.filter((value) => value.attributes.trends)
  }, [data])

  return (
    <section className={styles.container}>
      <div className={styles.header}>
        TRENDLER <IconIncrease />
      </div>
      <div className={styles.grid}>
        {trends?.map((value, index) => {
          if (limitVisibleCards && index > 5) return

          return (
            <TrendCard
              key={value._id}
              title={value.attributes.title}
              description={value.attributes.desc}
              image={value.attributes.img}
              authorImage=""
              authorName={value.attributes.authors[0]}
              index={index + 1}
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
    </section>
  )
}
