import useCartStore from '@/store/cart-store'
import { Trash2 } from 'lucide-react'
import { useState } from 'react'
import { Button } from './ui/button'
import { ButtonGroup } from './ui/button-group'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'
import { toast } from './ui/toast'


export default function DeleteProduct({ product }) {
    const [open, setOpen] = useState(false)
    const removeFromCart = useCartStore(state => state.removeFromCart)

    return (
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
                                    description: 'product deleted successfully from cart'
                                })
                            }} variant='destructive'>Delete</Button>
                            <Button onClick={() => setOpen(false)} variant='outline'>Cancel</Button>
                        </ButtonGroup>
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    )
}
