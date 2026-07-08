import { useIsAuthenticated } from '@/features/auth/hooks/use-auth'
import MainLayout from '@/layouts/main-layout'
import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated')({
  beforeLoad: () => {
    if (!useIsAuthenticated()) {
      throw redirect({ to: '/login' })
    }
  },
  component: MainLayout,
})

// function RouteComponent() {
//   return <div>Hello "/_authenticated"!</div>
// }
