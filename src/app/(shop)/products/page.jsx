import ProductCard from "@/components/card/ProductCard";

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
  const products = await res.json()
  const categoryProducts = category && products.filter(item => item.category === category)

  return <section className="flex gap-4 p-8 flex-wrap">
    {category ? categoryProducts.map(product => (
      <ProductCard key={product.id} product={product} />
    )) : products.map(product => (
      <ProductCard key={product.id} product={product} />
    ))}
  </section>
}
