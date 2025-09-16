import Announcement from "@/composite/Announcement"
import styles from "./page.module.css"
import Hero from "@/composite/Hero"

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Hero />
        <Announcement />
      </main>
    </div>
  )
}
