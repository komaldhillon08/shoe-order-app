
import Button from "../components/Button"

import { product } from "../product"

export default function Shopping() {
    return (
        <>
            <div className="my-30  text-indigo-950 ">
                <div className="flex justify-between    mb-10 items-center">
                    <p className="text-xl">this is fumous shoes in this year</p>
                    <Button> Cart (0)</Button>
                </div>
                <div className="grid grid-cols-4 gap-8 mt-10 ">
                    {product.map((items) => (
                        <div key={items.id} className="  p-3 rounded-lg text-center shadow-md bg-white 
                        hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-2">
                            <img
                                className=" w-full h-80 object-cover bg-gray-100 rounded-lg mb-4"
                                src={items.productImg}
                                alt={items.productName}
                            />
                            <p className="text-xl font-bold text-gray-800 tracking-wide">{items.productName}</p>
                            <p className="text-lg text-gray-600 mb-4">${items.price}</p>

                            {/* use the button  */}
                            <Button>Add To Cart</Button>
                        </div>
                    ))}


                </div>

            </div>


        </>
    )
}