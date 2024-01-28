'use client'
import { useRouter } from "next/navigation"
import { IconType } from "react-icons"

interface MenuItemProps {
    name: string,
    slug: string,
    icon: IconType,
    selected: boolean
}
const MenuItem:React.FC<MenuItemProps> = ({
    name,
    icon: Icon,
    slug,
    selected
}) => {

    const router = useRouter()

    return(
        <div onClick={() => router.push(`/${slug}`)} className={`flex items-center gap-2 cursor-pointer ${selected && 'border-b border-solid border-black pb-2'}`}>
            <Icon size={20} />
            <div className="tracking-wider">{name}</div>
        </div>
    )
}

export default MenuItem