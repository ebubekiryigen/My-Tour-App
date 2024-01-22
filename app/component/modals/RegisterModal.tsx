'use client'

import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import Modal from "."
import Input from "../inputs";
import Button from "../buttons";
import {FcGoogle} from "react-icons/fc"

const RegisterModal = () => {
    const {register, handleSubmit, watch, formState:{errors}} = useForm<FieldValues>({
        defaultValues:{
            name:"",
            email:"",
            password:""
        }
    });
    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        console.log(data)
    }

    const bodyElement = (
        <div>
         <Input
          id="name"
          type="text"
          placeholder="Name"
          register={register}
          errors={errors}
          required
         />
          <Input
          id="email"
          type="text"
          placeholder="Email"
          register={register}
          errors={errors}
          required
         />
          <Input
          id="password"
          type="password"
          placeholder="Password"
          register={register}
          errors={errors}
          required
         />
        </div>
    )

    const footerElement = (
        <div className="mt-5">
            <Button
            label="Google İle Giriş yap"
            outline
            icon={FcGoogle}
            onSubmit={()=>{onSubmit}} />
        </div>
    )

    return(
        <div>
            <Modal bodyElement={bodyElement} footerElement={footerElement} isOpen onSubmit={handleSubmit(onSubmit)} onClose={()=>{}} label='Register' title='Register'/>
        </div>
    )
}

export default RegisterModal