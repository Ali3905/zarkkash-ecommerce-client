// utils/checkAdminAuthClient.ts
'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import axios from 'axios'

export function useCheckAdminAuthClient() {
    const router = useRouter()
    const [admin, setAdmin] = useState<boolean | null>(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const verify = async () => {
            try {
                const res = await axios.get(`${process.env.NEXT_PUBLIC_HOST_URL}/auth/check`, {
                    method: 'get',
                    withCredentials: true,

                })

                if (!res.data.success || res.data.data?.role !== 'admin') {
                    router.replace('/admin/login')
                    return
                }
                setAdmin(true)
            } catch (err) {
                console.log({ err })
                router.replace('/admin/login')
            } finally {
                setIsLoading(false)
            }
        }

        verify()
    }, [router])

    return { admin, isLoading }
}
