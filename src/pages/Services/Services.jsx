import React, { useState, useEffect } from 'react';
import { Pagination } from 'flowbite-react';
import Loading from '../../components/Loading';
import ServiceCard from '../../components/ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    const [count, setCount] = useState(0);
    const [page, setPage] = useState(1);
    const [size, setSize] = useState(3);
    const [isLoading, satIsLoading] = useState(false);
    

    useEffect(() => {
        satIsLoading(true);
        fetch(`http://localhost:5000/services?page=${page - 1}&size=${size}`)
            .then(res => res.json())
            .then(data => {
                setCount(data.count);
                setServices(data.services);
                satIsLoading(false);

            })
    }, [page, size]);

    if(isLoading){
        return  <Loading></Loading>
    }


    const pages = Math.ceil(count / 3);
    // console.log(services);


    const onChnagePage = (page) => {
        setPage(page);
        // console.log(page);
    }
    const handleChangePageSize = changeSize => {
        // console.log(changeSize);
        setSize(changeSize);
        setPage(1);
    }

    return (
        <div>
            <h2 className='text-center text-4xl pt-2'>My All Courses  </h2>
            {/* all services show */}
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 max-w-screen-xl justify-items-center  mt-20'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>

            <div className="flex justify-center items-center my-12">
                <Pagination
                    currentPage={page}
                    onPageChange={onChnagePage}
                    showIcons={true}
                    totalPages={pages}
                />
                <select
                    onChange={event => handleChangePageSize(event.target.value)}
                    className=" ml-6 h-10 mt-1  rounded-lg border-indigo-200  "
                >
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value={count}>All</option>
                </select>
            </div>

        </div>

    );
};

export default Services;