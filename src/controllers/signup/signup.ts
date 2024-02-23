import { Request, Response } from 'express';
import response from '../../util/response';
import { DB } from '../../database/db';
import { USERS } from '../../database/table';
import { genrateToken } from '../../util/token';
import { sign } from 'jsonwebtoken'
import logger from '../../config/logger';
const moduleName = 'SIGNUP'


export const login = async (req: Request, res: Response) => {
    try {
        if (!req.body.email) return response.clientError(res, 'Please Provide Email ID!');
        if (!req.body.password) return response.clientError(res, 'Please Provide Password!');

        const user: any = await DB.raw(`
            select email,password from ${USERS} where email = '${req.body.email}' and password = '${req.body.password}';
        `);

        if (user.rows.length < 1) return response.notFound(res, 'Invalid credentials!');
        
        logger.info(`${moduleName}`,`${user.rows}`)

        const token = sign({ name: "sourabh", userID: 'uuid' }, '24h')

        return response.succes(res, 'Login success', { token });
    } catch (error) {
        console.log(error)
        return response.server(res)
    }
}

export const signUp = async (req: Request, res: Response) => {
    try {
        if (!req.body.name) return response.clientError(res, 'Please Provide name!')
        if (!req.body.email) return response.clientError(res, 'Please Provide email!')
        if (!req.body.password) return response.clientError(res, 'Please Provide password!')
        if (!req.body.number) return response.clientError(res, 'Please Provide number!')

        const user = await DB(USERS).where("email", req.body.email);

        if (user.length >= 1) return response.clientError(res, 'User already exit please try to login!');

        const newUser = await DB(USERS).insert(req.body,['name','email','id']);

        return response.succes(res, 'User created!',newUser)

    } catch (error) {
        return response.server(res)
    }
}