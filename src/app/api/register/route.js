import Student from "@/src/models/studentModel";

import { connect } from "@/src/dbconfig/dbconfig";

import { NextResponse } from "next/server";

export async function POST(request){
    try{
        await connect();

        const reqBody=await request.json();
        const {name,usn,branch,email,phone,queries}=reqBody;

        const newStud=Student({
            name,
            usn,
            branch,
            email,
            phone,
            queries
        })


        const savedUser=await newStud.save();

        return NextResponse.json({
            message:"Created User successfully",
            success:true,
            savedUser
        })
    }
    catch(error){
        return NextResponse.json({message:error.message},{status:500})
    }
}