"use client"

import Input from "@/components/Input"
import styles from "./index.module.scss"
import { IconArrowRight } from "@/assets/IconArrowRight"
import { FormEvent } from "react"
import Link from "next/link"
import clsx from "clsx"
import { IconRapkologyLogo } from "@/assets/IconRapkologyLogo"

interface IProps {
  configuration: "footer" | "body"
  header: string
  socialLinks: { logo: React.ReactNode; link: string }[]
}

export default function ContactForm({
  configuration,
  header,
  socialLinks,
}: IProps) {
  function handleSubmit(e: FormEvent) {
    e.preventDefault()
  }

  return (
    <form
      className={clsx(
        styles.container,
        configuration === "footer" && styles.footerContainer
      )}
    >
      <div className={styles.inputWrapper}>
        {configuration === "footer" && (
          <div className={styles.logo}>
            <IconRapkologyLogo width={249} height={62} />
          </div>
        )}
        <div className={styles.header}>{header}</div>
        <Input
          placeholder={"Email"}
          suffix={
            <button
              type="submit"
              onSubmit={handleSubmit}
              className={styles.sendButton}
            >
              Gönder
              <IconArrowRight />
            </button>
          }
        />
      </div>
      <div className={styles.socials}>
        <div className={styles.linksWrapper}>
          <div className={styles.socialLinks}>
            {socialLinks.map((link, index) => {
              return (
                <Link key={index} href={link.link} className={styles.link}>
                  {link.logo}
                </Link>
              )
            })}
          </div>
          <div className={styles.otherUrls}>
            <div className={styles.firstLine}>
              <Link href={"#"}>Haberler</Link>
              <Link href={"#"}>Etkinlikler</Link>
            </div>
            <div className={styles.secondLine}>
              <Link href={"#"}>Müzikler</Link>
              <Link href={"#"}>Videolar</Link>
              <Link href={"#"}>İletişim</Link>
            </div>
          </div>
        </div>

        <div className={styles.copyright}>
          © RAPKOLOGY All Rights Are Reserved 2022.
        </div>
      </div>
    </form>
  )
}
