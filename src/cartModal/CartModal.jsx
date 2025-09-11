import { useCart } from "../store/CartContext"
import Modal from "../components/Modal"

export default function CartModal({ open, onClose }) {

    const { cart } = useCart()
    return (
        <>
            <Modal open={open}  >
                <div className="mt-30 border-1 w-100   p-5 bg-red-200 rounded hover:shadow-2xl transition duration-300 ease-in-out ">
                    <h3 className="mb-5 font-medium text-xl">Your Order</h3>

                    {cart.length === 0 ? (
                        <p>No Item inThis Cart  !</p>
                    ) : (
                        cart.map((items) => (
                            <div key={items.id} className="flex  w-full justify-between rounded mb-5 ">
                                <p className=" w-full mb-5 ">Item-Name{items.productName}</p>
                                <p>{items.quantity}</p>
                                <p className="flex gap-2">
                                    <span className="px-3 border-1 cursor-pointer rounded">-</span>
                                    <p>0</p>
                                    <span className="px-3 border-1 cursor-pointer rounded">+</span>
                                </p>
                            </div>
                        ))
                    )}
                    <p className="flex justify-end " onClick={onClose} >
                        <span className=" border-1 px-2 rounded cursor-pointer ">Place Order</span>
                    </p>
                </div>
            </Modal>
        </>
    )
}

