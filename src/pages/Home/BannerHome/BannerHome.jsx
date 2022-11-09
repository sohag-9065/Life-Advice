import { Button } from 'flowbite-react';
import React from 'react';
import './BannerHome.css'

const BannerHome = () => {


    return (
        <div className="min-h-[80vh] bg-mulpleimage"  >
            <div className="flex flex-col min-h-[80vh]  max-w-lg  justify-center mx-auto text-center">
                <h1 className='text-4xl font-bold mb-12'>IDEAS TO CHANGE YOUR LIFE</h1>
                <p className='text-xl'>I write life advice that is science-based, pragmatic, and non-bullshitty—a.k.a., life advice that doesn’t suck. Each month, I send out potentially life-changing ideas in my newsletter. Join millions of readers around the world.</p>
                <p className='my-8 text-2xl font-semibold'>Sign Up to Receive My Free Newsletter</p>
                <form>
                    <input type="email" placeholder='Your Email Address ' className='rounded-lg' />
                    <br />
                    <Button type="submit" className='mx-auto mt-4 w-52'>
                        SUBSCRIBE
                    </Button>
                </form>
            </div>


        </div>
    );
};

export default BannerHome;