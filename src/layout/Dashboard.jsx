import { CiHome } from "react-icons/ci";
import { IoMdCart } from "react-icons/io";
import { TbBrandBooking } from "react-icons/tb";
import { VscPreview } from "react-icons/vsc";
import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {
    return (
        <div className="flex">
            <div className="w-64 pt-4 min-h-screen text-white bg-orange-500">
                <h3 className="py-2 text-center text-2xl font-bold text-amber-300">Prosanta Shop</h3>
                <ul className="flex justify-center items-center flex-col gap-4">
                <li className="hover:bg-green-400 rounded-lg py-1 px-2 w-full"><NavLink to='/dashboard/userhome'  className='flex items-center gap-1'><CiHome />  User Home</NavLink></li>
                    <li className="hover:bg-green-400 rounded-lg py-1 px-2 w-full"><NavLink to='/dashboard/cart' className='flex items-center gap-1' ><IoMdCart/> Cart</NavLink></li>
                    <li className="hover:bg-green-400 rounded-lg py-1 px-2 w-full"><NavLink className='flex items-center gap-1'> <IoMdCart/>  reservation</NavLink></li>
                    <li className="hover:bg-green-400 rounded-lg py-1 px-2 w-full"><NavLink className='flex items-center gap-1'> <TbBrandBooking />  My booking</NavLink></li>
                    <li className="hover:bg-green-400 rounded-lg py-1 px-2 w-full"><NavLink className='flex items-center gap-1'> <VscPreview />  Add Review</NavLink></li>
                    <div className="divider divider-secondary"></div>
                    <li className="hover:bg-green-400 rounded-lg py-1 px-2 w-full"><NavLink to='/' className='flex items-center'>  Home</NavLink></li>
                    <li className="hover:bg-green-400 rounded-lg py-1 px-2 w-full"><NavLink to='/menu' className='flex items-center'> Our Menu</NavLink></li>
                    <li className="hover:bg-green-400 rounded-lg py-1 px-2 w-full"><NavLink  to='/shop' className='flex items-center'> Our Shop</NavLink></li>
                  
                </ul>
            </div>
            <div className="flex-1 pt-4 pl-4">
              <Outlet/>
            </div>
            
        </div>
    );
};

export default Dashboard;