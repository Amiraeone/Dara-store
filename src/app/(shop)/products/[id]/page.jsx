import AddToCart from '@/components/AddToCart'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator
} from "@/components/ui/breadcrumb"

export default async function page({ params }) {
    const { id } = await params

    const res = await fetch(`https://fakestoreapi.com/products/${id}`)
    const product = await res.json()

    return (
        <section className='px-8 py-4 flex justify-between'>
            <div className='flex-3 flex justify-center items-center bg-secondary rounded-xl p-4'>
                <img className='h-80' src={product.image} />
            </div>
            <div className='flex-4 p-4 space-y-2'>
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink render={<a href="/products" />}>Product</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbLink render={<a href={`/products?category=${product.category}`} />}>
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
