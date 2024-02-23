import { Request, Response, NextFunction } from 'express'
import response from '../util/response'
import logger from '../config/logger';
const fileModule = 'CUSTOM AUTH'
const customToken = async (req: Request, res: Response, next: NextFunction) => {
    try {
        let token: any = req.headers['api-key'];
        if (!token) return response.unAuth(res, 'API KEY :- required!')

        token = token?.split(' ')[1];
        
        logger.info(fileModule, token);

        if (token !== process.env.CUSTOM_TOKEN) return response.unAuth(res, 'Provied API KEY not valid!')

        next();
    } catch (error) {
        return response.server(res)
    }
}

export default customToken;