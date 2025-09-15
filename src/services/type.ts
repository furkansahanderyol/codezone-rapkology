interface SEO {
  metaTitle: string
  canonicalURL: string
  metaDescription: string
}

interface Attributes {
  trends: boolean
  category: string[]
  tags: string[]
  authors: string[]
  title: string
  slug: string
  content: string
  seo: SEO
  desc: string
  img: string
}

export interface PostData {
  type: string
  attributes: Attributes
  createdAt: string
  updatedAt: string
  _id: string
}

export type PostListResponse = PostData[]
