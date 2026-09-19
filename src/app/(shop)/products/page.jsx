import ProductCard from "@/components/products/ProductCard";
import ProductsFilter from "@/components/products/ProductsFilter";

export async function generateMetadata({ searchParams }) {
  const { category } = await searchParams
  return {
    title: category ? `Dara | ${category} Products` : 'Dara | Products',
    description: "Data Product Page",
  }
}

export default async function Products({ searchParams }) {
  const { category } = await searchParams


  const res = await fetch('https://fakestoreapi.com/products', {
    next: {
      revalidate: 5
    }
  })
  const productsData = await res.json()
  const products = category ? productsData.filter(item => item.category == category) : productsData

  return <section className="flex">
    <ProductsFilter products={productsData} />
    <div className="flex-10 flex justify-center gap-4 p-8 flex-wrap">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  </section>
}
