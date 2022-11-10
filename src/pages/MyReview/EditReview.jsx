import { Button, Modal } from 'flowbite-react';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const EditReview = ({ editModal, setEditModal, editReview, setEditReview, refetch }) => {
    const [updateReview, setUpdateReview] = useState("");
    const [updateRating, setUpdateRating] = useState("");

    const { _id, title, review, rating } = editReview;
    // console.log("updateReview: ", updateReview);


    const handleModal = () => {
        
        setEditModal(false)
        const reviewUpdate = {
             review: updateReview,
             rating: updateRating

        }
        console.log("reviewUpdate", reviewUpdate);
        fetch(`http://localhost:5000/reviews/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('life-advice')}`
            },
            body: JSON.stringify(reviewUpdate)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data?.modifiedCount > 0) {
                    toast.info('Review Update', { autoClose: 1000 })
                }
                refetch();
                console.log(data);
            })
        // fetch(`http://localhost:5000/reviews/${_id}`, {
        //     method: "DELETE"
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data);
        //         if (data.deletedCount) {
        //             //  console.log(data.deletedCount);
        //             toast.info('Review Delete', { autoClose: 1000 })
        //             setEditReview(null)
        //             refetch();
        //         }

        //     })
    }


    return (
        <div>
            <React.Fragment>
                <Modal
                    show={editModal}
                    onClose={() => setEditModal(false)}
                >
                    <Modal.Header>
                        {title}
                    </Modal.Header>
                    <Modal.Body>
                        <div className="space-y-6">
                            <div className='mx-auto mt-6'>
                                <p className='pb-1'>Review</p>
                                <textarea onChange={(e) => setUpdateReview(e.target.value)} name='review' defaultValue={review} type="text" placeholder='Add a Review' className='w-full border-0 border-b border-gray-600 h-12 bg-slate-100 focus:ring-0 hover:border-2 hover:border-black focus:border-black' required />
                            </div>
                            <div className='mx-auto mt-4'>
                                <p className='pb-1'>Rating</p>
                                <input onChange={(e) => setUpdateRating(e.target.value)} name='rating' defaultValue={rating} type="number" min="1" max="5" placeholder='Add Rating Out of 5' className='w-full border-0 border-b border-gray-600 h-12 bg-slate-100 focus:ring-0 hover:border-2 hover:border-black focus:border-black' required />
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button size="xs" onClick={handleModal}>
                            Update
                        </Button>
                        <Button
                            size="xs"
                            color="gray"
                            onClick={() => setEditModal(false)}
                        >
                            Decline
                        </Button>
                    </Modal.Footer>
                </Modal>
            </React.Fragment>
        </div>
    );
};
export default EditReview;