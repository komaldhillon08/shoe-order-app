import { Link } from "react-router";
import Button from "./Button";

export default function Header() {
    return (
        <>
            <div className="flex items-center py-5 rounded text-indigo-950">
                <div className="w-1/2 text-3xl font-semibold ">logo</div>
                <div className="w-1/2">
                    <ul className="flex gap-6 text-xl items-center justify-end">
                        <li className="font-medium  px-2 cursor-pointer"><Link to="/"> Home</Link></li>
                        <li className="font-medium  px-2 cursor-pointer"><Link to="/about"> about</Link></li>
                        <li className="font-medium  px-2 cursor-pointer"> <Link to="/content">content us</Link></li>
                        <li className="font-medium  px-2 cursor-pointer"><Link to="/shopping"> shopping</Link></li>
                        <li>
                            <Button><Link to="/"> log in</Link></Button>
                        </li>




                    </ul>
                </div>
            </div>
        </>
    )
}