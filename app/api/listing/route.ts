import getCurrentUser from "@/app/actions/getCurrentUser";
import { NextResponse } from "next/server";
import prisma from '@/app/lib/prismadb';

export async function POST(request: Request){
 const user = await getCurrentUser();

 if(!user){
    return NextResponse.error();
 }

 const body = await request.json();

 const {imageSrc, category, roomCount, location, cat, price, date} = body;

  Object.keys(body).forEach((value :any) => {
     if(!body[value]){
        NextResponse.error()
     }
  })

  const listing = await prisma.listing.create({
    data:{
        imageSrc,
        category,
        cat,
        price,
        date,
        roomCount,
        locationValue: location.value,
        userId: user.id
    }
  })

  if(!listing){
     NextResponse.error();
  }

  return NextResponse.json(listing);
}