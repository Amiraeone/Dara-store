import React from 'react'
import ArticleCard from '../card/ArticleCard'

export default async function ArticleSection() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=3', {
        next: {
            revalidate: 10
        }
    })
    const posts = await res.json()

    return (
        <section className="p-8 space-y-8">
            <h2 className="text-3xl font-bold text-center">Articles</h2>
            <div className="flex max-md:flex-col max-md:gap-4">
                {posts.map(post => (
                    <ArticleCard key={post.id} post={post} />
                ))}
            </div>
        </section>
    )
}
