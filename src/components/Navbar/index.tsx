import styles from "./index.module.scss"
import Link from "next/link"
import { IconLogo } from "@/assets/IconLogo"
import { IconSearch } from "@/assets/IconSearch"

const NAVIGATION_VALUES = [
  {
    label: "Haberler",
    link: "#",
  },
  {
    label: "Etkinlikler",
    link: "#",
  },
  {
    label: "Müzikler",
    link: "#",
  },
  {
    label: "Videolar",
    link: "#",
  },
  {
    label: "İletişim",
    link: "#",
  },
]

export default function Navbar() {
  return (
    <header className={styles.container}>
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
      <div className={styles.rightSide}>
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
