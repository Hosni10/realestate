import { Schema, model } from "mongoose";

const brokerSchema = new Schema({
    user_id: { type: Schema.Types.ObjectId, ref: 'User', required: true }
  });
  
  export const Broker = model("Broker", brokerSchema);
  