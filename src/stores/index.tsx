import { PostListResponse } from "@/services/type"
import { atom } from "jotai"
import type { Swiper, Swiper as SwiperClass } from "swiper"
// global
export const dataAtom = atom<PostListResponse | undefined>(undefined)
export const loadingAtom = atom<boolean>(false)

// category
export const selectedCategoryAtom = atom<number>(0)
