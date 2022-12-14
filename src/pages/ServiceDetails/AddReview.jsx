import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import Loading from '../../components/Loading';
import SubmitButton from '../../components/SubmitButton';
import { AuthContext } from '../../Context/UserContext';

const AddReview = ({ id , title, refetch }) => {
    const { user, loadingUser } = useContext(AuthContext);

    if (loadingUser) {
        return <Loading></Loading>
    }

    console.log(user);

    const handleSubmit = (e) => {
        e.preventDefault();
        const review = e.target.review.value;
        const rating = e.target.rating.value;
        const d = new Date();
        const postTime = d.getTime();
        const course = {
            course_Id: id,
            review,
            rating,
            postTime,
            user: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
            title

        }
        fetch('https://ph-b6-assignmet11-server-sohag-9065.vercel.app/reviews', {
            method: "POST",
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('life-advice')}`
            },
            body: JSON.stringify(course)
        })
            .then(res => res.json())
            .then(inserted => {

                if (inserted?.insertedId) {
                    toast.success("Review Added Successfully", { autoClose: 1000 })
                    e.target.reset();
                }
                else {
                    toast.error("Failed to add the Review");
                }
                refetch();
                console.log('Course', inserted);
            })
            .catch(err => {
                toast.success( "Failed to add the Review", { autoClose: 1000 });
                console.log(err)
            })
        console.log(course)
        
    }
    return (
        <div className='my-12 pt-12 pb-1 text-black bg-slate-100  px-40'>

            <h5 className="w-80 mx-auto text-3xl  border-t-2 border-yellow-400 font-bold  pt-4  text-center ">
                Add Review
            </h5>
            <form onSubmit={handleSubmit} className="my-12">
                <div className='mx-auto mt-6'>
                    <p className='pb-1'>Review</p>
                    <textarea name='review' type="text" placeholder='Add a Review' className='w-full border-0 border-b border-gray-600 h-12 bg-slate-100 focus:ring-0 hover:border-2 hover:border-black focus:border-black' required />
                </div>
                <div className='mx-auto mt-4'>
                    <p className='pb-1'>Rating</p>
                    <input name='rating' type="number" min="1" max="5" placeholder='Add Rating Out of 5' className='w-full border-0 border-b border-gray-600 h-12 bg-slate-100 focus:ring-0 hover:border-2 hover:border-black focus:border-black' required />
                </div>
                <div className='flex justify-end mt-6'>
                    <SubmitButton value={"Submit"}></SubmitButton>
                </div>
            </form>
        </div>
    );
};

export default AddReview;