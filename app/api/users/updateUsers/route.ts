import { dbConnect } from "@/lib/mongodb";
import User from "@/models/User";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(request:NextRequest){

    try {

        dbConnect()

        const {searchParams}= new URL(request.url);
        const email = searchParams.get('email');

        if(!email){
          return NextResponse.json({ error: "Email is required" }, { status: 400 });
        }

        const user = await User.find({email})
            
        const body = await request.json();
        const { newEmail,newUsername,newFirstname,newLastname,newImage } = body;

    if (!newUsername) {
      return NextResponse.json({ error: "Username is required" }, { status: 400 });
    }

    // Find user by email and update username
    const updatedUser = await User.findOneAndUpdate(
      { email },
      {
        email:newEmail, 
        username:newUsername,
        firstname:newFirstname,
        lastname:newLastname,
        image:newImage 
      },
      { new: true } // return the updated document
    );

    if (!updatedUser) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json(updatedUser, { status: 200 });

  } catch (error: any) {
    console.error("Error updating user:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }

}