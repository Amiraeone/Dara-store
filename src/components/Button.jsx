'use client'

import useCartStore from '@/store/cart-store'
import { Spinner } from "@/components/ui/spinner"

export default function Button({ product, children }) {
    const addToCart = useCartStore(s => s.addToCart)
    const loading = useCartStore(s => s.loading)

    return <button disabled={loading} onClick={() => addToCart(product)} className='px-4 py-2 bg-blue-700 rounded-lg text-white hover:bg-blue-700/90 cursor-pointer'>
        {loading ? <Spinner data-icon="inline-start" /> : children}
    </button>
}
