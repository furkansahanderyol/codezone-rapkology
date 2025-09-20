"use client"

import { DataService } from "@/services/data"
import { dataAtom } from "@/stores"
import { useAtom } from "jotai"
import { useEffect } from "react"

export default function DataLoader() {
  const [, setData] = useAtom(dataAtom)

  useEffect(() => {
    const getData = async () => {
      DataService.getData().then((response) => setData(response))
    }

    getData()
  }, [setData])

  return null
}
