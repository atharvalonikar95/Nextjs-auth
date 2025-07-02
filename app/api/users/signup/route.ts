import { dbConnect } from "@/lib/mongodb";
import User from "@/models/User";
import { NextRequest,NextResponse } from "next/server";
import bcrypt from "bcryptjs";


dbConnect()

export async function POST(request:NextRequest){
    try{

        const reqBody=await request.json()
        const {email,username,password}=reqBody

        console.log(reqBody);

        const user= await User.findOne({email})
        if(user){
            return NextResponse.json({
                error:"User already Exist "
            }, {status:400})
        }


        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt)

        const newUser = new User({
            username,email,password:hashedPassword
        })

        await newUser.save()
        console.log(newUser);

        return NextResponse.json({
            message:"created user successfully",
            success:true,
            status:201,
            newUser
        })

    }
    catch(error:any){
        return NextResponse.json({
            error:error.message
        },{status:500})
    }

}






