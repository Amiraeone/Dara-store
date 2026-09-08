'use client'

import { Spinner } from "@/components/ui/spinner"
import useCartStore from '@/store/cart-store'
import ProductQuantity from "./ProductQuantity"

export default function AddToCart({ product, children }) {
    const cart = useCartStore(s => s.cart)
    const existInCart = cart.find(item => item.id == product.id)
    const addToCart = useCartStore(s => s.addToCart)
    const loading = useCartStore(s => s.loading)


    return <>
        {!existInCart ? <button disabled={loading} onClick={() => addToCart(product)} className='px-4 py-2 bg-blue-700 rounded-lg text-white hover:bg-blue-700/90 cursor-pointer'>
            {loading ? <Spinner data-icon="inline-start" /> : children}
        </button>
            : <div className="flex justify-between items-center gap-2">
                <span className="text-gray-400 text-xs">this product already exist in your cart</span>
                <ProductQuantity product={existInCart} />
            </div>
        }
    </>
}
