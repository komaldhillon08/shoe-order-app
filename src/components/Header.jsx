export default function Header() {
    return (
        <>
            <div className="flex items-center">
                <div className="w-1/2 text-3xl">logo</div>
                <div className="w-1/2">
                    <ul className="flex gap-2 justify-around">
                        <li className=" border-1 px-2 cursor-pointer">Home</li>
                        <li className="border-1 px-2 cursor-pointer">about</li>
                        <li className="border-1 px-2 cursor-pointer">content us</li>
                        <li className="border-1 px-2 cursor-pointer">shopping</li>
                        <li className="border-1 px-2 cursor-pointer">log in </li>

                    </ul>
                </div>
            </div>
        </>
    )
}