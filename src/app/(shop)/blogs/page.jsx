import ArticleCard from "@/components/card/ArticleCard";

export const metadata = {
  title: "Dara | Blog",
  description: "Dara Blog Page",
};

export default async function Blogs() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await res.json()

  return (
    <section className="w-full">
      <div className="container flex p-4 gap-4 justify-center items-start flex-wrap">
        {posts.map(post => (
          <ArticleCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  )
}
