'use client'
import { useRouter, useSearchParams } from 'next/navigation'
import { ToggleGroup, ToggleGroupItem } from '../ui/toggle-group'

export default function ProductsFilter({ products }) {
    const categorysData = products.map(item => item.category)
    const categoryFilters = [...new Set(categorysData)]
    const router = useRouter()
    const searchParams = useSearchParams()
    const currentCategory = searchParams.get('category')

    function toggleHandler(categoryParams) {
        if (categoryParams) {
            router.replace(`/products?category=${categoryParams}`)
        }
    }

    return (
        <aside className='h-screen flex flex-3 flex-col gap-4 p-4 border-r-2 sticky top-20'>
            <h2 className='font-bold text-2xl'>Filters</h2>
            <div className='flex gap-2'>
                <div className='space-y-4'>
                    <h2 className='font-bold text-xl'>Categorys</h2>
                    <ToggleGroup className='flex flex-wrap' onValueChange={toggleHandler} variant="outline" value={[currentCategory] || []}>
                        {categoryFilters.map((item, index) => (
                            <ToggleGroupItem key={index} value={item} >
                                {item}
                            </ToggleGroupItem>
                        ))}
                    </ToggleGroup>
                </div>
            </div>
        </aside>
    )
}
