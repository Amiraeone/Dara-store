import AddToCart from '@/components/AddToCart'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator
} from "@/components/ui/breadcrumb"
import Image from 'next/image'
import Link from 'next/link'


export async function generateMetadata({ params }) {
    const { id } = await params

    const res = await fetch(`https://fakestoreapi.com/products/${id}`)
    const product = await res.json()

    return {
        title: product.title,
        description: "Data Product Page",
    }
}

export default async function page({ params }) {
    const { id } = await params

    const res = await fetch(`https://fakestoreapi.com/products/${id}`)
    const product = await res.json()

    return (
        <section className='px-8 py-4 flex justify-between'>
            <div className='flex-3 flex justify-center items-center bg-secondary rounded-xl p-4'>
                <div className='relative h-80 w-full'>
                    <Image fill sizes='1' alt={product.title} className='object-contain' src={product.image} />
                </div>
            </div>
            <div className='flex-4 p-4 space-y-2'>
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink render={<Link href="/products" />}>Product</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbLink render={<Link href={`/products?category=${product.category}`} />}>
                                {product.category}
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
                <h2 className='text-xl font-bold'>{product.title}</h2>
                <p>{product.description}</p>
            </div>
            <div className='flex-2'>
                <div className='bg-secondary p-4 rounded-2xl shadow flex flex-col gap-4'>
                    <span className='font-bold'>⭐ {product.rating.rate}</span>
                    <hr />
                    <span>buy more than three from this product to give %10 discount</span>
                    <span className='font-bold text-xl'>${product.price}</span>
                    <AddToCart product={product}>Add To Cart</AddToCart>
                </div>
            </div>
        </section>
    )
}
