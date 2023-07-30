import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'

function Hotel({ slug }) {
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
    }, [slug])

    return (
        <div>
            <h4>{hotelInfo.name}</h4>
            <div className='images-container'>
                {hotelInfo.images?.map((imgObj) => {
                    return (
                        <img key={imgObj.id} alt='interior-image' src={imgObj.img} />
                    )
                })}
            </div>
            {
                hotelInfo.rooms?.map(room => {
                    return (
                        <span key={room.id} style={{ fontSize: "0.8rem", fontWeight: "bold", color: "grey", marginRight: "1rem" }}>{room.content}</span>
                    )
                })
            }
            <h4 style={{ lineHeight: 2, textAlign: "justify", margin: '1rem 0' }}>{hotelInfo.aboutThePlace}</h4>
            <h3>What this place offers!!</h3>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: "space-between" }}>
                <ul style={{ marginTop: '1rem' }}>
                    {
                        hotelInfo.features?.map(feature => {
                            return (
                                <li key={feature.id} style={{ listStyle: "none", lineHeight: '2', fontSize: '1rem', fontWeight: 'bold' }}>{feature.text}</li>
                            )
                        })
                    }
                </ul>
                <Button sx={{ border: '1px solid lightblue', fontSize: '12px', fontWeight: 'bold' }}>Reserve</Button>
            </div>


        </div>
    )
}

export default Hotel