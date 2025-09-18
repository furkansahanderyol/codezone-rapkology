import BlogHero from "@/composite/BlogHero"
import styles from "./page.module.scss"

export default function BlogPage() {
  return (
    <div className={styles.container}>
      <BlogHero />
    </div>
  )
}
