import { Product } from "./product.interface";
import { ProductModel } from "./product.model";

const newProductsIntoDB=async(product:Product)=>{
    const result=await ProductModel.create(product);
    return result;
}

export const ProductServices={
    newProductsIntoDB,
}