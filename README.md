# CRM System (MERN Stack)

A full-stack **Customer Relationship Management (CRM)** system built
with **MongoDB, Express, React, and Node.js (MERN)**.

## 🚀 Features

-   View all customers
-   Add new customers
-   Update existing customers
-   Delete customers
-   View a single customer by ID
-   Responsive dashboard

## 🛠 Tech Stack

-   **Frontend:** React, Redux Toolkit, Axios, TailwindCSS
-   **Backend:** Node.js, Express.js, MongoDB, Mongoose
-   **State Management:** Redux Toolkit (Async Thunks)
-   **API Calls:** Axios



## ⚙️ API Endpoints

  Method   Endpoint               Description
  -------- ---------------------- -----------------------
  GET      `/api/customers`       Get all customers
  GET      `/api/customers/:id`   Get a customer by ID
  POST     `/api/customers`       Create a new customer
  PUT      `/api/customers/:id`   Update a customer
  DELETE   `/api/customers/:id`   Delete a customer

## 🖥 Installation

1.  Clone the repo:


git clone https://github.com/your-username/crm-mern.git
cd crm-mern


2.  Install dependencies for both backend and frontend:

``` bash
cd backend && npm install
cd ../frontend && npm install
```

3.  Create a `.env` file in the backend folder:

``` env
MONGO_URI=your_mongodb_connection_string
PORT=3000
JWT_SECRET=your_secret_key
```

4.  Run the development servers:

``` bash
# Backend
cd backend
npm run dev

# Frontend
cd ../frontend
npm run dev
```

5.  Open `http://localhost:5173` (or the port Vite shows) in your
    browser.


