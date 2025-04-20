import { Schema, model } from "mongoose";

const unitSchema = new Schema({
    project_id: { type: Schema.Types.ObjectId, ref: 'Project', required: true },
    area: { type: Number },
    floor: { type: Number },
    status: {
      type: String,
      enum: ['available', 'reserved', 'sold'],
      default: 'available'
    }
  });
  
  export const Unit = model("Unit", unitSchema);
  