import { Schema, model } from "mongoose";

const spaceSchema = new Schema({
    unit_id: { type: Schema.Types.ObjectId, ref: 'Unit', required: true },
    name: { type: String, required: true }
  });
  
  export const Space = model("Space", spaceSchema);
  