'use client'

import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import Modal from "."
import Input from "../inputs";
import Button from "../buttons";
import {FcGoogle} from "react-icons/fc"
import { useAppDispatch, useAppSelector } from "@/app/redux/hooks";
import { modalBtnClck } from "@/app/redux/slice/modalSlice";

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

    const {registerModal} = useAppSelector(state => state.modal)
    const dispatch = useAppDispatch()

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
            label="sign up with google"
            outline
            icon={FcGoogle}
            onSubmit={()=>{onSubmit}} />
        </div>
    )

    return(
        <div>
            <Modal
                bodyElement={bodyElement}
                footerElement={footerElement}
                isOpen={registerModal}
                onSubmit={handleSubmit(onSubmit)}
                onClose={()=>{dispatch(modalBtnClck('register'))}} label='Register' title='Register'/>
        </div>
    )
}

export default RegisterModal