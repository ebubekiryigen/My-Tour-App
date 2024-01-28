import prisma from '@/app/lib/prismadb'
import Item from '../component/item';

type ItemProps = {
    params: {
        category: string
    }
}

const Category:React.FC<ItemProps> = async ({params}) => {
    const listings = await prisma.listing.findMany({
        orderBy : {
            createdAt: "desc"
        }
    })

    return (
        <div className='flex flex-wrap gap-5 m-4'>
            {listings?.map((list, i) => (
                  <Item item={list} key={i}  />
            ))}
        </div>
    )
}

export default Category