export const AUTH_TOKEN_KEY = "rahmah_admin_token"

// Save token in cookies (for middleware)
export function setAuthToken(token: string): void {
  if (typeof window === "undefined") return
  // Cookie expires in 1 hour
  document.cookie = `${AUTH_TOKEN_KEY}=${token}; path=/; max-age=3600; secure; samesite=lax`
}

// Get token from cookies (for client-side checks)
export function getAuthToken(): string | null {
  if (typeof window === "undefined") return null
  const match = document.cookie.match(new RegExp('(^| )' + AUTH_TOKEN_KEY + '=([^;]+)'))
  return match ? match[2] : null
}

// Remove token from cookies
export function removeAuthToken(): void {
  if (typeof window === "undefined") return
  document.cookie = `${AUTH_TOKEN_KEY}=; path=/; max-age=0`
}

// Client-side helper
export function isAuthenticated(): boolean {
  return !!getAuthToken()
}

// Keep API base URL as is
export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "https://rahmah-exchange-backend-production.up.railway.app"
