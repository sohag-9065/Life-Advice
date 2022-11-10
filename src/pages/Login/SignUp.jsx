import { Button, Card, Label, TextInput } from 'flowbite-react';
import React, { useContext } from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { setAuthToken } from '../../accessToken/authToken';
import Loading from '../../components/Loading';
import { AuthContext } from '../../Context/UserContext';
import useTitle from '../../hooks/useTitle';
import imageUpload from '../../js/imageUpload';

const SignUp = () => {
    const { createUser, updateNameImage, verifyEmail } = useContext(AuthContext);
    useTitle("SignUp");
    const { register, formState: { errors }, reset, handleSubmit } = useForm();
    const [loadingUser, setLoadingUser] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();

    if (loadingUser) {
        return <Loading></Loading>
    }

    const from = location.state?.from?.pathname || '/';

    const onSubmit = data => {
        console.log(data);
        const { name, email, password } = data;
        const image = data.image[0];
        setLoadingUser(true)
        // 1.Create User 
        createUser(email, password)
            .then(result => {
                // token generate 
                const user = result.user;
                setAuthToken(user);
                //2. Image link Link create 
                imageUpload(image)
                    .then(res => res.json())
                    .then(result => {
                        if (result.success) {
                            const img = result.data.url
                            //3. Update Name
                            updateNameImage(name, img)
                                .then(() => {
                                    toast.success('Name And Img Updated', { autoClose: 1000 })
                                    //4. Email verification
                                    verifyEmail()
                                        .then(() => {
                                            toast.success('Please check your email for verification link', { autoClose: 1000 })
                                            setLoadingUser(false);
                                            navigate(from, { replace: true })
                                        })
                                        .catch(error => {
                                            setLoadingUser(false);
                                            toast.error(error.message)
                                        })
                                })
                                .catch(error => {
                                    toast.error(error.message)
                                })
                        }
                    })

            })
            .catch(error => {
                toast.error(error);
                setLoadingUser(false);
            });
        reset();
    };
    return (
        <div className="w-full min-h-screen flex justify-center items-center">

            <Card className="max-w-sm  w-full">
                <h1 className='text-2xl text-center font-semibold'>Sign Up</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="email1"
                                value="Full Name"
                            />
                        </div>
                        <TextInput
                            type="text"
                            placeholder="Md Sohag Hossain"
                            {...register("name",
                                {
                                    required: "Full Name is required",
                                }
                            )}
                        />
                    </div>
                    {errors.name?.type === 'required' && <p role="alert">{errors.name?.message}</p>}
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="email1"
                                value="Chosse Image"
                            />
                        </div>
                        <TextInput
                            type="file"
                            {...register("image",
                                {
                                    required: "Image is required",
                                }
                            )}
                        />
                    </div>
                    {errors.image?.type === 'required' && <p role="alert">{errors.image?.message}</p>}
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
                <p className='text-xs'>Already have an account? <Link to="/login" className='text-lime-700 cursor-pointer'>Please Login</Link></p>
            </Card>
        </div>
    );
};

export default SignUp;