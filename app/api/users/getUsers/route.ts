import { dbConnect } from "@/lib/mongodb";
import User from "@/models/User";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {

    try {
        await dbConnect();

        const { searchParams } = new URL(request.url);
        const email = searchParams.get("email");

        // if (!email) {
        //     return NextResponse.json({ error: "Email is required" }, { status: 400 });
        // }

        let users;
        let userCount;
        if(email){
            users = await User.find({ email: { $regex: new RegExp(email, 'i') } });
        }
        else{

            users = await User.find({});
            userCount= users.length
        } 
        return NextResponse.json({users}, { status: 200 })


    } catch (error: any) {
        return NextResponse.json(error, { status: 500 })
    }

}