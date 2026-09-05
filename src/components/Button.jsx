'use client'
import useCartStore from '@/store/cart-store'

export default function Button({ product, children }) {
    const addToCart = useCartStore(s => s.addToCart)
    const loading = useCartStore(s => s.loading)
    const cart = useCartStore(s => s.cart)
    console.log(product);
    console.log(cart);
    

    return <button disabled={loading} onClick={() => addToCart(product)} className='px-4 py-2 bg-blue-700 rounded-lg text-white hover:bg-blue-700/90 cursor-pointer'>
        {loading ? 'Loading...' : children}
    </button>
}
