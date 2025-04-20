import { Schema, model } from "mongoose";

const projectSchema = new Schema({
    name: { type: String, required: true },
    location: { type: String },
    total_units: { type: Number },
    description: { type: String },
  }, { timestamps: true });
  
  export const Project = model("Project", projectSchema);
  