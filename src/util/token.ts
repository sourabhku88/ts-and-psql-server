import jwt, { sign } from 'jsonwebtoken'
import logger from '../config/logger';




export const genrateToken = (data: any, expireTime: string) => {
    const secreateKey = process.env.JWT_SECRATE

    return sign(data, "secreateKey", { expiresIn: expireTime });

}