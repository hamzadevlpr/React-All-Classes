import React, { useEffect, useState } from 'react'

import axios from 'axios';
import ClipLoader from "react-spinners/ClipLoader";
import SocialIcons from '../SocialIcons';

function Users() {
    const [loading, setLoading] = useState(true);
    const [users, setUsers] = useState([]);
    useEffect(() => {
        axios
            .get('http://localhost:4050/users')
            .then((response) => {
                setUsers(response.data);
            })
            .catch((error) => {
                console.log("Server not responding:", error);
            })
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }, []);


    return (
        <>
            {
                loading ?
                    <div className="flex justify-center items-center h-[75vh]">
                        <ClipLoader
                            color="#000"
                            loading={loading}
                            size={80}
                        />
                    </div>
                    :
                    <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 md:grid-cols-3 md:grid-cols-2">

                        {
                            users.map((items, index) => {
                                return (
                                    <div className="border-2 shadow-xl rounded-xl p-5 m-5">
                                        <div>
                                            <img src={items.pic} alt="" className="w-24 h-24 mx-auto rounded-full dark:bg-gray-500 aspect-square" />
                                        </div>
                                        <div className="space-y-4 text-center divide-y divide-gray-700">
                                            <div className="my-2 space-y-1">
                                                <h2 className="text-xl font-semibold sm:text-2xl">{items.username}</h2>
                                                <p className="px-5 text-xs sm:text-base dark:text-gray-400">Software Engineer</p>
                                            </div>
                                            <SocialIcons />
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
            }
        </>
    )
}

export default Users