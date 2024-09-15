import mongoose, { Schema } from "mongoose";



const querySchema = new Schema({
  name: { 
    type: String, 
    required: true 
  },
  email: { 
    type: String, 
    required: true 
  },
  phoneNumber: { 
    type: String, 
    required: true 
  },
  
  message: { 
    type: String, 
    required: true 
  },
  
  service: { 
    type: String, 
    required: true
  },
  // assignTo: { type: String, required: true, default: "Garvit Chawla" },
  is_deleted:{
    type:Boolean,
    default:false
  }
}

    
  
  
  
  
  );

export const Query = mongoose.models.queries || mongoose.model("queries", querySchema);
