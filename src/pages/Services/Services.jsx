import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../components/Loading';
import ServiceCard from '../../components/ServiceCard';

const Services = () => {
    const { data: services, isLoading } = useQuery('allServices', () => fetch('http://localhost:5000/services').then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }
    console.log(services);
    return (
        <div>
            <h2 className='text-center text-4xl pt-2'>Services We Provide</h2>
            {/* all services show */}
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 max-w-screen-xl justify-items-center  mt-20'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>

    );
};

export default Services;