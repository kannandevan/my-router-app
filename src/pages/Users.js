import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Users.css'
import { Link, useSearchParams } from 'react-router-dom';

const Users = () => {
    const [data, setData] = useState([]);
    const [searchParams,setSearchParams]=useSearchParams();
    useEffect(() => {
        axios
            .get('/data.json')
            .then((response) => {

                setData(response.data);

            })
            .catch((error) => {
                console.error('Error fetching data:', error);

            });
    }, []); // Run once on mount

    const cls = searchParams.get('class');
    console.log(cls);
    const handleChannge = (e) => {
        const cls = e.target.value;
        setSearchParams({
            class:cls
        })
        
    }

    return (
        <div className="page users">
            <select onChange={handleChannge}>
                <option value="0">-Select Class</option>
                <option value="1">Class 1</option>
                <option value="2">Class 2</option>
                <option value="3">Class 3</option>
                <option value="4">Class 4</option>
                <option value="5">Class 5</option>
                <option value="6">Class 6</option>
                <option value="7">Class 7</option>
                <option value="8">Class 8</option>
                <option value="9">Class 9</option>
                <option value="10">Class 10</option>
            </select>
            {
                data
                .filter((user) => {
                    if(!cls || cls === '0') {
                        return true; // No filter applied
                    }else {
                        return user.class === cls; // Filter by class
                    }
                })
                .map((user, index) => {
                    return (
                        <div className='users-item' key={index}>
                            <div className='name'><Link to={`/details/${user.id}`}>{user.name}</Link> </div>
                            <div className='address'>Address: {user.address || 'No address'}</div>
                            <div className='address'>Class: {user.class || 'No address'}</div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Users;