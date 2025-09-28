import React from "react";

const CustomerCard = ({ customer, onEdit, onDelete }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{customer.name}</h5>
        <p className="card-text">Email: {customer.email}</p>
        <p className="card-text">Phone: {customer.phone}</p>
        <p className="card-text">Company: {customer.company}</p>
        <div className="d-flex justify-content-between">
          <button className="btn btn-primary btn-sm" onClick={() => onEdit(customer)}>
            Edit
          </button>
          <button className="btn btn-danger btn-sm" onClick={() => onDelete(customer._id)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomerCard;
