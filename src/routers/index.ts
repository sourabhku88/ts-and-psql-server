import { Application } from "express";
import roles from './roles/role'
import signup from './signup/signup'
import customToken from "../middleware/customAuth";

const routers = (app: Application) => {
    app.use('/api/v1/', customToken, roles);
    app.use('/api/v1/', customToken, signup);
}


export default routers;