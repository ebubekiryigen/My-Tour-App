import Image from "next/image";

type ItemProps = {
    item: {
        imageSrc: string;
        category: string;
        locationValue: string;
        roomCount: number;
        createdAt: Date;
    };
}

const Item:React.FC<ItemProps> = ({
    item
}) => {
  return (
    <div className='w-[49%] flex flex-col border rounded-lg p-3'>
        <div className='flex gap-6'>
            <Image
                src={item.imageSrc}
                width={200}
                height={200}
                className='h-[200px]'
                alt={item.locationValue}
            />
            <div className='flex flex-col gap-2 justify-center'>
                <div className='text-l tracking-wider m-2'>
                    <span className='font-bold'>Category</span> : {item.category}
                </div>
                <div className='text-l tracking-wider m-2'>
                    <span className='font-bold'>Country</span> :  {item.locationValue}
                </div>
                <div className='text-l tracking-wider m-2'>
                    <span className='font-bold'>Number of people</span> : {item.roomCount}
                </div>
            </div>
        </div>
        <div className='m-2 flex justify-between'>
            <div className='font-bold'>{new Date(item.createdAt).toLocaleDateString()}</div>
            <div><button className='underline'>Remove</button></div>
        </div>
    </div>
  )
}

export default Item