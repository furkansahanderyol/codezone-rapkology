"use client"

import styles from "./index.module.scss"
import Link from "next/link"
import { IconLogo } from "@/assets/IconLogo"
import { IconSearch } from "@/assets/IconSearch"
import { useAtom } from "jotai"
import { showMenuAtom } from "@/stores"
import clsx from "clsx"
import { NAVIGATION_VALUES } from "@/constants/navigationValues"

export default function Navbar() {
  const [showMenu, setShowMenu] = useAtom(showMenuAtom)

  return (
    <header className={styles.container}>
      <div className={styles.leftSide}>
        <Link href={"/"} className={styles.logo}>
          <IconLogo width={235} height={59} />
        </Link>
        <nav className={styles.navWrapper}>
          <ul className={styles.navList}>
            {NAVIGATION_VALUES.map((value, index) => {
              return (
                <li key={index} className={styles.navListItem}>
                  <Link href={value.link}>{value.label}</Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
      <div className={styles.rightSide}>
        <div
          onClick={() => {
            return showMenu ? setShowMenu(false) : setShowMenu(true)
          }}
          className={clsx(styles.menu, showMenu && styles.active)}
        />
        <div className={styles.search}>
          <IconSearch width={23} height={22} />
        </div>
        <Link href={"#"} className={styles.login}>
          Giriş Yap
        </Link>
      </div>
    </header>
  )
}
