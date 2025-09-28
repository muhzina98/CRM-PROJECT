import express from 'express';
import {
createCustomer,
getCustomers,
getCustomerById,
updateCustomer,
deleteCustomer
} from '../controllers/customerController.js';
import { protect } from '../middlewares/authMiddleware.js';


const router = express.Router();


router.route('/').get(protect, getCustomers)
router.route('/').post(protect, createCustomer);
router.route('/:id').get(protect, getCustomerById)
router.route('/:id').put(protect, updateCustomer)
router.route('/:id').delete(protect, deleteCustomer);


export default router;