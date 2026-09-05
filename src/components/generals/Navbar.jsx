import Link from 'next/link'

export default function Navbar() {
    return (
        <nav className='sticky top-0 z-50 bg-white shadow'>
            <div className='container mx-auto flex items-center justify-between p-4'>
                <Link href={'/'} className='text-2xl'>Dara</Link>
                <menu>
                    <ul className='md:flex space-x-6'>
                        <li><Link href={'/'} className='hover:text-blue-600'>Home</Link></li>
                        <li><Link href={'/products'} className='hover:text-blue-600'>Products</Link></li>
                        <li><Link href={'/blogs'} className='hover:text-blue-600'>Blogs</Link></li>
                    </ul>
                </menu>
                <div className='flex items-center space-x-4'>
                    <Link href={'/checkout'}>
                        <button className='bg-blue-700 rounded-lg text-white shadow px-4 py-2 cursor-pointer'>
                            Checkout 🛒
                        </button>
                    </Link>
                </div>
            </div>
        </nav>
    )
}
