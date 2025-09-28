import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosClient from "../../api/axiosClient";

// Fetch all customers
export const fetchCustomersThunk = createAsyncThunk(
  "customers/fetch",
  async () => {
    const res = await axiosClient.get("/customers");
    return res.data.data;
  }
);

// Create a customer
export const createCustomerThunk = createAsyncThunk(
  "customers/create",
  async (customerData) => {
    const res = await axiosClient.post("/customers", customerData);
    return res.data.data;
  }
);

// Update a customer
export const updateCustomerThunk = createAsyncThunk(
  "customers/update",
  async ({ id, updateData }) => {
    const res = await axiosClient.put(`/customers/${id}`, updateData);
    return res.data.data;
  }
);

// Delete a customer
export const deleteCustomerThunk = createAsyncThunk(
  "customers/delete",
  async (id) => {
    await axiosClient.delete(`/customers/${id}`);
    return id; 
  }
);

const customerSlice = createSlice({
  name: "customers",
  initialState: { customers: [], loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch
      .addCase(fetchCustomersThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCustomersThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.customers = action.payload;
      })
      .addCase(fetchCustomersThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      // Create
      .addCase(createCustomerThunk.fulfilled, (state, action) => {
        state.customers.push(action.payload);
      })

      // Update
      .addCase(updateCustomerThunk.fulfilled, (state, action) => {
        const index = state.customers.findIndex(c => c._id === action.payload._id);
        if (index !== -1) state.customers[index] = action.payload;
      })

      // Delete
      .addCase(deleteCustomerThunk.fulfilled, (state, action) => {
        state.customers = state.customers.filter(c => c._id !== action.payload);
      });
  },
});

export default customerSlice.reducer;
