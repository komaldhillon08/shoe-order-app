import { useCart } from "../store/CartContext"
import Modal from "../components/Modal"

export default function CartModal({ open, onClose }) {

    const { cart } = useCart()
    return (
        <>
            <Modal open={open}  >
                <div className="  ">
                    <h3 className="mb-5 font-medium text-xl">Your Order</h3>

                    {cart.length === 0 ? (
                        <p>No Item inThis Cart  !</p>
                    ) : (
                        cart.map((items) => (
                            <div key={items.id} className="flex  w-full justify-between rounded mb-5 ">
                                <p className=" w-full  ">{items.productName}</p>

                                <p className="flex gap-2">
                                    <span className="px-3 border-1 cursor-pointer rounded">-</span>
                                    <p>{items.quantity}</p>
                                    <span className="px-3 border-1 cursor-pointer rounded">+</span>
                                </p>
                            </div>
                        ))
                    )}
                    <p className="flex justify-end "  >
                        <span className=" border-1 px-2 rounded cursor-pointer mx-5" onClick={onClose}>Cancel</span>
                        <span className=" border-1 px-2 rounded cursor-pointer ">Place Order</span>
                    </p>
                </div>
            </Modal>
        </>
    )
}

