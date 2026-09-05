import { create } from "zustand";
import { persist } from 'zustand/middleware'

const useCartStore = create(
    persist(
        set => ({
            cart: [],
            loading: false,
            addToCart: (product) => set(state => {
                state.loading = true
                const isExistProduct = state.cart.find((item) => item.id === product.id)

                if (isExistProduct) {
                    return {
                        cart: [...state.cart],
                        loading: false
                    }
                } else {
                    localStorage.setItem('cart', JSON.stringify([...state.cart, product]))
                    return {
                        cart: [...state.cart, product],
                        loading: false
                    }
                }
            }),
            removeFromCart: (productId) => set(state => ({ cart: state.cart.filter(item => item.id !== productId) }))
        }),
        {
            name: 'cart-storage',
            storage: {
                getItem: (name) => {
                    const str = localStorage.getItem(name)
                    if (!str) return
                    return JSON.parse(str)
                },
                setItem: (name, value) => {
                    localStorage.setItem(name, JSON.stringify(value))
                },
                removeItem: (name) => localStorage.removeItem(name)
            }
        }
    )
)

export default useCartStore