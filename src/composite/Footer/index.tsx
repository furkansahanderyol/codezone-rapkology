import ContactForm from "@/components/ContactForm"
import styles from "./index.module.scss"
import { SOCIAL_LINKS } from "@/constants/socialLinks"

export default function Footer() {
  return (
    <div className={styles.container}>
      <ContactForm
        configuration={"footer"}
        socialLinks={SOCIAL_LINKS}
        header="Gelişmelerden İlk Sen Haberdar Ol!"
      />
    </div>
  )
}
