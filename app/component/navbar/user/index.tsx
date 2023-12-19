'use client'
import {GiHamburgerMenu} from 'react-icons/gi'
import Image from 'next/image'
import { useState } from 'react'
import UserMenuItem from './item'

const User = () => {

    const [openMenu, setOpenMenu] = useState(false)

    return(
        <div onClick={() => setOpenMenu(!openMenu)} className='reletaive flex items-center gap-2 cursor-pointer'>
            <GiHamburgerMenu size={25} />
            <Image
             src = {"https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"}
             alt = 'user profile photo'
             width = {40}
             height = {40}
            />

            {
                openMenu && (
                    <div className='absolute bg-white shadow-lg shadow-gray-500 w-[9.375rem] top-16 right-0'>
                        <UserMenuItem
                            name="Sign In"
                            onClick={() => {}}
                        />
                        <UserMenuItem
                            name="Sign Up"
                            onClick={() => {}}
                        />
                    </div>
                )
            }
        </div>
    )
}

export default User