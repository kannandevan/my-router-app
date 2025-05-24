import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'
export default function Details() {
    const [user, setUser] = useState(null)
    const { userId } = useParams();
    useEffect(() => {
        axios.get('/data.json')
            .then((response) => {
                const userDetails = response.data.find((userDetails) => userDetails.id == userId);
                if (userDetails) {
                    setUser(userDetails)
                }
            })
            .catch((error) => {
                console.error('Error fetching user details:', error);
            });
    }, [])

    return (
        <div className='page details'>
           {user ? (
                <div>
                    <h2>{user.name}</h2>
                    <p><strong>ID:</strong> {user.id}</p>
                    <p><strong>Class:</strong> {user.class}</p>
                    <p><strong>Address:</strong> {user.address}</p>
                    <p><strong>Phone:</strong> {user.phone}</p>
                    <p><strong>Class : </strong>{user.class}</p>
                    <p><strong>Active:</strong> {user.isActve ? 'Yes' : 'No'}</p>
                </div>
            ) : (
                <p>User not found</p>
            )
            }
        </div>
    )
}