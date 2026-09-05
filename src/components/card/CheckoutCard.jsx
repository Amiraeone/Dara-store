

export default function CheckoutCard({ product }) {
    return (
        <div className='py-4'>
            <div className='flex gap-4 justify-between'>
                <div className='flex gap-4'>
                    <div className='flex justify-center items-center bg-secondary rounded-xl p-4 w-1/4'>
                        <img className="w-20" src={product.image} />
                    </div>
                    <div>
                        <h2 className='text-xl font-bold'>
                            {product.title}
                        </h2>
                    </div>
                </div>
                <div className='flex flex-col justify-between'>
                    <span className='text-xl font-bold'>${product.price}</span>
                    <button className='h-8 w-8 flex justify-center items-center hover:scale-105 bg-secondary shadow rounded-lg text-center'>+</button>
                </div>
            </div>
        </div >
    )
}
