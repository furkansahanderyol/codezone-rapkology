"use client"

import { IconEye } from "@/assets/IconEye"
import styles from "./index.module.scss"
import Link from "next/link"
import { useRef, useState } from "react"
import clsx from "clsx"
import { useOnClickOutside } from "@/hooks/useOnClickOutside"

export default function ShowPagination() {
  const paginationRef = useRef<HTMLDivElement | null>(null)
  const [listVisible, setListVisible] = useState(false)

  useOnClickOutside(paginationRef, () => {
    setListVisible(false)
  })

  return (
    <div
      ref={paginationRef}
      onClick={() => setListVisible(!listVisible)}
      className={clsx(styles.container, listVisible && styles.active)}
    >
      <div className={clsx(styles.list, listVisible && styles.visible)}>
        <Link href={"/"}>Homapage</Link>
        <Link href={"/blog"}>Blog Page</Link>
        <Link href={"/blog/lark2020den-yeni-parca-olmemi-istemezsin-yayinda"}>
          Blogpost Page
        </Link>
      </div>
      <div className={styles.eye}>
        <IconEye width={24} height={24} />
      </div>
    </div>
  )
}
