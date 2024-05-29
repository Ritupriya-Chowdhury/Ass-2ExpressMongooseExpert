import mongoose from "mongoose";
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

//get one product from db
const getOneProductFromDB = async(id:string)=>{
const result=await ProductModel.findOne({id});
    return result;

}

// Update product by id
const updateProductById = async (id: string, updateData: Partial<Product>) => {
    const result = await ProductModel.findOneAndUpdate({ id }, updateData, { new: true });
    if (!result) {
        throw new Error('Product not found');
    }
    return result;
};



// Delete product by id
const deleteProductById = async (id: string) => {
    const result = await ProductModel.findOneAndDelete({ id });
    if (!result) {
        throw new Error('Product not found');
    }
    return result;
};


//Search product by term 
const searchProductsByTerm = async (searchTerm: string) => {
    const result = await ProductModel.find({
        $or: [
            { name: { $regex: searchTerm, $options: 'i' } },
            { description: { $regex: searchTerm, $options: 'i' } },
            { category: { $regex: searchTerm, $options: 'i' } },
            { tag: { $regex: searchTerm, $options: 'i' } },
            { 'variants.value': { $regex: searchTerm, $options: 'i' } },
        ],
    });
    return result;
};


export const ProductServices = {
    newProductsIntoDB,
    getAllProductsFromDB,
    getOneProductFromDB,
    updateProductById,
    deleteProductById,
    searchProductsByTerm
};