import { Button, Card, Label, Textarea, TextInput } from 'flowbite-react';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import imageUpload from '../../js/imageUpload';

const AddAService = () => {
    const { register, formState: { errors }, reset, handleSubmit } = useForm();
    

    const onSubmit = data => {
        const { title, description, rating,  price, courseDetails } = data;
        const image = data.image[0];
        const details = courseDetails.split(".");
        console.log(data)
        imageUpload(image)
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url
                    const course = {
                        title,
                        description, 
                        rating,  
                        price,
                        details,
                        image: img
                    }
                    fetch('http://localhost:5000/services', {
                        method: "POST",
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(course)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                             
                            if (inserted?.insertedId) {
                                toast.success("Course added successfully");
                                reset();
                            }
                            else {
                                toast.error("Failed to add the Course");
                            }
                            console.log('Course', inserted);
                        })

                }
            })

        reset();
    };
    return (
        <div className="w-full min-h-screen flex justify-center items-center my-4">
            <Card className="max-w-lg  w-full">
                <h1 className='text-2xl text-center font-semibold'>Course Info</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">

                    <div>
                        <div className="mb-2 block">
                            <Label
                                value="Course Title"
                            />
                        </div>
                        <TextInput
                            type="text"
                            placeholder="Enter Title"
                            {...register("title",
                                {
                                    required: "Course Title is required",
                                }
                            )}
                        />
                    </div>
                    {errors.title?.type === 'required' && <p role="alert">{errors.title?.message}</p>}
                    <div>
                        <div className="mb-2 block">
                            <Label
                                value="Short Description"
                            />
                        </div>
                        <Textarea
                            type="text"
                            placeholder="Enter Short Description"
                            {...register("description",
                                {
                                    required: "Description is required",
                                }
                            )}
                        />
                    </div>
                    {errors.description?.type === 'required' && <p role="alert">{errors.description?.message}</p>}
                    <div>
                        <div className="mb-2 block">
                            <Label
                                value="Course Details"
                            />
                        </div>
                        <Textarea
                            type="text"
                            placeholder="Course Details"
                            {...register("courseDetails",
                                {
                                    required: "Course Details is required",
                                }
                            )}
                        />
                    </div>
                    {errors.courseDetails?.type === 'required' && <p role="alert">{errors.courseDetails?.message}</p>}
                    <div>
                        <div className="mb-2 block">
                            <Label
                                value="Price"
                            />
                        </div>
                        <TextInput
                            type="number"
                            placeholder="Enter Price"
                            {...register("price",
                                {
                                    required: "Course Price is required",
                                }
                            )}
                        />
                    </div>
                    {errors.price?.type === 'required' && <p role="alert">{errors.price?.message}</p>}
                    <div>
                        <div className="mb-2 block">
                            <Label
                                value="Rating"
                            />
                        </div>
                        <TextInput
                            type="number"
                            placeholder="Enter Rating"
                            min="1" 
                            max="5"
                            {...register("rating",
                                {
                                    required: "Course Rating is required",
                                }
                            )}
                        />
                    </div>
                    {errors.rating?.type === 'required' && <p role="alert">{errors.rating?.message}</p>}
                    <div>
                        <div className="mb-2 block">
                            <Label
                                value="Chosse Image"
                            />
                        </div>
                        <TextInput
                            type="file"
                            {...register("image",
                                {
                                    required: "Image is required",
                                }
                            )}
                        />
                    </div>
                    {errors.image?.type === 'required' && <p role="alert">{errors.image?.message}</p>}

                    <Button type="submit">
                        Add Course
                    </Button>
                </form>


            </Card>
        </div>
    );
};

export default AddAService;