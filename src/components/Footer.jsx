export default function Footer() {
    return (
        <>
            <div className="flex items-center border-1">
                <div className="w-1/2 text-3xl">footer</div>
                <div className="w-1/2">
                    <ul className="flex gap-2 justify-around">
                        <li className=" border-1 px-2 cursor-pointer">Instagram</li>
                        <li className="border-1 px-2 cursor-pointer">Facebook</li>
                        <li className="border-1 px-2 cursor-pointer">Twiter</li>
                        <li className="border-1 px-2 cursor-pointer">Linkdin</li>
                    </ul>
                </div>
            </div>
        </>
    )
}