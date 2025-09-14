
import { dbConnect } from "@/lib/mongodb";
import User from "@/models/User";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(request: NextRequest) {

    try {
        await dbConnect();
        const { searchParams } = new URL(request.url);
        const email = searchParams.get('email');
    
        let users;

        if (!email) {
            return NextResponse.json(
                { message:"email is required"}, 
                { status: 400 })
        }
        users = await User.findOneAndDelete({ email })
        // else{
        //     users=await User.deleteMany({})
        // }

        if(!users){
            return NextResponse.json({message:'user not found'},{status:404})
        }

        return NextResponse.json({message:"1 User Deleted Successfully",users}, { status: 200 })
    } catch (error) {
        return NextResponse.json({message:"Error Occured",error}, { status: 500 })
    }


}