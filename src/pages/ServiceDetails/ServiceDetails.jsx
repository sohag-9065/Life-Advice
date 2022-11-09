import React from 'react';
import { useQuery } from 'react-query';
import { Link, useLoaderData } from 'react-router-dom';
import Loading from '../../components/Loading';
import PrimaryButton from '../../components/PrimaryButton';
import ReviewCard from '../../components/ReviewCard';
import ReviewRating from '../../components/ReviewRating';
import AddReview from './AddReview';

const ServiceDetails = () => {
    const { _id, title, details, description, image, rating, price } = useLoaderData();
    console.log(_id);

    const { data: reviews, isLoading, refetch } = useQuery('reviews', () => fetch(`http://localhost:5000/reviews/filter?id=${_id}`).then(res => res.json()),);

    if (isLoading) {
        return <Loading></Loading>
    }

    console.log(reviews)
    return (
        <div>
            <div className='my-12'>
                <div className="card max-w-4xl mx-auto bg-base-100 mb-4 shadow-xl pt-4 dark:bg-gray-800 dark:text-gray-100">
                    <div  >
                        <figure><img src={image} alt="Shoes" className='w-full ' /></figure>
                        <div className="card-body text-black px-8 ">
                            <div className="">
                                <h2 className="card-title py-4 font-serif">
                                    <span className='text-green-400 text-4xl font-semibold '>{title}</span>

                                </h2>
                                <p className='text-lg font-sans'>{description}</p>
                                <p className='text-xl font-semibold text-secondary py-3 font-serif'>You Can Learn </p>
                                <ul>
                                    {
                                        details.map((co, index) => <li key={index} className='ml-8 font-sans'>* {co}</li>)
                                    }
                                </ul>


                            </div>
                            <div className='flex justify-between py-4'>
                                <p ><span className=' py-4 text-xl font-semibold text-secondary'>Price: {price}</span> </p>
                                <ReviewRating rating={rating}></ReviewRating>

                            </div>

                            <div className='text-center pb-12 pt-4'>
                                {/* <Link to={`/join/${id}`} className="py-2 px-40 bg-yellow-400 text-xl font-semibold rounded-md ">Join Now</Link> */}
                                <Link><PrimaryButton>Join Now</PrimaryButton></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 justify-items-center'>
                {
                    reviews.map(review => <ReviewCard
                    key={review._id}
                    singleReview={review}
                    ></ReviewCard>)
                }
                
            </div>
            <AddReview 
            id={_id} 
            title={title}
            refetch={refetch}
            ></AddReview>
        </div>
    );
};

export default ServiceDetails;