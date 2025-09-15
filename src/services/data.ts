import { Store } from "@/provider"
import { loadingAtom } from "@/stores"
import { PostListResponse } from "./type"

export namespace DataService {
  export async function getData(): Promise<PostListResponse | undefined> {
    try {
      const response = await fetch(
        "https://dummyjson.com/c/a7c4-016a-47aa-8241"
      )

      if (response.status === 200) {
        return response.json()
      }
    } catch (error) {
      console.error("DataService - getData -> ", error)
      throw error
    }
  }
}
