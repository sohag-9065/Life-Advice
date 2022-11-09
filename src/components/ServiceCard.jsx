import { Card, Rating } from 'flowbite-react';
import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { _id, title, description, price, rating, image } = service;
    return (
        <div className="max-w-sm  ">
            <Card
                imgAlt="Meaningful alt text for an image that is not purely decorative"
                imgSrc={image}
            >
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {title}
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    {description.slice(0, 100)}... <Link to={`/services/${_id}`} className='text-sm font-semibold border-2 px-1 ' >see more</Link>
                </p>
                <Rating>
                    {
                        [...Array(rating).keys()].map((rat, index) => <Rating.Star key={index} />)
                    }
                    {
                        [...Array(5 - rating).keys()].map((rat, index) => <Rating.Star key={index} filled={false} />)
                    }
                    <span className="mr-2 ml-3 rounded bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-800 dark:bg-blue-200 dark:text-blue-800">
                        {rating}
                    </span>
                </Rating>
                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">
                        $599
                    </span>
                    <div
                        className="flex justify-center items-center gap-4 rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        <Link
                            to={`/services/${_id}`}
                        >
                            See Details

                        </Link>
                        <FaArrowRight />

                    </div>


                </div>
            </Card>
        </div>
    );
};

export default ServiceCard;