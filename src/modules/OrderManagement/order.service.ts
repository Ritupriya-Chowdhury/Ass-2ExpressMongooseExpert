import { Order } from './order.interface';
import { OrderModel } from './order.model';


const newOrdersIntoDB=async (order:Order)=>{
    const result=await OrderModel.create(order);
    return result;
};


// get all orders from db
const getAllOrdersFromDB = async()=>{
    const result=await OrderModel.find();
    return result;

}

// get order by email
const getOrdersByEmail = async (email: string) => {
    const result = await OrderModel.find({ email });
    return result;
};


export const OrderServices = {
    newOrdersIntoDB,
    getAllOrdersFromDB,
    getOrdersByEmail
    
};