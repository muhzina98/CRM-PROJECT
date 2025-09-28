import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CustomerCard from "../components/CustomerCard";
import {
  fetchCustomersThunk,
  deleteCustomerThunk,
  updateCustomerThunk,
} from "../redux/slices/customerSlice";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { customers, loading, error } = useSelector((state) => state.customers);

  const [editingCustomer, setEditingCustomer] = useState(null);
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "", notes: "" });

  useEffect(() => {
    dispatch(fetchCustomersThunk());
  }, [dispatch]);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this customer?")) {
      dispatch(deleteCustomerThunk(id));
    }
  };

  const handleEdit = (customer) => {
    setEditingCustomer(customer);
    setForm({
      name: customer.name,
      email: customer.email,
      phone: customer.phone,
      company: customer.company,
      notes: customer.notes || "",
    });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    if (editingCustomer) {
      dispatch(updateCustomerThunk({ id: editingCustomer._id, updateData: form }));
      setEditingCustomer(null);
      setForm({ name: "", email: "", phone: "", company: "", notes: "" });
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Customers Dashboard</h2>

      {/* Edit Form */}
      {editingCustomer && (
        <form onSubmit={handleUpdate} className="mb-4">
          <input
            type="text"
            placeholder="Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Phone"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
          />
          <input
            type="text"
            placeholder="Company"
            value={form.company}
            onChange={(e) => setForm({ ...form, company: e.target.value })}
          />
          <input
            type="text"
            placeholder="Notes"
            value={form.notes}
            onChange={(e) => setForm({ ...form, notes: e.target.value })}
          />
          <button type="submit" className="btn btn-primary mt-2">
            Update Customer
          </button>
        </form>
      )}

      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-danger text-center">{error}</p>}
      {!loading && customers?.length === 0 && <p className="text-center">No customers found.</p>}

      <div className="row">
        {Array.isArray(customers) &&
          customers.map((customer) => (
            <div key={customer._id} className="col-md-4 mb-3">
              <CustomerCard
                customer={customer}
                onDelete={handleDelete}
                onEdit={handleEdit}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Dashboard;
