import React from 'react'
import Avatar from '@mui/material/Avatar';

function Profile({ user }) {
    const data = [{ name: "Aroma", address: "Gouraram", checkin: "Tue Jul 29 2023", checkout: "Mon Jul 31 2023", noofguests: 2, price: 199 }, { name: "7 Hills", address: "Gouraram", checkin: "Tue Jul 29 2023", checkout: "Mon Jul 31 2023", noofguests: 2, price: 199 }]
    return (
        <div>
            <div>
                <Avatar alt={user?.name} src={user?.picture} />
                <h3>{user?.name}</h3>
            </div>
            <table>
                <tr>
                    <th>Hotel Name</th>
                    <th>Hotel Address</th>
                    <th>Check in</th>
                    <th>Check out</th>
                    <th>Number of guests</th>
                    <th>Price</th>
                </tr>

                {data.map(obj => {
                    return (
                        <tr>
                            <td>{obj.name}</td>
                            <td>{obj.address}</td>
                            <td>{obj.checkin}</td>
                            <td>{obj.checkout}</td>
                            <td>{obj.noofguests}</td>
                            <td>$ {obj.price}</td>
                        </tr>
                    )
                })}
            </table>
        </div>
    )
}

export default Profile