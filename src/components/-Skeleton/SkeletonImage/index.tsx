import clsx from "clsx"
import styles from "./index.module.scss"
import { useAtom } from "jotai"
import { loadingAtom } from "@/stores"

interface IProps {
  width?: number
  height: number
  radius: number
  className?: string
  children: React.ReactNode
}

export default function SkeletonImage({
  width,
  height,
  radius,
  className,
  children,
}: IProps) {
  const [loader] = useAtom(loadingAtom)

  return (
    <div className={clsx(styles.container, className)}>
      {loader ? (
        <div
          style={{
            width: `${width}px`,
            height: `${height}px`,
            borderRadius: `${radius}px`,
          }}
          className={styles.skeletonWrapper}
        >
          <div className={styles.skeletonLine} />
        </div>
      ) : (
        children
      )}
    </div>
  )
}
