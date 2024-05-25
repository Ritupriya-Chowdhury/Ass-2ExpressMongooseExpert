import { Request, Response } from "express";
import { ProductServices } from "./product.service";


const createProducts= async(req: Request, res:Response)=>{
    try{

        const products=req.body

    const result=await ProductServices.newProductsIntoDB(products)

    //send responses

    res.send(200).json({
        success:true,
        message: "Product created successfully!",
        data: ReadableStreamDefaultController,
    })
    }
    catch(err){
        console.log(err);
    }
};


export const productController= {
    createProducts,
};