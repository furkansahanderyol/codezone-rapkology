import Announcement from "@/composite/Announcement"
import styles from "./page.module.css"
import Hero from "@/composite/Hero"
import Trends from "@/composite/Trends"
import Favorites from "@/composite/Favorites"
import Explore from "@/composite/Explore"

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Hero />
        <Announcement />
        <Trends />
        <Favorites />
        <Explore />
      </main>
    </div>
  )
}
