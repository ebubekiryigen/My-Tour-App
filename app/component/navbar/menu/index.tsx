'use client'
import {FaUmbrellaBeach} from 'react-icons/fa'
import { MdVilla } from "react-icons/md";
import { LiaHotelSolid } from "react-icons/lia";
import { TbCampfireFilled } from "react-icons/tb";
import MenuItem from './item';
import { useSearchParams } from 'next/navigation';

export const menu = [
    {
        name : 'Holiday Village',
        slug : 'holiday-village',
        icon : FaUmbrellaBeach
    },
    {
        name : 'Camp',
        slug : 'camp',
        icon : TbCampfireFilled
    },
    {
        name : 'Hotel',
        slug : 'hotel',
        icon : LiaHotelSolid
    },
    {
        name : 'Villa',
        slug : 'villa',
        icon : MdVilla
    },
]

const Menu = () => {

    const params = useSearchParams();
    const urlItem = params.get('cat')

    return(
        <div className='flex items-center gap-7'>
            {
                menu.map((cat, i) => (
                    <MenuItem
                        key={i}
                        name={cat.name}
                        icon={cat.icon}
                        slug={cat.slug}
                        selected={urlItem == cat.slug ? true : false}
                    />
                ))
            }
        </div>
    )
}

export default Menu