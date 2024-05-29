import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import { ProductsRoute } from './modules/E-commerceData/product.route';
import { OrderRoute } from './modules/OrderManagement/order.route';

const app: Application = express();

//parser
app.use(express.json());
app.use(cors());

//product application router
app.use('/api', ProductsRoute);

//orders application router
app.use('/api', OrderRoute);



// "Route not found" middleware
app.use((req:Request, res:Response, next:NextFunction) => {
    res.status(404).json({
        success: false,
        message: "Route not found"
    });
});

const getAController = (req: Request, res: Response) => {
  const a = 10;
  res.json({ value: a }); 
}

app.get('/', getAController);
export default app;