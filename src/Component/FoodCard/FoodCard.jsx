import React, { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useAxiosSecure from '../../hook/useAxiosSecure';
import useCart from '../../hook/useCart';

const FoodCard = ({ item }) => {
    const { image, name, price, recipe,_id } = item;
    // user
    const { user } = useContext(AuthContext)
    // cart
    const [, refetch] =useCart();
    // navigate or location
    const navigate = useNavigate();
    const location= useLocation();
    // axiosSecure
    const axiosSecure =useAxiosSecure();
    // add click btn
    const handleClick = item => {
        if (user && user.email) {
            // item product
            const cartItem={
                menuID: _id,
                email: user.email,
                name,image, price
            }
            axiosSecure.post('/carts', cartItem)
            .then(res=>{
                if(res.data.insertedId){
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `Add to ${name}`,
                        showConfirmButton: false,
                        timer: 1500
                      });
                    //   add to cart
                    refetch();
                      
                }
            })
        }
        else {
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Before Login page"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', {state: {from: location}});
                }
            });
        }
    }

    return (
        <div>
            <div className="card bg-base-100 w-72 h-96 shadow-xl">
                <figure>
                    <img
                        src={image}
                        alt="Shoes"
                    />

                </figure>
                <p className='right-0 absolute bg-orange-500 px-3 py-1 mr-3 mt-2'>${price}</p>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions justify-end">
                        <button onClick={() => handleClick(item)} className="btn btn-primary">Add Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;