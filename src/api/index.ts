import { useEffect, useState } from 'react'

import { SHARED_LOCALSTORAGE_KEYS } from '@/config'

import { http } from './http'

export const useOrderInfo = (transactionHash: string) => {
  const [order, setOrder] = useState()
  const token = localStorage.getItem(SHARED_LOCALSTORAGE_KEYS.TOKEN)

  useEffect(() => {
    const fetcher = async () => await http(`/order/${transactionHash}`)

    if (token) {
      fetcher()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { order, setOrder }
}
