import { Button } from 'flowbite-react';
import React, { useContext, useState } from 'react';
import { useQuery } from 'react-query';
import DeleteModal from '../../components/DeleteModal';
import Loading from '../../components/Loading';
import PrimaryButton from '../../components/PrimaryButton';
import ReviewCard from '../../components/ReviewCard';
import { AuthContext } from '../../Context/UserContext';
import useTitle from '../../hooks/useTitle';
import EditReview from './EditReview';

const MyReview = () => {
    useTitle("MyReview");
    const [deleteReview, setDeleteReview] = useState(false);
    const [showModal, setShowModal] = useState(false)
    const [editReview, setEditReview] = useState(false);
    const [editModal, setEditModal] = useState(false)
    const { user, loadingUser } = useContext(AuthContext);


    const { data: reviews, isLoading, refetch } = useQuery('reviews', () => fetch(`https://ph-b6-assignmet11-server-sohag-9065.vercel.app/reviews/filter?email=${user.email}`).then(res => res.json()),);

    if (isLoading || loadingUser) {
        return <Loading></Loading>
    }

    const handleDeleteButton = (review) => {
        setDeleteReview(review);
        setShowModal(true)
    }
    const handleEditButton = (review) => {
        setEditReview(review);
        setEditModal(true)
    }
    // console.log(reviews)
    return (
        <div className='min-h-[70vh] mt-12'>

            {
                reviews.length < 1 &&
                <div className='min-h-[70vh] flex justify-center items-center'>
                    <PrimaryButton>No Review Added Yet!</PrimaryButton>
                </div>
            }
            <div className='grid grid-cols-1 lg:grid-cols-3 justify-items-center'>
                {
                    reviews.length > 0 &&
                    reviews.map(review => <ReviewCard
                        key={review._id}
                        singleReview={review}
                    >
                        <div className='flex justify-end gap-5 pt-8'>
                            <Button onClick={() => handleDeleteButton(review)} color="failure" size="xs" >
                                Delete Review
                            </Button>
                            <Button onClick={() => handleEditButton(review)} size="xs"   >
                                Edit Review
                            </Button>
                        </div>
                    </ReviewCard>)
                }

            </div>
            {
                deleteReview &&
                <DeleteModal
                    showModal={showModal}
                    setShowModal={setShowModal}
                    deleteReview={deleteReview}
                    setDeleteReview={setDeleteReview}
                    refetch={refetch}
                ></DeleteModal>
            }
            {
                editReview &&
                <EditReview
                    editModal={editModal}
                    setEditModal={setEditModal}
                    editReview={editReview}
                    setEditReview={setEditReview}
                    refetch={refetch}
                ></EditReview>
            }

        </div>
    );
};

export default MyReview;