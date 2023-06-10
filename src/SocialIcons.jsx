import React from 'react'

import { BsFacebook } from 'react-icons/bs';
import { AiFillInstagram, AiFillGithub } from 'react-icons/ai';
import { FaLinkedin } from 'react-icons/fa';

function SocialIcons() {
    return (
        <>
            <div className="flex justify-center pt-2 space-x-4 align-center">
                <a rel="noopener noreferrer" href="#" aria-label="GitHub" className="p-2 rounded-md dark:text-gray-100 hover:text-indigo-500">
                    <AiFillGithub size={20} />
                </a>
                <a rel="noopener noreferrer" href="#" aria-label="Dribble" className="p-2 rounded-md dark:text-gray-100 hover:text-indigo-500">
                    <BsFacebook size={20} />
                </a>
                <a rel="noopener noreferrer" href="#" aria-label="Twitter" className="p-2 rounded-md dark:text-gray-100 hover:text-indigo-500">
                    <AiFillInstagram size={21} />
                </a>
                <a rel="noopener noreferrer" href="#" aria-label="Email" className="p-2 rounded-md dark:text-gray-100 hover:text-indigo-500">
                    <FaLinkedin size={20} />
                </a>
            </div>
        </>
    )
}

export default SocialIcons