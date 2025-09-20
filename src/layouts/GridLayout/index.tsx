import { PostData } from "@/services/type"
import styles from "./index.module.scss"
import clsx from "clsx"
import SkewedButton from "@/components/SkewedButton"
import Link from "next/link"

interface IProps {
  initialItemCount: number
  minimumItemCount?: number
  setInitialItemCount: React.Dispatch<React.SetStateAction<number>>
  moreItemCount: number
  data: PostData[]
  item: (value: PostData, index?: number) => React.ReactNode
  className?: string
  gridStyles?: string
  buttonText: string
  showAllArticles?: boolean
}

export default function GridLayout({
  initialItemCount,
  setInitialItemCount,
  moreItemCount,
  minimumItemCount,
  data,
  item,
  className,
  gridStyles,
  buttonText,
  showAllArticles,
}: IProps) {
  return (
    <div className={clsx(styles.container, className)}>
      <div className={clsx(styles.grid, gridStyles)}>
        {data.map((value, index) => {
          if (initialItemCount < index + 1) return

          return item(value, index + 1)
        })}
      </div>

      <div className={styles.showAllWrapper}>
        <SkewedButton
          onClick={() => {
            setInitialItemCount((prev) => {
              if (showAllArticles) {
                return prev + moreItemCount
              }

              return data.length
            })

            if (
              !showAllArticles &&
              initialItemCount >= data.length &&
              minimumItemCount
            ) {
              setInitialItemCount(minimumItemCount)
            }
          }}
          className={clsx(
            styles.showAll,
            initialItemCount >= data.length &&
              showAllArticles &&
              styles.redirect
          )}
        >
          {initialItemCount >= data.length ? (
            showAllArticles ? (
              <Link href={"/blog"}>Tüm Makaleleri Görüntüle</Link>
            ) : (
              "Daha Az Göster"
            )
          ) : (
            buttonText
          )}
        </SkewedButton>
      </div>
    </div>
  )
}
