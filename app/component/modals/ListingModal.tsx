'use client'

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Modal from ".";
import { useAppDispatch, useAppSelector } from "@/app/redux/hooks";
import { modalBtnClck } from "@/app/redux/slice/modalSlice";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import CategorySelect from "../listing/CategorySelect";
import CountrySelect from "../listing/CountrySelect";
import CounterSelect from "../listing/CounterSelect";
import { menu } from "../navbar/menu";
import Image from "next/image";
import { useState } from "react";
import axios from "axios";
import Input from "../inputs";


const ListingModal = () => {
    const router = useRouter();
    const dispatch = useAppDispatch()
    const {listingModal} = useAppSelector(state => state.modal)
    const [imgsSrc, setImgsSrc] = useState([])
    const { register, handleSubmit, watch, setValue, reset, formState: { errors }} = useForm<FieldValues>({
        defaultValues:{
            imageSrc:'',
            category:'',
            roomCount:1,
            location: null,
            cat:'',
            date:'',
            price:1
        }
    });

    const customSetValue = (id: string, value: any) => {
        setValue(id, value, {
            shouldValidate: true,
            shouldDirty: true,
            shouldTouch: true
        })
    }

    const onSubmit: SubmitHandler<FieldValues> = (data:any) => {
        axios.post('/api/listing', data)
        .then(() => {
            toast.success('Addition successful')
            router.refresh();
            reset()
            dispatch(modalBtnClck('listing'))
        })
        .catch((err) => {
         toast.error('Adding failed!!!')
            console.log(err, "err")
        })
    };

    const category = watch('category');
    const roomCount = watch('roomCount');
    const imageSrc = watch('imageSrc');
    const location = watch('location');
    const date = watch('date');
    const price = watch('price');

    const imageSelectFunc = (e: any) => {
        for (const file of e.target.files) {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                setImgsSrc((imgs):any => [...imgs, reader.result] )
                return customSetValue('imageSrc',reader.result)
            }
            reader.onerror = () => {
                console.log(reader.error)
            }
        }
    }

    const bodyElement = (
        <>
        <div className="flex items-center gap-10 mb-5">
            {
                menu.map((c,i) => (
                <CategorySelect
                    key={i}
                    name={c.name}
                    slug={c.slug}
                    icon={c.icon}
                    onClick={(name, slug) => {
                        customSetValue('category', name);
                        customSetValue('cat', slug);
                    }}
                    selected={category === c.name}
                />
                ))
            }
        </div>
        <div className="mb-5">
            <CountrySelect
            value={location}
            onChange={(value) => {customSetValue('location', value)}}
            />
        </div>
        <div className="mb-5">
            <CounterSelect
            title = "Number of people"
            description = "Select the number of people you will organize the holiday for"
            value={roomCount}
            onChange = {(value) => {customSetValue('roomCount', value)} }
            />
        </div>
        <div className="mb-5">
            <Input
                id="price"
                type="number"
                placeholder="Price"
                value={price}
                register={register}
                errors={errors}
                required
            />
        </div>
        <div className="mb-5">
            <Input
                id="date"
                type="date"
                placeholder="date"
                value={date}
                register={register}
                errors={errors}
                required
            />
        </div>
        <input className="mb-4" multiple type="file" name="file" onChange={val => imageSelectFunc(val)} />
        <div className="mb-5">
            {
                imageSrc &&
                <Image
                src={imageSrc}
                alt=""
                width={200}
                height={200}
                />
            }
        </div>
      </>
    );

    return(
        <div>
            <Modal
                bodyElement={bodyElement}
                isOpen={listingModal}
                onSubmit={handleSubmit(onSubmit)}
                onClose={()=>{dispatch(modalBtnClck('listing'))}} label='Create a list' title='Create a list '/>
        </div>
    )
}

export default ListingModal