export default function CartModal(params) {
    return (
        <>
            <div className="mt-30 border-1 w-100  mx-auto p-5 bg-red-200 rounded hover:shadow-2xl transition duration-300 ease-in-out ">
                <h3 className="mb-5 font-medium text-xl">Your Order</h3>
                <p className=" w-full mb-5 ">Item-Name</p>
                <div className="flex  w-full justify-between rounded mb-5 ">
                    <p>Quentity</p>
                    <p className="flex gap-2">
                        <span className="px-3 border-1 cursor-pointer rounded">-</span>
                        <p>10</p>
                        <span className="px-3 border-1 cursor-pointer rounded">+</span>
                    </p>

                </div>
                <p className="flex justify-end">
                    <span className=" border-1 px-2 rounded cursor-pointer ">Place Order</span>
                </p>
            </div>
        </>
    )
}