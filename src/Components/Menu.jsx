import React from 'react'
import { AiOutlineUser } from 'react-icons/ai';
function Menu() {
    const Menu = ['Profile', 'Setting', 'Log out']
    return (
        <>
            <AiOutlineUser size={26} color='#000' className='cursor-pointer' />
            <div className="">
                <ul>
                    {
                        Menu.map((m, index) => {
                            <li key={index} className='text-black'>{m}</li>
                        })
                    }
                </ul>
            </div>
        </>
    )
}

export default Menu