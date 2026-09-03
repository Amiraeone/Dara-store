import CheckoutCard from '@/components/card/CheckoutCard'
import React from 'react'

export default async function Checkout() {
  const res = await fetch('https://fakestoreapi.com/products/4')
  const product = await res.json()
  return (
    <section className='w-full flex justify-around p-8'>
      <div className='flex justify-between gap-8'>
        <div>
          <h2 className='text-xl font-bold'>Cart</h2>
          <hr />
          <CheckoutCard product={product} />
        </div>
        <div className='w-90 relative bg-secondary rounded-2xl p-4 space-y-2'>
          <h2 className='text-xl font-bold'>Payment Ditails</h2>
          <hr />
          <div className='flex flex-col justify-end'>
            <div className='flex justify-between'>
              <span className='text-lg font-bold'>Total Price</span>
              <span className='text-lg'>$50000</span>
            </div>
            <button className='px-4 py-2 bg-blue-700 rounded-lg text-white hover:bg-blue-700/90 cursor-pointer'>Add To Cart</button>
          </div>
        </div>
      </div>
    </section>
  )
}
