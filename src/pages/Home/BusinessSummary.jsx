
import React from "react";
import { FaLocationArrow, FaMedal, FaUserFriends } from "react-icons/fa";

const BusinessSummary = () => {
    const date = new Date();
    const month = date.getMonth();
    const monthName = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sept",
        "Oct",
        "Nov",
        "Dec",
    ];
    const day = date.getDate();
    const year = date.getFullYear();
    return (
        <section className="py-8 my-16 w-full ">
            <h2 className="text-center text-4xl sm:text-5xl text-indigo-700  capitalize font-semibold">
                Courses <span className="text-teal-400">summery</span>
            </h2>
            <div className="grid grid-cols-3 w-full  shadow px-8 lg:px-16 my-12 py-5">
                <div className=" text-center ">
                    <div className="mx-auto pb-4">
                        <FaUserFriends
                            className="text-teal-400 font-bold w-16 h-16 mx-auto "
                        ></FaUserFriends>
                    </div>
                    <div className="stat-title text-indigo-700 font-semibold text-lg uppercase">
                        Total customers
                    </div>
                    <div className=" text-indigo-700">2K</div>
                    <h4 >
                        Jan 1st 2021 - {monthName[month]} {day} {year}
                    </h4>
                </div>

                <div className=" text-center">
                    <div className="mx-auto pb-4">
                        <FaMedal
                            className="text-indigo-700 font-bold w-16 h-16 mx-auto "
                        ></FaMedal>
                    </div>
                    <div className="stat-title text-teal-400 font-semibold text-lg uppercase">
                        Earned Reviews
                    </div>
                    <div className=" text-teal-400">1.5K</div>
                    <h4 >
                        Jan 1st 2021 - {monthName[month]} {day} {year}
                    </h4>
                </div>

                <div className=" text-center">

                    <div className="mx-auto pb-4">
                        <FaLocationArrow
                            className="text-teal-400 font-bold w-16 h-16 mx-auto "
                        ></FaLocationArrow>
                    </div>
                    <div className="stat-title text-indigo-700 font-semibold text-lg uppercase">
                        Receiving point
                    </div>
                    <div className=" text-indigo-700">100+</div>
                </div>
            </div>
        </section>
    );
};

export default BusinessSummary;




