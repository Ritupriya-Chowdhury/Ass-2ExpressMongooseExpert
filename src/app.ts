import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { ProductsRoute } from './modules/E-commerceData/product.route';

const app: Application = express();

//parser
app.use(express.json());
app.use(cors());


//application router
app.use('/api',ProductsRoute);

const getAController = (req: Request, res: Response) => {
  const a = 10;
  res.json({ value: a }); // Sending JSON response with the value of 'a'
};

app.get('/', getAController);


export default app;
