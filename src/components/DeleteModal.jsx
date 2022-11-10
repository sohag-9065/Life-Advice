import { Button, Modal } from 'flowbite-react';
import React from 'react';
import { toast } from 'react-toastify';
import ReviewRating from './ReviewRating';

const DeleteModal = ({ showModal, setShowModal, deleteReview, setDeleteReview, refetch }) => {

    const { _id, title, review, rating } = deleteReview;
    // console.log(deleteReview);


    const handleModal = () => {
        console.log("object");
        setShowModal(false)
        fetch(`http://localhost:5000/reviews/${_id}`, {
            method: "DELETE",
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('life-advice')}`
            },
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    //  console.log(data.deletedCount);
                    toast.info('Review Delete', { autoClose: 1000 })
                    setDeleteReview(null)
                    refetch();
                }

            })
    }

    return (
        <div>
            <React.Fragment>
                <Modal
                    show={showModal}
                    onClose={() => setShowModal(false)}
                >
                    <Modal.Header>
                        {title}
                    </Modal.Header>
                    <Modal.Body>
                        <div className="space-y-6">
                            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                {review}
                            </p>
                            <ReviewRating rating={rating}></ReviewRating>
                            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                Are you sure? Delete This Review.
                            </p>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button size="xs" onClick={handleModal}>
                            Delete
                        </Button>
                        <Button
                            size="xs"
                            color="gray"
                            onClick={() => setShowModal(false)}
                        >
                            Decline
                        </Button>
                    </Modal.Footer>
                </Modal>
            </React.Fragment>
        </div>
    );
};


export default DeleteModal;