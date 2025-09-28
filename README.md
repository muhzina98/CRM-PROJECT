# CRM System (MERN Stack)

This is a **Customer Relationship Management (CRM)** system built with the MERN stack.  
It allows admins to **create, read, update, and delete (CRUD)** customer records.

---

## 📌 Features
- 🔑 User authentication (login, JWT)
- 👥 Manage customers (CRUD)
- 📝 Notes, company, phone, and email tracking
- 📦 Scalable backend with Express & MongoDB
- ⚛️ Modern frontend with React, Redux Toolkit & Tailwind CSS
- 🔄 REST API integration with Axios

---

## 📂 Project Structure

```
crm-project/
│
├── backend/
│   ├── controllers/
│   │   └── customerController.js
│   ├── models/
│   │   └── customerModel.js
│   ├── routes/
│   │   └── customerRoutes.js
│   ├── middlewares/
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── api/axiosClient.js
│   │   ├── components/
│   │   ├── pages/
│   │   ├── redux/slices/customerSlice.js
│   │   ├── redux/store.js
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
└── README.md
```

---

## ⚙️ Installation

### 1️⃣ Clone repository
```bash
git clone https://github.com/your-username/crm-project.git
cd crm-project
```

### 2️⃣ Setup Backend
```bash
cd backend
npm install
```

Create a `.env` file inside `backend/`:
```env
PORT=3000
MONGO_URI=mongodb://127.0.0.1:27017/crmdb
JWT_SECRET=your_jwt_secret_here
```

Run backend:
```bash
npm run dev
```

### 3️⃣ Setup Frontend
```bash
cd frontend
npm install
npm run dev
```

---

## 🚀 API Endpoints

Base URL: `http://localhost:3000/api/customers`

| Method | Endpoint             | Description          |
|--------|----------------------|----------------------|
| GET    | `/`                  | Get all customers    |
| GET    | `/:id`               | Get customer by ID   |
| POST   | `/`                  | Create new customer  |
| PUT    | `/:id`               | Update customer      |
| DELETE | `/:id`               | Delete customer      |

---

## 🖥️ Frontend

- React + Vite
- Redux Toolkit for state management
- Axios for API calls
- Tailwind CSS for styling

---

## ✅ Usage

1. Start backend (`npm run dev` in `/backend`)
2. Start frontend (`npm run dev` in `/frontend`)
3. Open browser: [http://localhost:5173](http://localhost:5173)
4. Manage customers from dashboard & customer page.

---

