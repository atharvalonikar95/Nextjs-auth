import { dbConnect } from "@/lib/mongodb";
import User from "@/models/User";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(request: NextRequest) {

  try {

    dbConnect()

    const { searchParams } = new URL(request.url);
    const email = searchParams.get('email');

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const user = await User.find({ email })

    const body = await request.json();
    const { newEmail, newUsername, newFirstname, newLastname, newImage } = body;

    if (!newUsername) {
      return NextResponse.json({ error: "Username is required" }, { status: 400 });
    }

    let base64str = null
    if (newImage) {
      const base64Data = newImage.split(",")[1];
      base64str = Buffer.from(base64Data, "base64");
    }

    // Find user by email and update username
    const updatedUser = await User.findOneAndUpdate(
      { email },
      {
        email: newEmail,
        username: newUsername,
        firstname: newFirstname,
        lastname: newLastname,
        image: base64str
      },
      { new: true } // return the updated document
    );

    if (!updatedUser) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Convert buffer back to base64 for frontend
    let userObj = updatedUser.toObject();
    if (userObj.image) {
      userObj.image = `data:image/jpg;base64,${userObj.image.toString("base64")}`;
    }

    return NextResponse.json(userObj, { status: 200 });

  } catch (error: any) {
    console.error("Error updating user:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }

}