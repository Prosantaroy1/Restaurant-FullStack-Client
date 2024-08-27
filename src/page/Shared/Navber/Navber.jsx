import { Link } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import { useContext } from "react";
import useCart from "../../../hook/useCart";


const Navber = () => {
    // auth
    const { user, logOutUser } = useContext(AuthContext);
    // cart
    const [cart] = useCart();

    //logout
    const handlelogout = () => {
        logOutUser()
            .then(() => { })
            .then(error => {
                console.log(error)
            })
    }

    const navItem = <>
        <li>
            <Link to='/'>Home</Link>
        </li>
        <li>
            <Link to='/menu'>Our Menu</Link>
        </li>
        <li>
            <Link to='/scriket'>Scriket</Link>
        </li>
        <li>
            <Link to='/shop'>Our Shop</Link>
        </li>
        <li>
            <Link to='/dashboard/cart'>
                <div className="indicator">
                    <span className="indicator-item badge badge-secondary">{cart.length}</span>
                    <button className="btn">cart</button>
                </div>
            </Link>
        </li>
        <li>
            {
                user ? <div><button onClick={handlelogout} className="px-4 py-2 bg-green-600 text-white">LogOut</button></div>
                    : <>
                        <Link to='/login'>Login</Link>
                    </>
            }
        </li>
    </>

    return (
        <div>
            <div className="navbar max-w-5xl fixed z-10 bg-black opacity-80 text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu  items-center menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {navItem}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">TP Restaurant</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu items-center menu-horizontal px-1">
                        {navItem}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Login</a>
                </div>
            </div>
        </div>
    );
};

export default Navber;