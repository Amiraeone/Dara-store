import Link from 'next/link'
import React from 'react'

export default function Footer() {
    return (
        <footer className='z-50 bg-white shadow border-t-2 space-y-4'>
            <div className='flex px-8 py-4'>
                <div className='w-1/3 p-4 flex'>
                    <h2 className='text-2xl font-bold'>Dara</h2>
                    <p className='p-2 mt-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, quae unde.</p>
                </div>
                <nav className='w-1/3 p-4 flex'>
                    <h3 className='text-xl font-bold'>navigate</h3>
                    <ul className='p-2 mt-8 list-disc   '>
                        <li><Link href={'/'} className='hover:text-blue-600'>Home</Link></li>
                        <li><Link href={'/products'} className='hover:text-blue-600'>Products</Link></li>
                        <li><Link href={'/blogs'} className='hover:text-blue-600'>Blogs</Link></li>
                    </ul>
                </nav>
                <div className='w-1/3 p-4 flex'>
                    <h3 className='text-xl font-bold'>trend blogs</h3>
                    <ul className='p-2 mt-8 list-disc'>
                        <li>firt blog</li>
                        <li>second blog</li>
                        <li>third blog</li>
                    </ul>
                </div>
            </div>
            <div className='text-xl text-center mx-auto my-4'>created by ❤️</div>
        </footer>
    )
}
