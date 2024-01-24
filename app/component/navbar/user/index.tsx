'use client'
import {GiHamburgerMenu} from 'react-icons/gi'
import Image from 'next/image'
import { useState } from 'react'
import UserMenuItem from './item'
import { useAppDispatch } from '@/app/redux/hooks'
import { modalBtnClck } from '@/app/redux/slice/modalSlice'
import { User } from '@prisma/client'
import { signOut } from 'next-auth/react'

const UserN = ({user}:{ user: User | any | undefined}) => {

    const [openMenu, setOpenMenu] = useState(false)
    const dispatch = useAppDispatch()

    return(
        <div onClick={() => setOpenMenu(!openMenu)} className='reletaive flex items-center gap-2 cursor-pointer'>
            <div className='text-gray-500 text-sm'>{user?.name}</div>
            <GiHamburgerMenu size={25} />
            <Image
             src = {user?.image || "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"}
             alt = 'user profile photo'
             width = {40}
             height = {40}
             className='rounded-full'
            />

            {
                openMenu && (
                    <div className='absolute bg-white shadow-lg shadow-gray-500 w-[9.375rem] top-16 right-0'>
                        {
                            user ? (
                                <>
                                    <UserMenuItem
                                        name="Create Listing"
                                        onClick={() => {dispatch(modalBtnClck('listing'))}}
                                    />
                                    <UserMenuItem
                                        name="Sign Out"
                                        onClick={() => {signOut()}}
                                    />
                                </>
                            ) : (
                                <>
                                    <UserMenuItem
                                        name="Sign In"
                                        onClick={() => {dispatch(modalBtnClck('login'))}}
                                    />
                                    <UserMenuItem
                                        name="Sign Up"
                                        onClick={() => {dispatch(modalBtnClck('register'))}}
                                    />
                                </>
                            )
                        }

                    </div>
                )
            }
        </div>
    )
}

export default UserN