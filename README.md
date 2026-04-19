# Authentication

## Overview

This repository contains various authentication methods and practices.

### Features

- User Registration
- User Login
- Password Reset
- Email Verification

### Usage Instructions

1. To clone the repository, use the following command:
   ```bash
   git clone https://github.com/kannan1107/Authentication.git
   ```

2. Navigate to the project directory:
   ```bash
   cd Authentication
   ```

3. Install the required dependencies:
   ```bash
   npm install
   ```

4. Start the server on port 6500:
   ```bash
   npm start
   ```


### Additional Information

- Ensure you have Node.js installed.
  
```

### 🚀 Features

- User Registration with password hashing
- User Login with JWT generation
- Authentication using Bearer Token
- Protected routes using middleware
- MongoDB integration with Mongoose
- Clean MVC folder structure
- API testing with Postman
- Proper error handling & validation

```


### 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT (JSON Web Token)
- Postman (API Testing)

```

### 📁 Project Structure

```
project-root/
│
├── models/          # Mongoose schemas
├── controllers/     # Business logic
├── routes/          # API routes
├── middleware/      # Auth middleware
├── config/          # DB & env config
├── app.js           # Main app file
└── package.json
```

```

### ⚙️ Installation & Setup


#### 1. Clone the repository


### 2. Install dependencies

```
npm install
```

### 3. Create `.env` file

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### 4. Run the server

```
npm start
```

Server will run on:

```
http://localhost:6500
```

---

### 🔑 API Endpoints

### 🟢 Register User

**POST** `http://localhost:6500/api/register`

#### Request Body:

```json
{
  "username": "kannan",
  "email": "kannan@example.com",
  "password": "123456"
}
```

#### Response:

```json
{
  "message": "User registered successfully"
}
```

---

### 🔵 Login User

**POST** `http://localhost:6500/api/login`

#### Request Body:

```json
{
  "email": "kannan@example.com",
  "password": "123456"
}
```

#### Response:

```json
{
  "token": "your_jwt_token"
}
```

---

### 🟡 Get User Profile (Protected)

**GET** `http://localhost:6500/api/me`

#### Headers:

```
Authorization: Bearer <token>
```

#### Response:

```json
{
  "id": "user_id",
  "email": "kannan@example.com"
}
```


### 🔐 Authentication Flow

1. User registers
2. Password is hashed and stored
3. User logs in
4. JWT token is generated
5. Token is sent in headers for protected routes
6. Middleware verifies token and allows access

```

### 🧪 Postman Documentation

* All API endpoints are tested using Postman
* Includes request/response examples
* Collection can be imported for testing

```

### 🚀 Deployment


  


- The application will run at `http://localhost:6500`.

