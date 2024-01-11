'use client'

import Modal from "."

const RegisterModal = () => {

    const bodyElement = (
        <div>
            aaaa
        </div>
    )

    return(
        <div>
            <Modal bodyElement={bodyElement} isOpen onSubmit={()=>{}} onClose={()=>{}} label='Register' title='Register'/>
        </div>
    )
}

export default RegisterModal