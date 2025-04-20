import { Schema, model } from "mongoose";


const adminSchema = new Schema({
    user_id: { type: Schema.Types.ObjectId, ref: 'User', required: true }
  });
  
  export const Admin = model("Admin", adminSchema);