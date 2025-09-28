import {
  createCustomerService,
  getCustomersService,
  getCustomerByIdService,
  updateCustomerService,
  deleteCustomerService
} from "../services/customerServices.js";

import { ValidationError, NotFoundError, sendSuccess } from "../middlewares/errorMiddleware.js";
import { asyncHandler } from "../middlewares/asyncHandler.js";

export const createCustomer = asyncHandler(async (req, res) => {
  const { name, email, phone, company, notes } = req.body;
  if (!name || !email) throw new ValidationError('Name and email are required');

  // Check if email already exists
  const existingCustomer = await getCustomersService(); 
  if (existingCustomer.some(c => c.email === email)) {
    throw new ValidationError('Customer with this email already exists');
  }

  const customer = await createCustomerService({ name, email, phone, company, notes });
  sendSuccess(res, customer, 201);
});

export const getCustomers = asyncHandler(async (req, res) => {
  const customers = await getCustomersService();
  sendSuccess(res, customers);
});

export const getCustomerById = asyncHandler(async (req, res) => {
  const customer = await getCustomerByIdService(req.params.id);
  if (!customer) throw new NotFoundError('Customer not found');
  sendSuccess(res, customer);
});

export const updateCustomer = asyncHandler(async (req, res) => {
  const updatedCustomer = await updateCustomerService(req.params.id, req.body);
  if (!updatedCustomer) throw new NotFoundError('Customer not found');
  sendSuccess(res, updatedCustomer);
});

export const deleteCustomer = asyncHandler(async (req, res) => {
  const deletedCustomer = await deleteCustomerService(req.params.id);
  if (!deletedCustomer) throw new NotFoundError("Customer not found");
  sendSuccess(res, { message: "Customer removed successfully" });
});
