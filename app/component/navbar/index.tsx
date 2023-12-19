'use client'

import Logo from "./logo"
import Menu from "./menu/"
import User from "./user/"

const Navbar = () => {
    return(
        <div className="flex items-center justify-between h-16 bg-gray-100 px-7">
            <Logo />
            <Menu />
            <User />
        </div>
    )
}

export default Navbar