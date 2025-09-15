import { createStore, Provider } from "jotai"

interface IProps {
  children: React.ReactNode
}

export const Store = createStore()

export default function Providers({ children }: IProps) {
  return <Provider>{children}</Provider>
}
