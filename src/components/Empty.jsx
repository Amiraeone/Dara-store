import { PackageOpen } from 'lucide-react'

export default function Empty({ chiltern }) {
    return <section className='w-full h-80 flex justify-center items-center'>
        <div className='flex flex-col justify-center items-center w-2/4 h-2/4 py-8 px-12 bg-secondary rounded-xl shadow'>
            <PackageOpen className='text-gray-500 w-11 h-11' />
            <h2 className='text-lg text-gray-500 font-bold'>
                {chiltern || 'there is no item'}
            </h2>
        </div>
    </section>
}
