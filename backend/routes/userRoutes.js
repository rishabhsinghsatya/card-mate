// routes/userRoutes.js
import express from 'express';
import {
    createUser,
    getUser,
    getUserFormData,
    updateUserFormData,
    deleteUserFormData,
} from '../controllers/userController.js';

const router = express.Router();

router.post('/users/register', createUser);
router.post('/users/login', getUser);
router.get('/users/:id', getUserFormData);
router.put('/users/:id', updateUserFormData);
router.delete('/users/:id', deleteUserFormData);

export default router;
