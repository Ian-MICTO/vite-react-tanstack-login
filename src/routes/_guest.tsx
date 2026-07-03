import { useIsAuthenticated } from '@/features/auth/hooks/use-auth'
import AuthLayout from '@/layouts/auth-layout'
import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/_guest')({
  beforeLoad: () => {
    if (useIsAuthenticated()) {
      throw redirect({ to: '/dashboard' })
    }
  },
  component: AuthLayout,
})