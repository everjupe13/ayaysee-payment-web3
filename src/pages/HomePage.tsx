import '@solana/wallet-adapter-react-ui/styles.css'
import './HomePage.scss'

import { PaymentRequestType } from '@heliofi/common'
import { HelioPay } from '@heliofi/react'
import { ClusterType } from '@heliofi/sdk'
import { Cluster } from '@solana/web3.js'
import { FC, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

export const HomePage: FC = () => {
  const defaultPaymentRequestId = '64e777c9d32101104adf1d67'
  const [paymentRequestId] = useState<string>(defaultPaymentRequestId)
  const paymentType = 'PAYLINK' as PaymentRequestType
  const [cluster] = useState<Cluster>(ClusterType.Devnet)

  const [_isSuccess, _setIsSuccess] = useState<boolean>(false)

  const [searchParams, setSearchParams] = useSearchParams()
  console.log(searchParams)

  return (
    <>
      <div className="container flex min-h-[100vh] items-center justify-center">
        <div className="w-full max-w-[400px]">
          <HelioPay
            cluster={cluster}
            paymentRequestId={paymentRequestId}
            supportedCurrencies={['USDC']}
            paymentType={paymentType}
            totalAmount={0.01}
            onSuccess={function (event): void {
              console.log('onSuccess', event)
              _setIsSuccess(true)
            }}
            onError={function (event): void {
              console.log('onError', event)
              _setIsSuccess(false)
            }}
            onPending={function (event): void {
              console.log('onPending', event)
            }}
            onStartPayment={function (): void {
              console.log('onStartPayment')
            }}
          />
        </div>
      </div>
    </>
  )
}
