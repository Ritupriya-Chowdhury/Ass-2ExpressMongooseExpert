import express from 'express'
import { ProductControllers } from './product.controller'

const router=express.Router()


router.post('/products',ProductControllers.createProducts);


export const ProductsRoute= router;
