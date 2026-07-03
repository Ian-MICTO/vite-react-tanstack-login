import { mockAuthService } from "@/features/auth/services/auth-service"

export function useIsAuthenticated() {
    return mockAuthService.isAuthenticated()
}

export function useSetAuthenticated(value: boolean) {
    mockAuthService.setAuthenticated(value)
}

export function useLogout() {
    mockAuthService.logout()
}