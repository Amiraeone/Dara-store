export const metadata = {
  title: "Dara | Products",
  description: "Data Product Page",
};

export default async function Products() {
  const res = await fetch('https://fakestoreapi.com/products')
  const products = res.json()

  return (
    <div>
      <section>
        {products.map(product => (
          <div></div>
        ))}
      </section>
    </div>
  )
}
