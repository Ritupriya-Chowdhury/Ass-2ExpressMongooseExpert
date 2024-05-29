import { Schema, model, connect } from 'mongoose';

// 1. Create an interface representing a document in MongoDB.
export type Product = {
 id:string;
  name: string;
  description: string;
  price:number;
  category: string;
  tag: string[];
  variants:[
    {
        type:string;
        value:string;
    }
  ];

  inventory:{
    quantity:number;
    inStock:true|false;
  }

}