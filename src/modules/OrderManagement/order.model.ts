import { Schema, model, connect } from 'mongoose';
import { Order } from './order.interface';

const mongoose = require('mongoose');


const orderSchema = new Schema({
  email: {
    type: String,
    required: true,
    match: [/.+@.+\..+/, 'Please enter a valid e-mail address']
  },
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Product'
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  quantity: {
    type: Number,
    required: true,
    min: 1
  }
});


export const OrderModel = model<Order>('Order', orderSchema);
