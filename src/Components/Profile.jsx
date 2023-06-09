import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { FcOldTimeCamera } from 'react-icons/fc';
import { AiOutlineEdit } from 'react-icons/ai';
import { FiUser } from 'react-icons/fi';
import useAuth from './Hooks/useAuth';
import ErrorPage from './ErrorPage';
import { useEffect } from 'react';

const Profile = () => {
    const { login } = useAuth();
    let imageData = localStorage.getItem("image")
    const [age, setAge] = useState(null);

    useEffect(() => {
        // Retrieve birth date value from localStorage
        const birthDate = localStorage.getItem('birthDate');

        if (birthDate) {
            // Convert the birth date string to a Date object
            const birthDateObj = new Date(birthDate);

            // Calculate the difference between the current date and the birth date
            const currentDate = new Date();
            const ageInMillis = currentDate - birthDateObj;

            // Convert the age from milliseconds to years (assuming a 365-day year)
            const millisecondsPerYear = 365.25 * 24 * 60 * 60 * 1000;
            const ageInYears = Math.floor(ageInMillis / millisecondsPerYear);

            setAge(ageInYears);
        } else {
            setAge(null);
        }
    }, []);

    const [profilePic, setProfilePic] = useState(null);
    const [coverPic, setCoverPic] = useState(null);

    const handleProfilePicDrop = (acceptedFiles) => {
        setProfilePic(URL.createObjectURL(acceptedFiles[0]));
    };

    const handleCoverPicDrop = (acceptedFiles) => {
        setCoverPic(URL.createObjectURL(acceptedFiles[0]));
    };

    const { getRootProps: getProfilePicRootProps, getInputProps: getProfilePicInputProps } = useDropzone({
        // accept: 'image/*',
        onDrop: handleProfilePicDrop,
    });

    const { getRootProps: getCoverPicRootProps, getInputProps: getCoverPicInputProps } = useDropzone({
        // accept: 'image/*',
        onDrop: handleCoverPicDrop,
    });
    const gender = localStorage.getItem("gender");
    const capitalizedGender = gender.charAt(0).toUpperCase() + gender.slice(1);

    const [birthday, setBirthday] = useState(localStorage.getItem('birthDate'));

    const handleDateChange = (event) => {
        const selectedDate = event.target.value;
        setBirthday(selectedDate);
    };
    return (
        <>


            {
                login ?
                    <>
                        <div className="mx-auto">

                            {/* // cover image uploader */}
                            <div className="mb-6 relative">
                                <div className="w-screen h-60 border-2 border-black text-center  bg-white shadow-xl" {...getCoverPicRootProps()}>
                                    {coverPic ? (
                                        <img src={coverPic} alt="Cover" className="w-screen h-60 object-center object-fit mx-auto" />
                                    ) : (
                                        <div className="text-gray-500">
                                            <input {...getCoverPicInputProps()} />
                                            <FcOldTimeCamera className='absolute bottom-5 right-5 w-6 h-6 cursor-pointer' />
                                        </div>
                                    )}
                                </div>
                            </div>


                            {/* // profile image uploader */}
                            <div className="flex justify-center items-center">
                                <div className="relative">
                                    <div className="-mt-[6.5rem]">
                                        <div className="border-2 border-black w-36 h-36 rounded-full bg-white shadow-xl" {...getProfilePicRootProps()} >
                                            {imageData ? (
                                                <img src={imageData} alt="Profile" className="object-fit object-center rounded-full mx-auto" />
                                            ) : (
                                                <div className="text-gray-500">
                                                    <input  {...getProfilePicInputProps()} />
                                                    <FcOldTimeCamera className="absolute bottom-5 right-0 w-6 h-6 cursor-pointer" />
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-5 bg-white w-max mx-auto p-5 shadow-xl rounded-xl border-2">
                                <div className="flex items-center  text-gray-900 leading-8 relative">
                                    <div className='flex items-center space-x-2 font-semibold'>
                                        <span className="text-green-500">
                                            <FiUser />
                                        </span>
                                        <span className="tracking-wide">About</span>
                                    </div>
                                    <button title='Edit' className="text-gray-800 absolute right-3">
                                        <AiOutlineEdit size={23} />
                                    </button>
                                </div>

                                <div className="text-gray-700">
                                    <div className="grid md:grid-cols-2 text-sm">
                                        <div className="grid grid-cols-2">
                                            <div className="px-4 py-2 font-semibold">First Name</div>
                                            <input type='text' className="outline-none px-4 py-2" value={localStorage.getItem("firstName")} />
                                        </div>
                                        <div className="grid grid-cols-2">
                                            <div className="px-4 py-2 font-semibold">Last Name</div>
                                            <input type='text' className="outline-none px-4 py-2" value={localStorage.getItem("lastName")} />
                                        </div>
                                        <div className="grid grid-cols-2">
                                            <div className="px-4 py-2 font-semibold">Gender</div>
                                            <input type='text' className="outline-none px-4 py-2" value={capitalizedGender} />
                                        </div>
                                        <div className="grid grid-cols-2">
                                            <div className="px-4 py-2 font-semibold">Contact No.</div>
                                            <input type='text' className="outline-none px-4 py-2" value={localStorage.getItem("phone")} />
                                        </div>
                                        <div className="grid grid-cols-2">
                                            <div className="px-4 py-2 font-semibold">Current Address</div>
                                            <input type='text' className="outline-none px-4 py-2" value={localStorage.getItem("address")} />
                                        </div>
                                        <div className="grid grid-cols-2">
                                            <div className="px-4 py-2 font-semibold">Permanant Address</div>
                                            <input type='text' className="outline-none px-4 py-2" value={localStorage.getItem("address")} />
                                        </div>
                                        <div className="grid grid-cols-2">
                                            <div className="px-4 py-2 font-semibold">Email.</div>
                                            <input type='email' className="outline-none px-4 py-2 text-purple-600" value={localStorage.getItem("email")} />
                                        </div>
                                        <div className="grid grid-cols-2">
                                            <div className="px-4 py-2 font-semibold">Birthday</div>
                                            <input type="date" className="outline-none px-4 py-2" value={birthday} onChange={handleDateChange} />
                                        </div>
                                        <div className="grid grid-cols-2">
                                            <div className="px-4 py-2 font-semibold">Age</div>
                                            {age !== null ? (
                                                <p className="px-4 py-2">{age}</p>
                                            ) : (
                                                <p className="px-4 py-2">Birth date not found in localStorage.</p>
                                            )}
                                        </div>
                                        <div className="grid grid-cols-2">
                                            <div className="px-4 py-2 font-semibold">Postal Code</div>
                                            <input type='number' className="outline-none px-4 py-2" value={localStorage.getItem("postalCode")} />
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </>
                    : <ErrorPage />
            }

        </>
    );
};

export default Profile;
