"use client"

import { IconEye } from "@/assets/IconEye"
import styles from "./index.module.scss"
import Link from "next/link"
import { useState } from "react"
import clsx from "clsx"

export default function ShowPagination() {
  const [listVisible, setListVisible] = useState(false)

  return (
    <div className={styles.container}>
      <div className={clsx(styles.list, listVisible && styles.visible)}>
        <Link href={"/"}>Homapage</Link>
        <Link href={"/blog"}>Blog Page</Link>
        <Link href={"/blog/lark2020den-yeni-parca-olmemi-istemezsin-yayinda"}>
          Blogpost Page
        </Link>
      </div>
      <div onClick={() => setListVisible(!listVisible)} className={styles.eye}>
        <IconEye width={24} height={24} />
      </div>
    </div>
  )
}
