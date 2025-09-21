import { PostListResponse } from "@/services/type"
import { atom } from "jotai"

// global
export const dataAtom = atom<PostListResponse | undefined>(undefined)
export const loadingAtom = atom<boolean>(true)

// category
export const selectedCategoryAtom = atom<number>(0)

// menu
export const showMenuAtom = atom(false)

// gridElementCounts
export const homepageVisibleTrendsAtom = atom(6)
export const homepageVisibleExploreAtom = atom(4)
export const blogPageVisibleExploreAtom = atom(8)
export const blogPostVisibleTrendsAtom = atom(6)

// options
export const viewOptionAtom = atom<"grid" | "list">()
