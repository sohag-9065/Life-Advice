import React, { useContext } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { useQuery } from 'react-query';
import { Link, useLoaderData } from 'react-router-dom';
import Loading from '../../components/Loading';
import PrimaryButton from '../../components/PrimaryButton';
import ReviewCard from '../../components/ReviewCard';
import ReviewRating from '../../components/ReviewRating';
import { AuthContext } from '../../Context/UserContext';
import useTitle from '../../hooks/useTitle';
import AddReview from './AddReview';

const ServiceDetails = () => {
    const { user, loadingUser } = useContext(AuthContext);
    const { _id, title, details, description, image, rating, price } = useLoaderData();
    useTitle("ServiceDetails");

    const { data: reviews, isLoading, refetch } = useQuery('reviews', () => fetch(`https://ph-b6-assignmet11-server-sohag-9065.vercel.app/reviews/filter?id=${_id}`).then(res => res.json()),);

    if (isLoading || loadingUser) {
        return <Loading></Loading>
    }


    // console.log(reviews)
    return (
        <div>
            <div className='my-12'>
                <div className="card max-w-4xl mx-auto bg-base-100 mb-4 shadow-xl pt-4 dark:bg-gray-800 dark:text-gray-100">
                    <div  >
                        <PhotoProvider>
                            <div className="foo">
                                <PhotoView src={image}>
                                    <img src={image} alt="" />
                                </PhotoView>
                            </div>
                        </PhotoProvider>
                        {/* <figure><img src={image} alt="Shoes" className='w-full ' /></figure> */}
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
                                <p ><span className=' py-4 text-xl font-semibold text-secondary'>Price: ${price}</span> </p>
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
            <div className='my-20'>
                <h2 className="text-center  py-4 font-serif text-green-400 text-4xl font-semibold ">
                    What Our Students Say
                </h2>
                {
                    reviews.length < 1 &&
                    <div className='h-40 flex justify-center items-center'>
                        <PrimaryButton>No Review Added Yet!</PrimaryButton>
                    </div>
                }
                <div className='grid grid-cols-1 lg:grid-cols-3 justify-items-center'>
                    {
                        reviews.length > 0 &&
                        reviews.map(review => <ReviewCard
                            key={review._id}
                            singleReview={review}
                        ></ReviewCard>)
                    }

                </div>
            </div>
            {
                user ?
                    <AddReview
                        id={_id}
                        title={title}
                        refetch={refetch}
                    ></AddReview>
                    :
                    <div className='my-12 flex justify-center'>
                        {/* <Link to="/login" className='  py-3  px-40  border-2  '>Please login to add a review.</Link> */}
                        <Link to="/login"><PrimaryButton>Please login to add a review.</PrimaryButton></Link>
                    </div>

            }

        </div>
    );
};

export default ServiceDetails;