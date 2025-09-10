import { Link } from "react-router";

export default function Header() {
    return (
        <>
            <div className="flex items-center border-1">
                <div className="w-1/2 text-3xl">logo</div>
                <div className="w-1/2">
                    <ul className="flex gap-2 justify-around">
                        <li className=" border-1 px-2 cursor-pointer"><Link to="/"> Home</Link></li>
                        <li className=" border-1 px-2 cursor-pointer"><Link to="/about"> about</Link></li>
                        <li className=" border-1 px-2 cursor-pointer"> <Link to="/content">content us</Link></li>
                        <li className=" border-1 px-2 cursor-pointer"><Link to="/shopping"> shopping</Link></li>
                        <li className=" border-1 px-2 cursor-pointer"><Link to="/"> log in</Link></li>




                    </ul>
                </div>
            </div>
        </>
    )
}