import express from 'express'
import {config} from 'dotenv'
import { request } from 'http';
import morgan from 'morgan'
import appRouter from './routes/index.js';


config();
const app = express();

//middle ware
app.use(express.json())

// remove it in production
app.use(morgan("dev"));

app.use("/api/v1",appRouter);

export default app;