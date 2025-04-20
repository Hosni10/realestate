import { Schema, model } from "mongoose";


const designerSchema = new Schema({
    user_id: { type: Schema.Types.ObjectId, ref: 'User', required: true }
  });
  
  export const Designer = model("Designer", designerSchema);