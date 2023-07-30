import React, { useEffect, useState } from 'react'
import ResponsiveAppBar from './AppBar';
// import { useParams } from 'react-router-dom';


function Hotel({ user, slug }) {
    const [hotelInfo, setHotelInfo] = useState({})

    useEffect(() => {
        fetch(`https://hotels-api-4ltr.onrender.com/api/hotels/${slug}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setHotelInfo((prev) => {
                    return { ...prev, ...data }
                });
            })
    }, [])

    return (
        <div>
            {hotelInfo.name}
            {hotelInfo.address}
            {hotelInfo.rating}
        </div>
    )
}

export default Hotel