import express from 'express';
import { loginUser, organizationData, registerUser } from '../controllers/organization.js';
import { organizationUser } from '../middlewares/userAuthentication.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/get-data', organizationUser, organizationData);

export default router