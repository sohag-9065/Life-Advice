import React, { useContext } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../components/Loading';
import ReviewCard from '../../components/ReviewCard';
import { AuthContext } from '../../Context/UserContext';

const MyReview = () => {

    const { user, loadingUser } = useContext(AuthContext);


    const { data: reviews, isLoading, refetch } = useQuery('reviews', () => fetch(`http://localhost:5000/reviews/filter?email=${user.email}`).then(res => res.json()),);

    if (isLoading || loadingUser) {
        return <Loading></Loading>
    }

    console.log(reviews)
    return (
        <div>
            <h1>MyReview</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 justify-items-center'>
                {
                    reviews.map(review => <ReviewCard
                    key={review._id}
                    singleReview={review}
                    ></ReviewCard>)
                }
                
            </div>
        </div>
    );
};

export default MyReview;