import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loading from '../../components/Loading';
import { AuthContext } from '../../Context/UserContext';

const Login = () => {
    const [userEmail, setUserEmail] = useState('')
    const { register, formState: { errors }, reset, handleSubmit } = useForm();
    const { signin, resetPassword, loadingUser } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()

    const from = location.state?.from?.pathname || '/'

    if (loadingUser) {
        return <Loading></Loading>
    }

    const onSubmit = data => {
        const { email, password } = data;
        console.log(email, password)
        // sign in user with email and pass 
        // signin(email, password)
        //     .then(result => {
        //         toast.success('Login Success!', { autoClose: 1000 });
        //         navigate(from, { replace: true });
        //     })
        //     .catch(error => toast.error(error.message));
        reset();
    };
    

    //Reset Pass
    const handleReset = () => {
        console.log("OnClick: ", userEmail);
        resetPassword(userEmail)
            .then(() => {
                toast.success('Reset link has been sent, please check email', { autoClose: 1000 })
            })
            .catch(error => toast.error(error.message))
    }

    return (

        <div className="p-4 w-full min-h-screen flex justify-center items-center bg-white rounded-lg  sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">

            <div className="p-4 w-full max-w-sm bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" >

                    <h5 className="text-xl font-medium text-gray-900 dark:text-white">Sign in to Life Advice</h5>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                        <input
                            type="email"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            placeholder='Your Email'
                            defaultValue={''}
                            {...register("email",
                                {
                                    onChange: (event) => { setUserEmail(event.target.value) },
                                    required: "Email Address is required",
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: "Provide a valid email"
                                    }
                                }
                            )}
                        />
                    </div>
                    {errors.email?.type === 'required' && <p role="alert">{errors.email?.message}</p>}
                    {errors.email?.type === 'pattern' && <p role="alert">{errors.email?.message}</p>}
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                        <input
                            type="password"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            placeholder='Enter Password'
                            {...register("password", {
                                required: "Password is required",
                                minLength: {
                                    value: 6,
                                    message: "Must be 6 charecters or longer",
                                }
                            }
                            )}
                        />
                    </div>
                    {errors.password?.type === 'required' && <p role="alert">{errors.password?.message}</p>}
                    {errors.password?.type === 'minLength' && <p role="alert">{errors.password?.message}</p>}
                    <div className='text-center'>
                        <input type="submit" className=' p-2 mx-auto bg-black text-white rounded-md' value="Login" />
                    </div>
                </form>
                <div className='space-y-1'>
                    <button
                        onClick={handleReset}
                        className='text-xs hover:underline text-gray-400'
                    >
                        Forgot password?
                    </button>
                </div>
                <p className='text-xs'>New to Life Advice? <Link to="/sign-up" className=' text-secondary cursor-pointer'>Create new account</Link></p>
            </div>

        </div>

    );
};

export default Login;