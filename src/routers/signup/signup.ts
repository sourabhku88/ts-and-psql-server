import { Router } from "express";
import * as signup from '../../controllers/signup/signup'

const router = Router()



router.post('/login',signup.login);
router.post('/singup',signup.signUp);


export default router;

