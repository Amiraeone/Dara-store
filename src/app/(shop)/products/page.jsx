import ProductCard from "@/components/card/ProductCard";

export const metadata = {
  title: "Dara | Products",
  description: "Data Product Page",
};

export default async function Products() {
  const res = await fetch('https://fakestoreapi.com/products' , {
    next: {
      revalidate: 5
    }
  })
  const products = await res.json()

  return (
    <div>
      <section className="flex gap-4 p-8 flex-wrap">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </div>
  )
}
