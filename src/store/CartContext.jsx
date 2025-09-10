import { createContext, useState , useContext} from "react";

const CartContext = createContext()

export default function CartProvider({ children }) {
    const [cart, setCart] = useState([])

    // add to cart 

    const addToCart = (product) => {
        console.log("this is product - 1 " , product);
        
        setCart((prevCart) => {
            const exising = prevCart.find((item) => item.id === product.id)
            if (exising) {
                return prevCart.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                )
            }
            return [...prevCart, { ...product, quantity: 1 }]
        })
    }
    



    return (
        <CartContext.Provider value={{ cart, addToCart }}>
            {children}
        </CartContext.Provider>
    )
}
export const useCart = () => useContext(CartContext)