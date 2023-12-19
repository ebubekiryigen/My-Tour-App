'use client'

import { IconType } from "react-icons";

interface ButtonProps {
    onSubmit: (e:React.MouseEvent<HTMLButtonElement>) => void;
    label: string;
    outline?: boolean;
    icon?: IconType
}
const Button:React.FC<ButtonProps> = ({
    onSubmit,
    label,
    outline,
    icon: Icon
}) => {
    return(
        <button onClick={onSubmit} className={` w-full h-12 ${outline ? "border border-black" : "bg-black text-white"} rounder-md flex items-center justify-center gap-2 cursor-pointer `}>
            {Icon && <Icon size={25} />}
            {label}
        </button>
    )
}

export default Button