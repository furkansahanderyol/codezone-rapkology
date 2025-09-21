import clsx from "clsx"
import styles from "./index.module.scss"
import { useAtom } from "jotai"
import { loadingAtom } from "@/stores"

interface IProps {
  width?: number
  height?: number
  children: React.ReactNode
  className?: string
  count: number
}

export default function SkeletonLine({
  width,
  height,
  children,
  className,
  count,
}: IProps) {
  const [loader] = useAtom(loadingAtom)
  const arrayList = new Array(count).fill(0)

  return (
    <div className={clsx(styles.container, className)}>
      {loader ? (
        <div className={styles.skeletonList}>
          {arrayList?.map((_, index) => (
            <div key={index} className={styles.skeletonWrapper}>
              <div
                style={{ width: `${width}px`, height: `${height}px` }}
                className={styles.skeletonLine}
              />
            </div>
          ))}
        </div>
      ) : (
        children
      )}
    </div>
  )
}
