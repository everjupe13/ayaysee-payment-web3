import { FC } from 'react'

export const ErrorPage: FC = () => {
  return (
    <div className="container flex min-h-[100vh] items-center justify-center">
      <div className="w-full max-w-[400px] text-center text-[24px] font-bold">
        Not Found
      </div>
    </div>
  )
}
