'use client'

import { User } from "@prisma/client"
import Logo from "./logo"
import Menu from "./menu/"
import UserN from "./user/"

const Navbar = ({user}:{ user: User | any | undefined}) => {
    return(
        <div className="flex items-center justify-between h-16 bg-gray-100 px-7">
            <Logo />
            <Menu />
            <UserN  user={user} />
        </div>
    )
}

export default Navbar