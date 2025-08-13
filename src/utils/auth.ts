// utils/checkAdminAuth.ts
import { redirect } from 'next/navigation'

export async function checkAdminAuth() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST_URL}/api/auth/check`, {
      method: 'GET',
      credentials: 'include', // important for sending cookies
      cache: 'no-store', // avoid caching stale results
    })

    if (!res.ok) {
      redirect('/admin/login')
    }

    const data = await res.json()
    if (!data.success || data.user?.role !== 'admin') {
      redirect('/admin/login')
    }

    return data.user // so you can use decoded user data in the page
  } catch {
    redirect('/admin/login')
  }
}

