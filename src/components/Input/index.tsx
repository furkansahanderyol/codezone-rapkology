"use client"

import { ChangeEvent, useRef, useState } from "react"
import styles from "./index.module.scss"
import clsx from "clsx"

interface IProps {
  onChange?: (value: string) => void
  placeholder?: string
  prefix?: React.ReactNode
  suffix?: React.ReactNode
  className?: string
}

export default function Input({
  onChange,
  placeholder,
  prefix,
  suffix,
  className,
}: IProps) {
  const inputRef = useRef<HTMLInputElement | null>(null)
  const [focus, setFocus] = useState(false)

  function handleOnChange(event: ChangeEvent<HTMLInputElement>) {
    return onChange?.(event.target.value)
  }

  return (
    <div
      onClick={() => inputRef.current?.focus()}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
      className={clsx(styles.container, focus && styles.focused, className)}
    >
      {prefix && <div className={styles.prefix}>{prefix}</div>}
      <input
        ref={inputRef}
        onChange={handleOnChange}
        placeholder={placeholder}
        className={styles.input}
      ></input>
      {suffix && <div className={styles.suffix}>{suffix}</div>}
    </div>
  )
}
