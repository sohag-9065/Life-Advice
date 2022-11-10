import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../components/Loading';
import ServiceCard from '../../components/ServiceCard';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const ServicesHome = () => {
    const { data, isLoading } = useQuery('allServices', () => fetch(`https://ph-b6-assignmet11-server-sohag-9065.vercel.app/services?page=0&size=3`).then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }
    const { services } = data;



    return (
        <div className='mt-12'>
            <h2 className='text-center text-4xl pt-2'>My Courses</h2>
            {/* first three services show for Home route*/}
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 max-w-screen-xl justify-items-center  mt-20'>
                {

                    services?.length > 0 &&
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>

            <Link to='/services' className="flex justify-center  w-96 items-center mx-auto gap-4 my-12 text-white bg-blue-600 rounded-lg  px-5 py-2.5 text-center text-sm font-medium  hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" >
                <span>See All Courses</span>
                <FaArrowRight />
            </Link>

        </div>

    );
};

export default ServicesHome;