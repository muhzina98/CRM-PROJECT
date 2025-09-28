// src/components/CustomerForm.jsx
import React, { useState, useEffect } from "react";

export default function CustomerForm({ initial = {}, onSubmit, onCancel }) {
  const [name, setName] = useState(initial.name || "");
  const [email, setEmail] = useState(initial.email || "");
  const [phone, setPhone] = useState(initial.phone || "");

  useEffect(() => {
    setName(initial.name || "");
    setEmail(initial.email || "");
    setPhone(initial.phone || "");
  }, [initial]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, email, phone });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 p-4 border rounded bg-white shadow">
      <div className="mb-2">
        <label className="block font-medium">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border px-2 py-1 rounded"
          required
        />
      </div>

      <div className="mb-2">
        <label className="block font-medium">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border px-2 py-1 rounded"
          required
        />
      </div>

      <div className="mb-2">
        <label className="block font-medium">Phone</label>
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full border px-2 py-1 rounded"
        />
      </div>

      <div className="flex gap-2 mt-3">
        <button type="submit" className="px-3 py-1 bg-indigo-600 text-white rounded">
          Save
        </button>
        <button type="button" onClick={onCancel} className="px-3 py-1 bg-gray-400 text-white rounded">
          Cancel
        </button>
      </div>
    </form>
  );
}
