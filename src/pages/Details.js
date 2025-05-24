import React, { use, useEffect, useState } from 'react';
import axios from 'axios';
import './Details.css';
import { useParams, useNavigate, useLocation, NavLink, Outlet } from 'react-router-dom'


export default function Details() {
    const location = useLocation()
    const state = location.state;
    const [user, setUser] = useState(state?.user || null);
    const { userId } = useParams();
    useEffect(() => {
        if (!user) {
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
        }
    }, [user, userId])
    const navigate = useNavigate();
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
           <div className='submenu'>
        <NavLink to={`/users/${userId}/`} state={{ user }} end><span>Marks</span></NavLink>
        <NavLink to={`/users/${userId}/sports`} state={{ user }}><span>Sports</span></NavLink>
        <NavLink to={`/users/${userId}/remarks`} state={{ user }}><span>Remarks</span></NavLink>
      </div>
            <div className='body'>
                <Outlet context={user}/>
            </div>
            <button onClick={() => {
                navigate('..')
            }}>Back</button>
        </div>
    )
}