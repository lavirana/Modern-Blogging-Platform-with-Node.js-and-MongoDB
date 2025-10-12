# 📰 Modern Blogging Platform with Node.js and MongoDB

A modern, full-featured blogging platform built using **Node.js**, **Express**, and **MongoDB**.  
This project demonstrates how to build a dynamic and scalable blog application with user authentication, CRUD operations, and clean architecture patterns.

---

## 🚀 Features

- 🧑‍💻 User authentication (Register / Login / Logout)
- ✍️ Create, edit, delete, and view blog posts
- 🖼️ Upload images for articles
- 🧱 Modular structure with routes, models, and services
- ⚙️ Middleware for authentication and validation
- 🎨 EJS templating for dynamic UI rendering
- 🌐 RESTful APIs for managing blogs and users
- 📁 MVC-style folder structure for scalability

---

## 🗂️ Project Structure

Modern-Blogging-Platform-with-Node.js-and-MongoDB/
│
├── middlewares/ # Authentication & other middlewares
├── models/ # MongoDB models (User, Article)
├── node_modules/
├── public/ # Static assets (images, uploads, etc.)
├── routes/ # App routes (user, article)
├── services/ # Business logic and reusable services
├── views/ # EJS templates for front-end rendering
│
├── index.js # Entry point
├── package.json # Project dependencies
└── README.md


---

## ⚙️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/lavirana/Modern-Blogging-Platform-with-Node.js-and-MongoDB.git
   cd Modern-Blogging-Platform-with-Node.js-and-MongoDB


## Install dependencies

npm install


## Configure environment variables
Create a .env file in the root directory and add:

MONGO_URI=your_mongodb_connection_string
PORT=5000
JWT_SECRET=your_secret_key


## Run the server

npm start


or for development:

nodemon index.js


## Open your browser

http://localhost:5000

🧰 Tech Stack

Backend: Node.js, Express.js

Database: MongoDB (Mongoose ORM)

Frontend: EJS, HTML, CSS

Authentication: JWT (JSON Web Token)

File Uploads: Multer


