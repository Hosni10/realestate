import { Schema, model } from "mongoose";

const customizationSchema = new Schema({
    package_id: { type: Schema.Types.ObjectId, ref: 'DesignPackage', required: true },
    material: { type: String },
    color: { type: String },
    additional_cost: { type: Number, default: 0 }
  });
  
  export const Customization = model("Customization", customizationSchema);
  