import { NextRequest, NextResponse } from "next/server";

export async function POST(request:NextRequest) {
    try {
        const response = NextResponse.json(
            {message:"Logout Successful",success:'true'},
            {status:200}
        )
    
        response.cookies.set("token", "", {
          httpOnly: true,
          expires: new Date(0), 
        });
    
        return response;
        
    } catch (err:any) {
        console.log(err);
        
    }
    
}