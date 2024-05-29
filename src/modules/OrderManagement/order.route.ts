import express from 'express'
import { OrderControllers } from './order.controller';

const router=express.Router()

// post order route
router.post('/orders',OrderControllers.createOrders);

// all get orders route
router.get('/orders',OrderControllers.getAllOrders);

//Get orders by email
router.get('/orders', OrderControllers.getOrders);

export const OrderRoute= router;