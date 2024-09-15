import { NextResponse } from "next/server.js";
import {dbConnect} from "../../../../config/db.js"
import { Query } from "@/models/query.js";



export async function POST(request) {
    await dbConnect()
    const { name, email, phoneNumber ,message,service} =
      await request.json();
      console.log(name);
    try {
  
      if(!name || name == ""){
          return NextResponse.json({message:"Full Name is required"},{status:500})
      }
  
      else if(!email || email == ""){
        return NextResponse.json({message:"Email is required"},{status:500})
      }
  
      else if(!phoneNumber || phoneNumber == ""){
        return NextResponse.json({message:"Contact is required"},{status:500})
      }
  
      
  
      else if(!message || message == ""){
        return NextResponse.json({message:"Query Content is required"},{status:500})
      }
      else if(!service || service == ""){
        return NextResponse.json({message:"service is required"},{status:500})
    }
  
  
      const query = new Query({
        name,
        email,
        phoneNumber,
        message,
       
        service,
        
      });
      await query.save();
  
    //   await mailResponse(fullName,email)
  
      
      return NextResponse.json({
        data: query,
        message: "Query Saved Sucessfully",
      });
    } catch (error) {
      return NextResponse.json({message:"error in posting query"}, {status:500});
    }
  }
  