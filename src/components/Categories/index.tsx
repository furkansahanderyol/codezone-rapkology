"use client"

import clsx from "clsx"
import styles from "./index.module.scss"
import { useAtom } from "jotai"
import { selectedCategoryAtom } from "@/stores"

interface IProps {
  header?: string
  categories: { label: string; id: number }[]
  className?: string
}

export default function Categories({ header, categories, className }: IProps) {
  const [selectedCategory, setSelectedCategory] = useAtom(selectedCategoryAtom)

  return (
    <div className={clsx(styles.container, className)}>
      {header && <div className={styles.header}>{header}</div>}
      <div className={styles.categories}>
        {categories.map((category) => {
          return (
            <div
              onClick={() => setSelectedCategory(category.id)}
              key={category.id}
              className={clsx(
                styles.category,
                selectedCategory === category.id && styles.selected
              )}
            >
              {category.label}
            </div>
          )
        })}
      </div>
    </div>
  )
}
