'use client'

import CheckoutCard from '@/components/card/CheckoutCard'
import Empty from '@/components/Empty'
import useCartStore from '@/store/cart-store'

export default function Checkout() {
  const cart = useCartStore(s => s.cart)
  const cartItemsPrice = cart.map(item => ({ ...item, totalPrice: item.price * item.quantity, discount: item.quantity > 3 ? 10 : 0 }))
  const totalPrice = cartItemsPrice.reduce((sum, current) => sum + (current.totalPrice - ((current.totalPrice / 100) * current.discount)), 0).toFixed(2)

  if (cart.length === 0) {
    return (
      <Empty />
    )
  }

  return (
    <section className='w-full flex justify-around p-8'>
      <div className='flex justify-between gap-8 w-3/4 relative'>
        <div className='flex-8'>
          <h2 className='text-xl font-bold'>Cart</h2>
          <hr className='my-4' />
          {cart.map((product) => (
            <CheckoutCard key={product.id} product={product} />
          ))}
        </div>
        <div className='flex-4 w-96 h-fit sticky top-26 bg-secondary rounded-2xl px-8 py-4 space-y-4'>
          <h2 className='text-xl font-bold'>Payment Ditails</h2>
          <hr />
          <div className='flex flex-col gap-4 mt-2'>
            <div className='flex justify-between'>
              <span className='text-md'>Total Products Price ({cart.length} product)</span>
              <span className='text-md'>${totalPrice}</span>
            </div>
            {cartItemsPrice.map(product => (
              <div key={product.id}>
                <div className='flex justify-between gap-2'>
                  <span className='text-md'>{product.title} ({product.quantity} item)</span>
                  <span className='text-md'>${(product.totalPrice).toFixed(2)}</span>
                </div>
                {product.discount > 0 && (
                  <div className='flex justify-between'>
                    <span className='text-xs'>discount: %{product.discount} ({((product.totalPrice / 100) * product.discount).toFixed(2)})</span>
                    <span className='text-xs'>${(product.totalPrice - ((product.totalPrice / 100) * product.discount)).toFixed(2)}</span>
                  </div>
                )}
              </div>
            ))
            }
            <div className='flex justify-between'>
              <span className='text-lg font-bold'>Total Cart Price</span>
              <span className='text-lg font-bold'>${totalPrice}</span>
            </div>
            <button className='px-4 py-2 bg-blue-700 rounded-lg text-white hover:bg-blue-700/90 cursor-pointer'>Payment</button>
          </div>
        </div>
      </div>
    </section>
  )
}
