import { Schema, model } from "mongoose";

const serviceSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true }
  });
  
  export const Service = model("Service", serviceSchema);
  