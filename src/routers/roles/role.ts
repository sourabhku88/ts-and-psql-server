import * as roles from '../../controllers/roles/roles';

import { Router } from 'express'
const router: Router = Router();


router.get('/role', roles.getRole);
router.post('/role', roles.createRole);
router.put('/role/:id', roles.updateRole);
router.delete('/role/:id', roles.deleteRole);

export default router;
