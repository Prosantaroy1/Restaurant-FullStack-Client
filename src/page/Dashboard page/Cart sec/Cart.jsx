import Swal from "sweetalert2";
import useAxiosSecure from "../../../hook/useAxiosSecure";
import useCart from "../../../hook/useCart";


const Cart = () => {
    // cart
    const [cart, refetch] = useCart();
    const totaltk = cart.reduce((total, item) => total + item.price, 0)
    // axios
    const axiosSecure = useAxiosSecure();
    // delete
    const handleDelete = (id) => {
        axiosSecure.delete(`/carts/${id}`)
            .then(res => {
                if (res.data.deletedCount) {
                    // page delete product to new addd
                    refetch();
                    // aleart
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Deleted Product",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }

    return (
        <div>
            <div className="flex bg-slate-100 px-5 justify-between items-center">
                <h4 className="text-xl text-red-700">Product Add : {cart.length}</h4>
                <h3 className="text-xl text-red-700">Total Price: {totaltk}</h3>
                <button className="btn btn-primary">Pay</button>
            </div>
            {/* table */}
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                Num
                            </th>
                            <th>Img</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            cart.map((item, idx) => <tr key={idx}>
                                <th>
                                    {idx + 1}
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={item.image}
                                                    alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {item.name}
                                </td>
                                <td>{item.price}</td>
                                <th>
                                    <button onClick={() => handleDelete(item._id)} className="btn btn-ghost btn-xs">delete</button>
                                </th>
                            </tr>)
                        }

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default Cart;