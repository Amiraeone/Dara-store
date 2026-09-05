'use client'

import CheckoutCard from '@/components/card/CheckoutCard'
import useCartStore from '@/store/cart-store'

export default function Checkout() {
  const cart = useCartStore(s => s.cart)
  console.log(cart);
  
  return (
    <section className='w-full flex justify-around p-8'>
      <div className='flex justify-between gap-8'>
        <div>
          <h2 className='text-xl font-bold'>Cart</h2>
          <hr />
          {cart.map((product) => (
            <CheckoutCard key={product.id} product={product} />
          ))}
        </div>
        <div className='w-90 relative bg-secondary rounded-2xl p-4 space-y-2'>
          <h2 className='text-xl font-bold'>Payment Ditails</h2>
          <hr />
          <div className='flex flex-col justify-end'>
            <div className='flex justify-between'>
              <span className='text-lg font-bold'>Total Price</span>
              <span className='text-lg'>$50000</span>
            </div>
            <button className='px-4 py-2 bg-blue-700 rounded-lg text-white hover:bg-blue-700/90 cursor-pointer'>Payment</button>
          </div>
        </div>
      </div>
    </section>
  )
}
