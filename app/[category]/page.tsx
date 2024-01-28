import prisma from '@/app/lib/prismadb'
import Item from '../component/item';
import getCurrentUser from '../actions/getCurrentUser';

type ItemProps = {
    params: {
        category: string
    }
}

const Category:React.FC<ItemProps> = async ({params}) => {
    const user = await getCurrentUser();
    let listings = [];
    if (user) {
        listings = await prisma.listing.findMany({
            where: {
                userId: user.id,
                cat: params.category,
            },
            orderBy : {
                createdAt: "desc"
            }
        })
    }

    return (
        <div className='flex flex-wrap gap-5 m-4'>
            {user ? listings?.map((list:any, i:any) => (
                  <Item item={list} key={i}  />
            )):
            <div className='w-full text-xl flex justify-center items-center'>
                <span>Please log in</span>
            </div>
            }
        </div>
    )
}

export default Category