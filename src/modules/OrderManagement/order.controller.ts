import { Request, Response } from "express";
import { OrderServices } from "./order.service";





// code for post order
const createOrders = async (req: Request, res: Response) => {
    try {
        const { order: OrderData } = req.body;

        const result = await OrderServices.newOrdersIntoDB(OrderData);

        // Send responses
        res.status(201).json({
            success: true,
            message: "Order created successfully!",
            data: result,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            message: "Failed to create order.",
           
        });
    }
};



// code for get orders
const getAllOrders = async (req: Request, res: Response) => {
    try {
       
        const result = await OrderServices.getAllOrdersFromDB();
        res.status(200).json({
            success: true,
            message: "Orders fetched successfully!",
            data: result,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            message: "Failed to fetch orders.",
           
        });
    }
};


// code for get order by email
const getOrders = async (req: Request, res: Response) => {
    try {
        const { email } = req.query;
       
        const result = await OrderServices.getOrdersByEmail(email as string);
        res.status(200).json({
            success: true,
            message: `Orders fetched successfully for user email!`,
            data: result
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Order not found'
        });
    }
};





export const OrderControllers = {
    createOrders,
    getAllOrders,
    getOrders

    
};
