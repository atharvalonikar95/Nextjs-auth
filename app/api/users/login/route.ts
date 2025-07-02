import { dbConnect } from "@/lib/mongodb";
import User from "@/models/User";
import { NextRequest,NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { signToken } from "@/utils/auth";

await dbConnect()

export async function POST (request:NextRequest){
    try {
        const reqBody= await request.json();
        const {email,password}=reqBody;
        console.log(reqBody);

        const user= await User.findOne({email})
        if (!user){
            return NextResponse.json({
                error:"User does not exist"
            },{status:400})
        }

        const validPassword  =await bcrypt.compare(password,user.password)
        if(!validPassword){
            return NextResponse.json({
                error:"Invalid Password "
            },{status:400})
        }

        const tokendata ={
            id:user._id,
            username:user.username,
            email:user.email
        }

        const token = signToken(tokendata)
        const response =  NextResponse.json({
            message:"Login Successful",
            success:true,
            tokendata,
            token
        },{status:200})

        response.cookies.set("token",token,
            {httpOnly:true}
        )

        return response;
        
        
    } catch (error:any) {
        return NextResponse.json({
            error:error.message
        },{status:500})
    }
}