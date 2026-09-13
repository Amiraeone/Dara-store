import Image from 'next/image'
import Link from 'next/link'
import DeleteProduct from '../DeleteProduct'
import ProductQuantity from '../ProductQuantity'

export default function CheckoutCard({ product }) {
    return (
        <div className='p-4 hover:bg-secondary rounded duration-300 h-40'>
            <div className='h-full flex gap-2 justify-between'>
                <div className='flex-2 flex justify-center items-center bg-secondary rounded-xl p-4'>
                    <div className='relative h-20 w-full'>
                        <Image alt={product.title} className='object-contain' sizes='1' fill src={product.image} />
                    </div>
                </div>
                <div className='flex-5 ml-4'>
                    <Link href={`/products/${product.id}`}>
                        <h2 className='text-xl font-bold'>
                            {product.title}
                        </h2>
                    </Link>
                </div>
                <div className='flex-3 flex flex-col justify-between items-end'>
                    <span className='text-xl font-bold'>${product.price}</span>
                    <div className='flex justify-center items-center gap-2'>
                        <DeleteProduct product={product}/>
                        <ProductQuantity product={product} />
                    </div>
                </div>
            </div>
        </div >
    )
}
