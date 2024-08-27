import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';

const Login = () => {
    const [disable, setDisable] = useState(true);
    // auth
    const { signInUser } = useContext(AuthContext);

    //  captch
    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    //
    const handleCaptch = e => {
        const user_captch = e.target.value;
        if (validateCaptcha(user_captch)) {
            setDisable(false)
        }

        else {
            setDisable(true)
        }
    }
    // navigate home
    const location=useLocation();
    const navigate = useNavigate();
    const frome= location.state?.from?.pathname || '/';

    // login from
    const handleLogin = (e) => {
        e.preventDefault();
        const from = e.target;
        const email = from.email.value;
        const password = from.password.value;
        // const user={email, password};
        //console.log(user)
        signInUser(email, password)
            .then(result => {
                const loguser = result.user;
                Swal.fire({
                    title: "Succefully Login",
                    text: "Welcome to our website !",
                    icon: "question"
                });
                navigate(frome, {replace: true})

            })
            .then(error => {
                console.log(error)
            })

    }

    return (
        <div>
            <div className="hero bg-base-200  min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                    <div className="card bg-base-100 pb-4  w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <LoadCanvasTemplate />
                                </label>
                                <input onBlur={handleCaptch} type="text" name='captch' placeholder="set captch" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" className='btn btn-primary' disabled={disable} value="login" />
                            </div>
                        </form>
                        <p className='pl-4'>Create Account && <Link to='/signup'><span className='text-red-600 '>Signup</span></Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;