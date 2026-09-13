import useCartStore from '@/store/cart-store'
import { Trash2 } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import ProductQuantity from '../ProductQuantity'
import { Button } from '../ui/button'
import { ButtonGroup } from '../ui/button-group'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { toast } from '../ui/toast'

export default function CheckoutCard({ product }) {
    const [open, setOpen] = useState(false)
    const removeFromCart = useCartStore(state => state.removeFromCart)

    return (
        <div className='p-4 hover:bg-secondary rounded duration-300 h-40'>
            <div className='h-full flex gap-2 justify-between'>
                <div className='flex-2 flex justify-center items-center bg-secondary rounded-xl p-4'>
                    <img className="h-20" src={product.image} />
                </div>
                <div className='flex-5 ml-4'>
                    <Link href={`/products/${product.id}`}>
                        <h2 className='text-xl font-bold'>
                            {product.title}
                        </h2>
                    </Link>
                </div>
                <div className='flex-3 flex flex-col justify-between items-end'>
                    <span className='text-xl font-bold'>${product.price}</span>
                    <div className='flex justify-center items-center gap-2'>
                        <Popover open={open} onOpenChange={setOpen}>
                            <PopoverTrigger render={<Button variant="outline" size="icon" className='cursor-pointer'><Trash2 /></Button>} />
                            <PopoverContent className="w-40" align='center'>
                                <div className="grid gap-4">
                                    <div>
                                        <h3 className="leading-none text-xl">are you sure ?</h3>
                                    </div>
                                    <div>
                                        <ButtonGroup>
                                            <Button onClick={() => {
                                                removeFromCart(product, true)
                                                setOpen(false)
                                                toast.add({
                                                    type: 'error',
                                                    description:'product deleted successfully from cart'
                                                })
                                            }} variant='destructive'>Delete</Button>
                                            <Button onClick={() => setOpen(false)} variant='outline'>Cancel</Button>
                                        </ButtonGroup>
                                    </div>
                                </div>
                            </PopoverContent>
                        </Popover>
                        <ProductQuantity product={product} />
                    </div>
                </div>
            </div>
        </div >
    )
}
