import { Schema, model } from "mongoose";

const orderDetailSchema = new Schema({
    order_id: { type: Schema.Types.ObjectId, ref: 'Order', required: true },
    space_id: { type: Schema.Types.ObjectId, ref: 'Space' },
    package_id: { type: Schema.Types.ObjectId, ref: 'DesignPackage' },
    customization_id: { type: Schema.Types.ObjectId, ref: 'Customization' },
    service_id: { type: Schema.Types.ObjectId, ref: 'Service' }
  });
  
  export const OrderDetail = model("OrderDetail", orderDetailSchema);
  