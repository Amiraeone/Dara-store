import Link from 'next/link'

export default function ProductCard({ product }) {
    return (
        <div>
            <Link href={`/products/${product.id}`}>
                <div className='rounded-lg shadow overflow-hidden w-48 cursor-pointer hover:scale-105 transition'>
                    <div className='flex justify-center items-center p-4 w-full h-26'>
                        <img className='h-full' src={product.image} />
                    </div>
                    <div className='flex flex-col p-4 space-y-2 h-1/2'>
                        <h2 className='text-lg font-bold line-clamp-2 h-14'>{product.title}</h2>
                        <span>⭐ {product.rating.rate}</span>
                        <span className='text-lg font-bold'>
                            ${product.price}
                        </span>
                    </div>
                </div>
            </Link>
        </div>
    )
}
