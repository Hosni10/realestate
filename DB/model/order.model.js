import { Schema, model } from "mongoose";

const orderSchema = new Schema({
    user_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    unit_id: { type: Schema.Types.ObjectId, ref: 'Unit', required: true },
    total_price: { type: Number },
    status: {
      type: String,
      enum: ['pending', 'processing', 'completed'],
      default: 'pending'
    }
  }, { timestamps: true });
  
  export const Order = model("Order", orderSchema);
  