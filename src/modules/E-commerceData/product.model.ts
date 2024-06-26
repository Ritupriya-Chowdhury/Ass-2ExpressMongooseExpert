import { Schema, model, connect } from 'mongoose';
import { Product } from './product.interface';

const productSchema = new Schema({
  id: {
    type: String,
    required: true,
    unique: true
},
name: {
    type: String,
    required: true
},
description: {
    type: String,
    required: true
},
price: {
    type: Number,
    required: true
},
category: {
    type: String,
    required: true
},
tags: {
    type: [String],
    required: true
},
variants: [{
    type: {
        type: String,
        required: true
    },
    value: {
        type: String,
        required: true
    }
}],
inventory: {
    quantity: {
        type: Number,
        required: true
    },
    inStock: {
        type: Boolean,
        required: true
    }
}
});

export const ProductModel = model<Product>('Product', productSchema);
  
  