import React, { createContext, useState } from 'react'
import { BsEyeSlash, BsEye } from 'react-icons/bs';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import ClipLoader from "react-spinners/ClipLoader";
import useAuth from './Hooks/useAuth';
function Signup() {
    const { setLogin } = useAuth();
    document.body.style.backgroundColor = "#ecf0f1";
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

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    // form handling
    const [formData, setFormData] = useState({
        first: "",
        last: "",
        email: "",
        password: ""

    })
    // Form HandleSubmit
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.first === "" && formData.last === "" && formData.email === "" && formData.password === "") {
            toast.error(`Fields Cannot be Empty`, {
                position: toast.POSITION.BOTTOM_RIGHT,
                autoClose: 3000,
                theme: "colored"
            });
        } else {
            console.log(formData);
            toast.success(`${formData.first} Registered Successfully!`, {
                position: toast.POSITION.BOTTOM_RIGHT,
                autoClose: 3000,
            });
            setLogin(true);
            navigate('/home')

        }

        // navigate('/dashboard')
    }

    // Password Handle
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
    return (
        <>

            {/* <ToastContainer /> */}
            <div className="my-6 flex min-h-full flex-1 flex-col justify-center px-6 py-1 lg:px-8 mb-20">
                <div className="text-center mb-8">
                    <h2 className="text-gray-700 text-5xl font-bold">Create a new Account</h2>
                </div>
                <div className="border-b border-2 w-111 p-5 mx-auto rounded-lg bg-white shadow-xl">
                    {/* <!-- Form Start here --> */}
                    <form onSubmit={handleSubmit}>
                        <div className="flex gap-4 justify-evenly">
                            <div>
                                <label htmlFor="firstName" className="block text-sm font-medium leading-6 text-gray-900">
                                    First Name
                                </label>
                                <div className="mt-2">
                                    <input
                                        name="first"
                                        type="text"
                                        onChange={handleChange}
                                        className="pl-3 block w-48 rounded-md border-2 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="lastName" className="block text-sm font-medium leading-6 text-gray-900">
                                    Last Name
                                </label>
                                <div className="mt-2">
                                    <input
                                        name="last"
                                        type="text"
                                        onChange={handleChange}
                                        className="pl-3 block w-48 rounded-md border-2 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='mt-3'>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    name="email"
                                    type="email"
                                    onChange={handleChange}
                                    className="pl-3 block w-full rounded-md border-2 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className='mt-3'>
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                Password
                            </label>
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
                        </div>

                        <div className="flex flex-col py-3 gap-3 w-96">
                            <p className="text-xs text-gray-400 text-center leading-5 tracking-wider">
                                By clicking Sign Up, you agree to our
                                <a href="/" className="text-blue-500 hover:underline">
                                    Terms, Privacy Policy
                                </a>and<a href="/" className="text-blue-500 hover:underline">
                                    Cookies Policy.
                                </a>
                            </p>
                        </div>
                        <button
                            onClick={handleClick}
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-blue-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                        >
                            {btnloading ? <ClipLoader size={20} color='#fff' /> : 'Sign in'}
                        </button>
                        <div className="text-md text-center pt-5">
                            <a href="#" className="text-lg text-blue-500 font-medium hover:text-blue-600">
                                Already have an account?
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </>

    )

};

export default Signup;