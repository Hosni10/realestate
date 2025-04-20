import { Schema, model } from "mongoose";


const designPackageSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true }
  });
  
  export const DesignPackage = model("DesignPackage", designPackageSchema);
  