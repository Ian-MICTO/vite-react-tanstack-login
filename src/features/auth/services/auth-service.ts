const AUTH_KEY = 'mock-auth';

// export function isAuthenticated(): boolean {
//     if (typeof window === 'undefined') {
//         return false;
//     }
//     return window.localStorage.getItem(AUTH_KEY) === 'true';
// }

// export function setAuthenticated(value: boolean): void {
//     if (typeof window === 'undefined') {
//         return
//     }
//     return window.localStorage.setItem(AUTH_KEY, value ? 'true' : 'false')
// }

// export function logout(): void {
//     if (typeof window === 'undefined') {
//         return
//     }
//     return window.localStorage.removeItem(AUTH_KEY)
// }

export const mockAuthService = {
    isAuthenticated: (): boolean => {
        if (typeof window === 'undefined') {
            return false
        }
        return window.localStorage.getItem(AUTH_KEY) === 'true';
    },

    setAuthenticated: (value: boolean): void => {
        if (typeof window === 'undefined') {
            return
        }
        return window.localStorage.setItem(AUTH_KEY, value ? 'true' : 'false')
    },

    logout: (): void => {
        if (typeof window === 'undefined') {
            return
        }
        return window.localStorage.removeItem(AUTH_KEY)
    }
}