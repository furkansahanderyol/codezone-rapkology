"use client"

import { useAtom } from "jotai"
import styles from "./index.module.scss"
import { showMenuAtom } from "@/stores"
import clsx from "clsx"
import Link from "next/link"
import { NAVIGATION_VALUES } from "@/constants/navigationValues"
import { useEffect, useState } from "react"
import SkewedButton from "@/components/SkewedButton"

export default function Menu() {
  const [showMenu] = useAtom(showMenuAtom)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    if (showMenu) {
      setIsAnimating(true)
    } else {
      // Menü kapanırken 300ms gecikme ile kaldır
      setTimeout(() => {
        setIsAnimating(false)
      }, 300) // 300ms, kapanış animasyonun süresi kadar olabilir
    }
  }, [showMenu])

  return (
    <div className={clsx(styles.container, isAnimating && styles.active)}>
      <div
        className={clsx(styles.menuBackground, showMenu && styles.active)}
      ></div>
      <nav className={clsx(styles.navWrapper, showMenu && styles.active)}>
        <ul className={clsx(styles.navList, showMenu && styles.active)}>
          {NAVIGATION_VALUES.map((value, index) => (
            <li key={index} className={styles.navListItem}>
              {index < NAVIGATION_VALUES.length - 1 ? (
                <Link href={value.link}>{value.label}</Link>
              ) : (
                <SkewedButton className={styles.contact}>İletişim</SkewedButton>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
