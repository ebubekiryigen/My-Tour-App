'use client'
import { GrClose } from "react-icons/gr";
import Button from "../buttons";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: () => void;
    label : string;
    title : string;
    bodyElement?: React.ReactElement;
    footerElement?: React.ReactElement;
}
const Modal:React.FC<ModalProps> = ({
    isOpen,
    onClose,
    onSubmit,
    label,
    title,
    bodyElement,
    footerElement
}) => {

    const closeFunc = () => {
        onClose();
    }

    const submitFunc = () => {
        onSubmit();
    }

    return(
        <div className="bg-black bg-opacity-70 fixed flex items-center justify-center w-full h-full">
            <div className="bg-white rounded-lg p-5 w-1/2">
                <div className="flex items-center justify-between pb-3 mb-3 border-b">
                    <div className="text-2xl">{title}</div>
                    <div onClick={closeFunc} className="cursor-pointer">
                        <GrClose size={25} />
                    </div>
                </div>
                <div>{bodyElement}</div>
                <Button
                 onSubmit={submitFunc}
                 label = {label}
                />
                {footerElement}
            </div>
        </div>
    )
}

export default Modal