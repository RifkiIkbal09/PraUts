import { Link } from "react-router-dom";

export default function Header() {
    return( 
        <div className="flex justify-between bg-gray-900 text-white w-screen ">
            <div className="px-5 xl:px-12 py-6 flex w-full items-center">

            <div>
                <ul className="flex gap-10 hover:text-slate-300">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/products">Product</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </div>
            </div>
        </div>
    )
}