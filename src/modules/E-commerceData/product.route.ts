import express from 'express'
import { ProductControllers } from './product.controller'

const router=express.Router()

// post product route
router.post('/products',ProductControllers.createProducts);

// all get products route
router.get('/products',ProductControllers.getAllProducts);

// one get product route
router.get('/products/:id',ProductControllers.getOneProduct);

// update product route
router.put('/products/:id', ProductControllers.updateProduct);

//delete product route
router.delete('/products/:id', ProductControllers.deleteProduct);


export const ProductsRoute= router;
