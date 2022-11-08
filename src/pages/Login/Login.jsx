import { Button, Card, Label, TextInput } from 'flowbite-react';
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

    const from = location.state?.from?.pathname || '/home'

    if (loadingUser) {
        return <Loading></Loading>
    }

    const onSubmit = data => {
        const { email, password } = data;
        console.log(email, password)
        // sign in user with email and pass 
        signin(email, password)
            .then(result => {
                toast.success('Login Success!', { autoClose: 1000 });
                navigate(from, { replace: true });
            })
            .catch(error => toast.error(error.message));
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
        <div className="w-full min-h-screen flex justify-center items-center">
            <Card className="max-w-sm  w-full">
                <h1 className='text-2xl text-center font-semibold'>Sign Up</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="email1"
                                value="Your email"
                            />
                        </div>
                        <TextInput
                        
                            type="email"
                            placeholder="name@lifeadvice.com"
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
                        <div className="mb-2 block">
                            <Label
                                htmlFor="password1"
                                value="Your password"
                            />
                        </div>
                        <TextInput
                            id="password1"
                            type="password"
                            {...register("password",
                                {
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

                    <Button type="submit">
                        Sign Up
                    </Button>
                </form>
                <div className='space-y-1'>
                    <button
                        onClick={handleReset}
                        className='text-xs hover:underline text-gray-400'
                    >
                        Forgot password?
                    </button>
                </div>
                <p className='text-xs'>New to Life Advice? <Link to="/sign-up" className='text-lime-700 cursor-pointer'>Create new account</Link></p>
            </Card>
        </div>
    );
};

export default Login;