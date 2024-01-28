import prisma from '@/app/lib/prismadb'
import Item from './component/item';

const Page = async() => {
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

export default Page