import React from 'react';
import { toast } from 'react-toastify';
import SubmitButton from '../../../components/SubmitButton';
import './BannerHome.css'

const BannerHome = () => {

    const handleForn = (e) => {
        e.preventDefault();
        toast.success("Mail Sent Successfully", { autoClose: 1000 });
    }

    return (
        <div className="min-h-[80vh] bg-mulpleimage"  >
            <div className="flex flex-col min-h-[80vh]  max-w-xl  justify-center mx-auto text-center">
                <h1 className='text-3xl font-bold mb-12 font-serif'>IDEAS TO CHANGE YOUR LIFE</h1>
                <p className='text-xl'>I write life advice that is science-based, pragmatic, and non-bullshitty—a.k.a., life advice that doesn’t suck. Each month, I send out potentially life-changing ideas in my newsletter. Join millions of readers around the world.</p>
                <p className='my-8 text-2xl font-semibold'>Sign Up to Receive My Free Newsletter</p>
                <form onSubmit={handleForn}>
                    <input type="email" placeholder='Your Email Address ' className='rounded-lg w-80' />
                    <br />
                    <div className='mt-4'>
                        <SubmitButton value={"SUBSCRIBE"}></SubmitButton>
                    </div>
                    {/* <Button type="submit" className='mx-auto mt-4 w-80 bg-yellow-400'>
                        SUBSCRIBE
                    </Button> */}
                </form>
            </div>


        </div>
    );
};

export default BannerHome;