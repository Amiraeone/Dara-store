import { Trash2 } from 'lucide-react'
import { Button } from '../ui/button'
import { PopoverContent, Popover, PopoverTrigger } from '../ui/popover'
import { useState } from 'react'
import { ButtonGroup } from '../ui/button-group'
import useCartStore from '@/store/cart-store'

export default function CheckoutCard({ product }) {
    const [open, setOpen] = useState(false)
    const removeFromCart = useCartStore(state => state.removeFromCart)

    return (
        <div className='p-4 hover:bg-secondary rounded'>
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
                <div className='flex flex-col justify-between items-end'>
                    <span className='text-xl font-bold'>${product.price}</span>
                    <Popover open={open} onOpenChange={setOpen}>
                        <PopoverTrigger render={<Button variant="outline" size="icon" className='cursor-pointer h-8 w-8 flex justify-center items-center hover:bg-secondary shadow rounded-lg text-center'><Trash2 /></Button>} />
                        <PopoverContent className="w-40" align='center'>
                            <div className="grid gap-4">
                                <div>
                                    <h3 className="leading-none text-xl">are you sure ?</h3>
                                </div>
                                <div>
                                    <ButtonGroup>
                                        <Button onClick={() => {
                                            removeFromCart(product.id)
                                            setOpen(false)
                                        }} variant='destructive'>Delete</Button>
                                        <Button onClick={() => setOpen(false)} variant='outline'>Cancel</Button>
                                    </ButtonGroup>
                                </div>
                            </div>
                        </PopoverContent>
                    </Popover>
                </div>
            </div>
        </div >
    )
}
