import React, { useState, useEffect } from 'react';
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { VscThreeBars } from 'react-icons/vsc';
import { GrClose } from 'react-icons/gr';
import { toast } from 'react-toastify';
import { Link, useNavigate } from "react-router-dom";
import useAuth from "./Hooks/useAuth";
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { AuthContext } from './Context/AuthContextProvider';



function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function Navbar() {
    const navList = ["Home", "Products", "Categroies", "Contact", "About", "Todo", "Users"];
    const [isOpen, setIsOpen] = useState(true);
    const { login, setLogin } = useAuth(false);
    const [buttonText, setButtonText] = useState('');

    const location = useNavigate();
    const currentPath = window.location.pathname;

    let imageData = localStorage.getItem("image")


    useEffect(() => {
        // console.log("Image from Context : ", image)
        changeButtonText();
    }, [currentPath]);
    const pathh = currentPath === '/login'
    const changeButtonText = () => {
        if (currentPath === '/login') {
            setButtonText('Sign up');
            // location('/signup')
        } else {
            setButtonText('Login');
            // location('/login')
        }
    };



    // console.log(login)
    // user Logged Out
    const history = useNavigate();
    const handleSignOut = () => {
        setLogin(false);
        // localStorage.removeItem("");
        toast.success('Logged Out Successfully!', {
            position: "bottom-right",
            autoClose: 2000,
        });
        history('/login');
        localStorage.clear();
    };
    return (
        <div className='sticky top-0 z-50'>
            <nav className="bg-slate-900  shadow-xl ">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 ">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <Link to={'/home'} className="text-transparent text-2xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 font-black uppercase content-center relative before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-gradient-to-r before:from-purple-400 before:to-pink-600 before:transition hover:before:scale-100 cursor-pointer">{login ? 'True' : 'False'}</Link>
                            </div>
                        </div>
                        <div className="hidden md:block ml-10">
                            <div className="flex items-center space-x-4 ">
                                {
                                    navList.map((list, id) => {
                                        return (
                                            <div key={id} className="flex px-3">
                                                <Link key={list.id} to={`${list.toLowerCase()}`} className="relative font-medium text-white before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-white before:transition hover:before:scale-100">
                                                    {list}
                                                </Link>
                                            </div>
                                        );
                                    })
                                }
                            </div>
                        </div>
                        <div className="flex items-center gap-8">
                            <div className="relative inline-flex w-fit">
                                <div
                                    className="absolute bottom-auto left-auto right-0 top-0 z-10 inline-block -translate-y-1/2 translate-x-2/4 rotate-0 skew-x-0 skew-y-0 scale-x-100 scale-y-100 whitespace-nowrap rounded-full bg-indigo-700 p-1.5 px-2 text-center align-baseline text-xs font-medium leading-none text-white">
                                    0
                                </div>
                                <Link
                                to={'/cart'}
                                    type="button"
                                    className={classNames(login ? 'mr-0' : 'mr-3')}>
                                    <AiOutlineShoppingCart color='#fff' size={24} />
                                </Link>
                            </div>

                            {
                                !login ? (
                                    <Link to={pathh ? '/signup' : '/login'}
                                        // onChange={changeButtonText}
                                        className="inline-block rounded-xl bg-indigo-600 px-5 py-1.5 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none  active:bg-indigo-500"
                                    >{buttonText}</Link>
                                ) : (
                                    //  {/* Profile dropdown */}
                                    <Menu as="div" className="relative ml-3">
                                        <div>
                                            <Menu.Button className="border-2 border-white flex rounded-full bg-gray-800 text-sm ">
                                                <span className="sr-only">Open user menu</span>
                                                <img
                                                    className="h-8 w-8 rounded-full"
                                                    src={imageData}
                                                    alt=""
                                                />
                                            </Menu.Button>
                                        </div>
                                        <Transition
                                            as={Fragment}
                                            enter="transition ease-out duration-100"
                                            enterFrom="transform opacity-0 scale-95"
                                            enterTo="transform opacity-100 scale-100"
                                            leave="transition ease-in duration-75"
                                            leaveFrom="transform opacity-100 scale-100"
                                            leaveTo="transform opacity-0 scale-95"
                                        >
                                            <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <Link to={'/profile'}
                                                            href="#"
                                                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                        >
                                                            Your Profile
                                                        </Link>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <a
                                                            href="#"
                                                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                        >
                                                            Settings
                                                        </a>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <a
                                                            onClick={handleSignOut}
                                                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                        >
                                                            Sign out
                                                        </a>
                                                    )}
                                                </Menu.Item>
                                            </Menu.Items>
                                        </Transition>
                                    </Menu>
                                )
                            }

                        </div>
                        <div className="-mr-2 flex md:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                type="button"
                                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white"
                                aria-controls="mobile-menu"
                                aria-expanded="false"
                            >
                                <span className="sr-only">Open main menu</span>
                                {!isOpen ? (
                                    <VscThreeBars size={26} />
                                ) : (
                                    <GrClose size={26} color="white" className="hover:text-white" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                <Transition
                    show={isOpen}
                    enter="transition ease-out duration-100 transform"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-75 transform"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    {
                        <div className="md:hidden" id="mobile-menu">
                            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                {navList.map((list, id) => (
                                    <div key={id}>
                                        <Link to={`${list.toLowerCase()}`}
                                            className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium decoration-0"
                                        >
                                            {list}
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    }

                </Transition>

            </nav >


        </div >
    );
}

export default Navbar;