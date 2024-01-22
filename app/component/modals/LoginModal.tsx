'use client'

import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import Modal from "."
import Input from "../inputs";
import Button from "../buttons";
import {FcGoogle} from "react-icons/fc"
import { useAppDispatch, useAppSelector } from "@/app/redux/hooks";
import { modalBtnClck } from "@/app/redux/slice/modalSlice";

const LoginModal = () => {
    const {register, handleSubmit, watch, formState:{errors}} = useForm<FieldValues>({
        defaultValues:{
            email:"",
            password:""
        }
    });
    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        console.log(data)
    }

    const {loginModal} = useAppSelector(state => state.modal)
    const dispatch = useAppDispatch()

    const bodyElement = (
        <div>
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
            label="sign in with google"
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
                isOpen={loginModal}
                onSubmit={handleSubmit(onSubmit)}
                onClose={()=>{dispatch(modalBtnClck('login'))}} label='Login' title='Login'/>
        </div>
    )
}

export default LoginModal