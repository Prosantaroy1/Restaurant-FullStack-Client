
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { useContext } from 'react';
import Swal from 'sweetalert2';

const SignUp = () => {
    //auth
    const {createUser,updateUser} = useContext(AuthContext);
    // 
    const navigate=useNavigate();

    // react hook
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm();
    // react hook fn
    
  const onSubmit= (data) => {
    console.log(data)
    createUser(data.email, data.password)
    .then(result=>{
        const logUser= result.user;
        updateUser(data.name, data.photourl)
        .then(()=>{
            console.log('update User name photo');
            reset();
            Swal.fire({
                title: "Succefully created",
                text: "Welcome to our website !",
                icon: "question"
            });
            navigate('/')
        })
        .then(error=>{
            console.log('error');
        })
       

    })
    .then(errors=>{
        console.log(errors)
    })

  }

    return (
        <div>
            <div className="hero bg-base-200  min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">SignUp now!</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                    <div className="card bg-base-100 pb-4  w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">name</span>
                                </label>
                                <input type="text"  {...register("name")} placeholder="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URl</span>
                                </label>
                                <input type="text"  {...register("photoUrl")} placeholder="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' {...register("email")} placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password"  {...register("password")} placeholder="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" className='btn btn-primary' value="Signup" />
                            </div>
                        </form>
                        <p className='pl-4'>Allready account && <Link to='/login'><span className='text-red-600'>Login</span></Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;