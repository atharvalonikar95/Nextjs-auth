import { dbConnect } from "@/lib/mongodb";
import User from "@/models/User";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request:NextRequest){

    try {
        await dbConnect();
        const users = await User.find({});
        return NextResponse.json(users,{status:200})

        
    } catch (error:any) {
        return NextResponse.json(error,{status:500})
    }

}