import { Response, Request } from 'express';
import response from '../../util/response'
import { DB } from '../../database/db';
import { ROLES } from '../../database/table';
import logger from '../../config/logger'
const fileModule = '[Roles]'

export const getRole = async (req: Request, res: Response) => {
    try {
        const roles = await DB(ROLES).select('name', 'id', 'created_at');

        return response.succes(res, 'All roles!', roles);

    } catch (error) {
        return response.server(res);
    }
}

export const createRole = async (req: Request, res: Response) => {
    try {
        if (!req.body.name) return response.clientError(res, 'Please Provide role name!');

        const roles = await DB(ROLES).where('name', req.body.name);

        if (roles.length >= 1) return response.clientError(res, 'Role Already exit!');

        await DB(ROLES).insert(req.body);

        return response.succes(res, 'role created successfuly!');

    } catch (error) {
        return response.server(res);
    }
}

export const updateRole = async (req: Request, res: Response) => {
    try {
        if (!req.params.id) return response.clientError(res, 'Please Provide id!');
        if (!req.body.name) return response.clientError(res, 'Please Provide name!');

        const roles = await DB(ROLES).where('id', req.params.id);

        if (roles.length < 1) return response.notFound(res, 'role not found!');

        await DB(ROLES).update(req.body);

        return response.succes(res, 'role updated successfuly!');

    } catch (error) {
        return response.server(res);
    }
}
export const deleteRole = async (req: Request, res: Response) => {
    try {
        if (!req.params.id) return response.clientError(res, 'Please Provide id!');

        await DB(ROLES).where('id', req.params.id).del();

        return response.succes(res, 'role deleted successfuly!');

    } catch (error) {
        return response.server(res);
    }
}