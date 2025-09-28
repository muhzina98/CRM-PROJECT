import { Customer } from "../models/customerModel.js";


export const createCustomerService = async ({ name, email, phone, company, notes }) => {
  if (!name || !email) {
    throw new Error('Name and email are required');
  }
  const customer = await Customer.create({ name, email, phone, company, notes });
  return customer;
};

export const getCustomersService = async () => {
  const customers = await Customer.find();
  return customers;
};

export const getCustomerByIdService = async (id) => {
  const customer = await Customer.findById(id);
  if (!customer) {
    throw new Error('Customer not found');
  }
  return customer;
};

export const updateCustomerService = async (id, updateData) => {
  const customer = await Customer.findById(id);
  if (!customer) {
    throw new Error('Customer not found');
  }
  Object.assign(customer, updateData);
  return await customer.save();
};

export const deleteCustomerService = async (id) => {
  const customer = await Customer.findByIdAndDelete(id);
  if (!customer) {
    throw new Error('Customer not found');
  }
  return { message: 'Customer removed' };
};

