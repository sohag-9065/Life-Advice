import { Card } from 'flowbite-react';
import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';
import ReviewRating from './ReviewRating';
import 'react-photo-view/dist/react-photo-view.css';

const ServiceCard = ({ service }) => {
    const { _id, title, description, price, rating, image } = service;
    // console.log(service);
    return (
        <div className="max-w-sm  ">


            <Card
                imgAlt="Meaningful alt text for an image that is not purely decorative"
                 
            >
                <PhotoProvider>
                    <div className="foo">
                        <PhotoView src={image}>
                            <img src={image} alt="" />
                        </PhotoView>
                    </div>
                </PhotoProvider>
                <h5 className="text-2xl font-bold font-serif tracking-tight text-gray-900 dark:text-white">
                    {title}
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    {description.slice(0, 100)}... <Link to={`/services/${_id}`} className='text-sm font-semibold border-2 px-1 ' >see more</Link>
                </p>
                <ReviewRating rating={rating}></ReviewRating>

                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">
                        {price}
                    </span>
                    <div
                        className="flex justify-center items-center gap-4 rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        <Link
                            to={`/services/${_id}`}
                            className="flex justify-center items-center gap-4"
                        >
                            Show Details
                            <FaArrowRight />

                        </Link>
                        

                    </div>


                </div>
            </Card>
        </div>
    );
};

export default ServiceCard;