import { Request, Response } from "express";
import { ProductServices } from "./product.service";


const createProducts= async(req: Request, res:Response)=>{
    try{

        const {product: ProductData}=req.body

    const result=await ProductServices.newProductsIntoDB(ProductData)

    //send responses

    res.send(200).json({
        success:true,
        message: "Product created successfully!",
        data:result,
    })
    }
    catch(err){
        console.log(err);
    }
};


export const ProductControllers= {
    createProducts,
};