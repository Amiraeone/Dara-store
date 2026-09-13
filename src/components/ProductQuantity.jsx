import useCartStore from "@/store/cart-store"

export default function ProductQuantity({ product }) {
    const removeFromCart = useCartStore(state => state.removeFromCart)
    const addToCart = useCartStore(state => state.addToCart)

    return <div className='flex justify-center items-center gap-3 py-1 px-2 shadow rounded-lg'>
        <button className='text-lg font-bold' onClick={() => addToCart(product)}>+</button>
        <span>{product.quantity}</span>
        <button className='text-lg font-bold' disabled={product.quantity == 1} onClick={() => removeFromCart(product)}>-</button>
    </div>
}
