import React, { useEffect, useState } from 'react'
import TestimonialCard from '../Components/TestimonialCard'
import axios from 'axios'
import Heading from '../Components/Heading'

const Review = () => {
    const [review, setReview] = useState([])
    const data = () => {
        axios.get('https://share-ab-ite-server.vercel.app/reviews')
            .then(res => setReview(res.data))
    }
    useEffect(() => {
        data()
    }, [])
    return (
        <>
            <Heading heading={'Reviews of our users'} para={'Lets see what our users say about us'} />
            <div className='grid grid-cols-1 md:grid-cols-3 container mx-auto gap-4'>
                {
                    review.map(data => <TestimonialCard key={data._id} data={data} />)
                }
            </div>
        </>
    )
}

export default Review