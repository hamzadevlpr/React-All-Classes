import React, { useState, useEffect, useContext } from 'react'
import { BsEyeSlash, BsEye } from 'react-icons/bs';
import axios from 'axios';
import useAuth from './Hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import ClipLoader from "react-spinners/ClipLoader";

export default function Login() {
    const { setLogin } = useAuth();
    const [passwordType, setPasswordType] = useState("password");
    const [passwordInput, setPasswordInput] = useState("");


    // Sign in Button Loading
    const [btnloading, tsetLoading] = useState(false);
    const handleClick = () => {
        tsetLoading(true);

        setTimeout(() => {
            tsetLoading(false);
        }, 1000);
    };

    // Password Toggle Button
    const handlePasswordChange = (evnt) => {
        setPasswordInput(evnt.target.value);
    }
    const togglePassword = () => {
        if (passwordType === "password") {
            setPasswordType("text")
            return;
        }
        setPasswordType("password")
    }

    // Form Handling Start
    const navigate = useNavigate();
    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const TargetEmail = e.target.email.value;
            const TargetPass = e.target.password.value;

            const url = 'https://dummyjson.com/users';
            const response = await axios.get(url);
            const users = Array.isArray(response.data.users) ? response.data.users : []; // Ensure users is an

            const foundUser = users.find((user) => user.email === TargetEmail && user.password === TargetPass);
            if (foundUser) {
                // console.log("image= >." ,foundUser.image)
                localStorage.setItem('image', foundUser.image)
                localStorage.setItem('firstName', foundUser.firstName)
                localStorage.setItem('lastName', foundUser.lastName)
                localStorage.setItem('gender', foundUser.gender)
                localStorage.setItem('age', foundUser.age)
                localStorage.setItem('phone', foundUser.phone)
                localStorage.setItem('birthDate', foundUser.birthDate)
                localStorage.setItem('address', `${foundUser.address.address}, ${foundUser.address.city}`)
                localStorage.setItem('email', foundUser.email)
                localStorage.setItem('postalCode', foundUser.address.postalCode)

                toast.success('Logged in Successfully!', {
                    position: "bottom-right",
                    autoClose: 2000,
                });
                setLogin(true);
                navigate('/home');
            } else {
                toast.error('Invalid Credentials', {
                    position: "bottom-right",
                    autoClose: 2000
                });
            }
        } catch (error) {
            // Handle error
            console.log('An error occurred:', error);
        }

    }
    return (
        <>
            {/* border-b border-2 w-111 p-5 mx-auto rounded-lg bg-white shadow-xl */}
            <div className="my-6 flex flex-col justify-center px-6 py-1 lg:px-8">
                <div className="text-center mb-8">
                    <h2 className="text-gray-700 text-5xl font-bold">Welcome Back ;</h2>
                </div>
                <div className="w-full border-b border-2 mx-auto rounded-lg bg-white mt-10 sm:mx-auto sm:w-[80rem] sm:max-w-sm border-grey-500 p-8 shadow-xl ">

                    <form className="space-y-6" onSubmit={handleSubmit} >
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    className="pl-3 block w-full rounded-md border-2 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                    Password
                                </label>
                            </div>
                            <div className="mt-2 flex relative">
                                <input
                                    id="password"
                                    name="password"
                                    type={passwordType}
                                    onChange={handlePasswordChange}
                                    value={passwordInput}
                                    className="pl-3 block w-full rounded-md border-2 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
                                />
                                <span className="absolute right-2 top-2.5  cursor-pointer " onClick={togglePassword}>
                                    {passwordType === "password" ? <BsEyeSlash size={20} /> : <BsEye size={20} />}
                                </span>
                            </div>
                            <div className="text-sm text-center pt-5">
                                <a href="#" className="font-semibold text-blue-500 hover:text-blue-600">
                                    Forgotten password?
                                </a>
                            </div>
                        </div>

                        <div>
                            <button
                                onClick={handleClick}
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-blue-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                            >
                                {btnloading ? <ClipLoader size={20} color='#fff' /> : 'Sign in'}
                            </button>
                        </div>
                    </form>

                </div>
            </div >

        </>
    )
}
