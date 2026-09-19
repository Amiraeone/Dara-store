import Link from 'next/link'
import React from 'react'

export default function Footer() {
    return (
        <footer className='z-50 bg-white shadow border-t-2 space-y-4'>
            <div className='flex max-md:flex-col px-8 py-4'>
                <div className='md:w-1/3 p-4'>
                    <h2 className='text-3xl font-bold'>Dara</h2>
                    <p className='space-y-4 mt-4 pr-2 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, quae unde.</p>
                </div>
                <nav className='md:w-1/3 p-4'>
                    <h3 className='text-2xl font-bold'>navigate</h3>
                    <ul className='space-y-4 mt-4'>
                        <li><Link href={'/'} className='text-lg'>Home</Link></li>
                        <li><Link href={'/products'} className='text-lg'>Products</Link></li>
                        <li><Link href={'/blogs'} className='text-lg'>Blogs</Link></li>
                    </ul>
                </nav>
                <div className='md:w-1/3 p-4'>
                    <h3 className='text-2xl font-bold'>trend blogs</h3>
                    <ul className='space-y-4 mt-4 *:text-lg'>
                        <li><Link href='/blogs/1' className='text-lg'>sunt aut facere repellat provident...</Link></li>
                        <li><Link href='/blogs/2' className='text-lg'>qui est esse</Link></li>
                        <li><Link href='/blogs/3' className='text-lg'>ea molestias quasi exercitat..</Link></li>
                    </ul>
                </div>
            </div>
            <hr />
            <div className='text-lg text-center mx-auto my-4'>created by ❤️</div>
        </footer>
    )
}
