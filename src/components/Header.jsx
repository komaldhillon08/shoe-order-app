import { Link } from "react-router";
import Button from "./Button";

export default function Header() {
    return (
        <>
            <div className="flex items-center border-1 ">
                <div className="w-1/2 text-3xl">logo</div>
                <div className="w-1/2">
                    <ul className="flex gap-2 items-center justify-around">
                        <li className=" border-1 px-2 cursor-pointer"><Link to="/"> Home</Link></li>
                        <li className=" border-1 px-2 cursor-pointer"><Link to="/about"> about</Link></li>
                        <li className=" border-1 px-2 cursor-pointer"> <Link to="/content">content us</Link></li>
                        <li className=" border-1 px-2 cursor-pointer"><Link to="/shopping"> shopping</Link></li>
                        <li>
                            <Button><Link to="/"> log in</Link></Button>
                        </li>




                    </ul>
                </div>
            </div>
        </>
    )
}