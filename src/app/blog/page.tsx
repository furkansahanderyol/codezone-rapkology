import BlogHero from "@/composite/BlogHero"
import styles from "./page.module.scss"
import BlogExplore from "@/composite/BlogExplore"

export default function BlogPage() {
  return (
    <div className={styles.container}>
      <BlogHero />
      <BlogExplore />
    </div>
  )
}
