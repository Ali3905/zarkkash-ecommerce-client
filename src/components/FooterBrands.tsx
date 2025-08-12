"use client"
import { useRouter } from "next/navigation"

const Brands = () => {
    const router = useRouter()
    return (
        <div className='flex flex-col gap-2'>
            <h3 className='font-semibold text-[20px] uppercase'>Brands</h3>
            <p onClick={() => router.push(`/products?q=rolex`)} className='text-md cursor-pointer hover:text-blue-400'>Rolex</p>
            <p onClick={() => router.push(`/products?q=ap`)} className='text-md cursor-pointer hover:text-blue-400'>Audemars Piguet</p>
            <p onClick={() => router.push(`/products?q=tissot`)} className='text-md cursor-pointer hover:text-blue-400'>Tissot</p>
            <p onClick={() => router.push(`/products?q=hublot`)} className='text-md cursor-pointer hover:text-blue-400'>Patek Phillips</p>
            <p onClick={() => router.push(`/products?q=aura`)} className='text-md cursor-pointer hover:text-blue-400'>Arabic Aura</p>
        </div>
    )
}
export default Brands