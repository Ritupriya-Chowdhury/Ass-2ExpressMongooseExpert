import { Product } from "./product.interface";
import { ProductModel } from "./product.model";

const newProductsIntoDB=async(products:Product)=>{
    const result=await ProductModel.create(products);
    return result;
}

export const ProductServices={
    newProductsIntoDB
}