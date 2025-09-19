import ContactForm from "@/components/ContactForm"
import { SOCIAL_LINKS } from "@/constants/socialLinks"

export default function Footer() {
  return (
    <footer>
      <ContactForm
        configuration={"footer"}
        socialLinks={SOCIAL_LINKS}
        header="Gelişmelerden İlk Sen Haberdar Ol!"
      />
    </footer>
  )
}
