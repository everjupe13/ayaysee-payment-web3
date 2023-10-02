import { FC, ReactNode } from 'react'

// import { AppFooter } from '@/components/widgets/AppFooter/AppFooter'
// import { AppHeader } from '@/components/widgets/AppHeader/AppHeader'

interface ILayoutProps {
  children?: ReactNode
}

const Layout: FC<ILayoutProps> = ({ children }) => {
  return <>{children}</>
}

export { Layout }
