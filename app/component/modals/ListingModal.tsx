'use client'

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Modal from ".";
import { useAppDispatch, useAppSelector } from "@/app/redux/hooks";
import { modalBtnClck } from "@/app/redux/slice/modalSlice";
import { signIn } from "next-auth/react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { getSession } from "@/app/actions/getCurrentUser";

const ListingModal = () => {
    const router = useRouter();
    const dispatch = useAppDispatch()
    const {listingModal} = useAppSelector(state => state.modal)
    const {register, handleSubmit, watch, formState:{errors}} = useForm<FieldValues>({
        defaultValues:{
        }
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
    };

    const bodyElement = (
        <div>
            aaa
        </div>
    );

    const footerElement = (
        <div className="mt-5">
            aaaavvv
        </div>
    );

    return(
        <div>
            <Modal
                bodyElement={bodyElement}
                footerElement={footerElement}
                isOpen={listingModal}
                onSubmit={handleSubmit(onSubmit)}
                onClose={()=>{dispatch(modalBtnClck('listing'))}} label='Create a list' title='Create a list '/>
        </div>
    )
}

export default ListingModal