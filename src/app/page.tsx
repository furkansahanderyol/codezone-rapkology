import styles from "./page.module.css"

export default function Home() {
  return (
    <div
      style={{
        height: "400vh",
      }}
      className={styles.page}
    >
      <main className={styles.main}></main>
    </div>
  )
}
