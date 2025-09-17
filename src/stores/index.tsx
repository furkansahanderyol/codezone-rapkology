import { PostListResponse } from "@/services/type"
import { atom } from "jotai"

// global
export const dataAtom = atom<PostListResponse | undefined>(undefined)
export const loadingAtom = atom<boolean>(false)

// category
export const selectedCategoryAtom = atom<number>(0)
