import React from 'react';
import useAxiosSecure from '../../../../hook/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';

const AllUser = () => {

    // user get axios or tanskQuery
    const axiosSecure = useAxiosSecure();

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/user');
            return res.data
        }
    })
    // update role
    const handleUpdate = (item) => {
        axiosSecure.patch(`/user/admin/${item._id}`)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    refetch();
                    // aleart
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: 'user role admin upadate',
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }

    // delete
    const handleDelete = (id) => {
        axiosSecure.delete(`/user/admin/${id}`)
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
        <div className='py-7 '>
            <h3 className='text-2xl text-center font-sans font-semibold'>MANAGE ALL USERS</h3>
            <div className='mt-12'>
                <h3 className='text-2xl bg-slate-200 px-2 py-2 font-sans'>All USers: {users.length}</h3>
                {/* table */}
                <div>
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Role</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* body */}
                                {
                                    users.map((item, idx) =>
                                        <tr key={idx}>
                                            <th>{idx + 1}</th>
                                            <td>{item.name}</td>
                                            <td>{item.email}</td>
                                            <td>
                                                {
                                                    item.role == 'admin' ? 'admin' :
                                                        <button onClick={() => handleUpdate(item)} className='bg-red-500 text-white text-xl rounded-lg px-3 py-2'>user</button>
                                                }
                                            </td>
                                            <td>
                                                <button onClick={() => handleDelete(item._id)} className='bg-green-400 text-xl rounded-lg px-3 py-2'>Delete</button>
                                            </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllUser;