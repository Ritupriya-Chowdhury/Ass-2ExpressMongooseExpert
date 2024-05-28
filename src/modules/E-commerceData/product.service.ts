import { Product } from "./product.interface";
import { ProductModel } from "./product.model";

const newProductsIntoDB=async (product:Product)=>{
    const result=await ProductModel.create(product);
    return result;
};

// get all products from db
const getAllProductsFromDB = async()=>{
    const result=await ProductModel.find();
    return result;

}



export const ProductServices={
    newProductsIntoDB,
    getAllProductsFromDB
}