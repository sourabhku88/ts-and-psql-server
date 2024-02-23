import express, { Application, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors'
import helmet from 'helmet';
import { customRateLimit } from './config/ratelimit';
import routers from './routers/index'
import response from './util/response';
import { morganMiddleware } from './config/morgan'
import logger from './config/logger';
import customToken from './middleware/customAuth';

dotenv.config();

const app: Application = express();


// middleware's
app.use(cors());
app.use(helmet());
app.use(express.json());
// app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));
app.use(morganMiddleware);
customRateLimit(app);
routers(app);



app.use('*', customToken, (req: Request, res: Response) => response.notFound(res, 'API NOT FOUND!'));

app.listen(process.env.PORT, () => {
    logger.info("MAIN FILE", `${process.env.NODE_ENV} Server is running on ${process.env.PORT}`)
})