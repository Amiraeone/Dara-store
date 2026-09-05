'use client'

import CheckoutCard from '@/components/card/CheckoutCard'
import useCartStore from '@/store/cart-store'
import { PackageOpen } from 'lucide-react'

export default function Checkout() {
  const cart = useCartStore(s => s.cart)

  if (cart.length === 0) {
    return (
      <section className='w-full h-80 flex justify-center items-center'>
        <div className='flex flex-col justify-center items-center w-2/4 h-2/4 py-8 px-12 bg-secondary rounded-xl shadow'>
          <PackageOpen className='text-gray-500 w-11 h-11' />
          <h2 className='text-lg text-gray-500 font-bold'>
            there is no item
          </h2>
        </div>
      </section>
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
              <span className='text-md'>${cart.reduce((sum, current) => sum + current.price, 0)}</span>
            </div>
            <div className='flex justify-between'>
              <span className='text-lg font-bold'>Total Cart Price</span>
              <span className='text-lg font-bold'>${cart.reduce((sum, current) => sum + current.price, 0)}</span>
            </div>
            <button className='px-4 py-2 bg-blue-700 rounded-lg text-white hover:bg-blue-700/90 cursor-pointer'>Payment</button>
          </div>
        </div>
      </div>
    </section>
  )
}
