import React from 'react'

export default async function page({ params }) {
    const { id } = await params

    const res = await fetch(`https://fakestoreapi.com/products/${id}`)
    const product = await res.json()

    return (
        <>
            <section className='w-screen px-8 py-4 flex justify-between'>
                <div className='bg-secondary rounded-xl p-4 w-1/4'>
                    <img src={product.image} />
                </div>
                <div className='p-4 space-y-2 w-2/4'>
                    <h2 className='text-xl font-bold'>{product.title}</h2>
                    <p>{product.description}</p>
                </div>
                <div className='w-1/4'>
                    <div className='bg-secondary p-4 rounded-2xl shadow flex flex-col gap-4'>
                        <span className='font-bold'>⭐ {product.rating.rate}</span>
                        <hr />
                        <span className='font-bold text-xl'>${product.price}</span>
                        <button className='px-4 py-2 bg-blue-700 rounded-lg text-white hover:bg-blue-700/90 cursor-pointer'>Add To Cart</button>
                    </div>
                </div>
            </section>
        </>
    )
}
