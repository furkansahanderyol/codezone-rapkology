"use client"

import { DataService } from "@/services/data"
import { dataAtom, loadingAtom } from "@/stores"
import { useAtom } from "jotai"
import { useEffect } from "react"

export default function DataLoader() {
  const [, setData] = useAtom(dataAtom)
  const [, setLoader] = useAtom(loadingAtom)

  useEffect(() => {
    setLoader(true)

    const getData = async () => {
      DataService.getData()
        .then((response) => setData(response))
        .finally(() => {
          setLoader(false)
        })
    }

    getData()
  }, [setData, setLoader])

  return null
}
