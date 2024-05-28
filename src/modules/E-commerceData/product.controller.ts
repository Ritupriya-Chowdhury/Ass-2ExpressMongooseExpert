import { Request, Response } from "express";
import { ProductServices } from "./product.service";

const createProducts = async (req: Request, res: Response) => {
    try {
        const { product: ProductData } = req.body;

        const result = await ProductServices.newProductsIntoDB(ProductData);

        // Send responses
        res.status(201).json({
            success: true,
            message: "Product created successfully!",
            data: result,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            message: "Failed to create product.",
            error: err.message,
        });
    }
};

const getAllProducts = async (req: Request, res: Response) => {
    try {
        const result = await ProductServices.getAllProductsFromDB();
        res.status(200).json({
            success: true,
            message: "Products fetched successfully!",
            data: result,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Failed to fetch products.",
            error: error.message,
        });
    }
};

export const ProductControllers = {
    createProducts,
    getAllProducts,
};
