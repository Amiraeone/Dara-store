'use client'
import '@/app/globals.css'
import useCartStore from '@/store/cart-store'
import Link from 'next/link'
export default function Navbar() {
    const cart = useCartStore(s => s.cart)

    return (
        <nav className='sticky top-0 z-50 bg-white shadow'>
            <div className='container mx-auto flex items-center justify-between p-4'>
                <Link href={'/'} className='text-2xl'>Dara</Link>
                <menu className='max-md:hidden'>
                    <ul className='md:flex space-x-6'>
                        <li><Link href={'/'}>Home</Link></li>
                        <li><Link href={'/products'}>Products</Link></li>
                        <li><Link href={'/blogs'}>Blogs</Link></li>
                    </ul>
                </menu>
                <div className='flex items-center space-x-4 max-md:hidden'>
                    <Link href={'/checkout'}>
                        <button className='bg-red-800 relative rounded-lg text-white shadow px-4 py-2 cursor-pointer'>
                            Checkout 🛒
                            {cart.length > 0 && <div className='absolute -left-2 -top-2'>
                                <span className="relative flex size-3">
                                    <span className="absolute inline-flex size-3 p-2 animate-ping rounded-full bg-red-600 opacity-75"></span>
                                    <span className="relative size-3.5 rounded-full p-2 flex justify-center items-center bg-red-900">{cart.length}</span>
                                </span>
                            </div>}
                        </button>
                    </Link>
                </div>
            </div>
        </nav>
    )
}
