# 🛒 Full-Stack Product CRUD App with Authentication

This is a full-stack web application built using the MERN stack (MongoDB, Express, React, Node.js).  
It allows users to register, log in, and perform CRUD operations (Create, Read, Update, Delete) on products.

---

## 🛠 Tech Stack Used

### 🔹 Frontend
- React.js
- Axios
- React Router DOM
- Bootstrap (optional)

### 🔹 Backend
- Node.js
- Express.js
- MongoDB (with Mongoose)
- JSON Web Token (JWT) for authentication
- bcryptjs for password hashing
- CORS

---

## 🚀 How to Run This App Locally

### 🖥 Prerequisites
- Node.js & npm installed
- MongoDB installed or using [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- Git installed

---

### 📁 Project Structure
fullstack-product-app/
├── backend/
└── frontend/

yaml
Copy
Edit

---

### 🔧 Step-by-Step Setup

#### 1. **Clone the Repository**

```bash
git clone https://github.com/yourusername/fullstack-product-app.git
cd fullstack-product-app
2. Backend Setup
bash
Copy
Edit
cd backend
npm install
Create a .env file inside the backend folder:

ini
Copy
Edit
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
Start the backend server:

bash
Copy
Edit
node server.js
or (if using nodemon):

bash
Copy
Edit
npx nodemon server.js
3. Frontend Setup
bash
Copy
Edit
cd ../frontend
npm install
Start the React development server:

bash
Copy
Edit
npm start
The app will be available at:
🔗 http://localhost:3000

✅ Features Covered
🔐 User Registration & Login with JWT authentication

✅ Persistent login using localStorage

🔄 CRUD operations for products:

Create a new product

View product list

Update product details

Delete product

⚙️ Protected routes — only logged-in users can access product pages

❌ Error handling and form validation

🧠 Organized codebase (separate frontend & backend folders)

🧑‍💻 Author
Kavin Kumar

📄 License
This project is open-source and free to use.
