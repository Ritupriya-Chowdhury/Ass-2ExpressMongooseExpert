import { Request, Response } from "express";
import { ProductServices } from "./product.service";



// code for post product
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
           
        });
    }
};


// code for get products
const getAllProducts = async (req: Request, res: Response) => {
    try {
       
        const result = await ProductServices.getAllProductsFromDB();
        res.status(200).json({
            success: true,
            message: "Products fetched successfully!",
            data: result,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            message: "Failed to fetch products.",
           
        });
    }
};



// code for get one product
const getOneProduct = async (req: Request, res: Response) => {
    try {
        const {id}=req.params
       
       
        const result = await ProductServices.getOneProductFromDB(id);
        res.status(200).json({
            success: true,
            message: "Products fetched successfully!",
            data: result,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            message: "Failed to fetch products.",
           
        });
    }
};


// Code for updating a product
const updateProduct = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const updateData = req.body;
        const result = await ProductServices.updateProductById(id, updateData);
        res.status(200).json({
            success: true,
            message: 'Product updated successfully!',
            data: result,
        });
    } catch (error) {
        console.error(error);
        res.status(400).json({
            success: false,
            message:'Failed to update product.',
        });
    }
};



// code for delete product
const deleteProduct = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        await ProductServices.deleteProductById(id);
        res.status(200).json({
            success: true,
            message: 'Product deleted successfully!',
        });
    } catch (error) {
        console.error(error);
        res.status(400).json({
            success: false,
            message:'Failed to delete product.',
        });
    }
};


// code for search product
const searchProducts = async (req: Request, res: Response) => {
    try {
        const { searchTerm } = req.query;
        if (!searchTerm) {
            return res.status(400).json({
                success: false,
                message: 'searchTerm query parameter is required.',
            });
        }
        const result = await ProductServices.searchProductsByTerm(searchTerm as string);
        res.status(200).json({
            success: true,
            message: `Products matching search term '${searchTerm}' fetched successfully!`,
            data: result,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Failed to fetch products.',
        });
    }
};




export const ProductControllers = {
    createProducts,
    getAllProducts,
    getOneProduct,
    updateProduct,
    deleteProduct,
    searchProducts
};
