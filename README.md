# Activity Booking API

A simple RESTful API for booking activities (cricket matches, movies, football, etc.), built with Node.js, Express.js, MySQL (Sequelize), and JWT authentication.

---

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)

  - [Clone Repository](#clone-repository)
  - [Install Dependencies](#install-dependencies)
  - [Environment Variables](#environment-variables)
  - [Database Setup](#database-setup)
  - [Seed Data (Optional)](#seed-data-optional)
  - [Run Locally](#run-locally)

- [Project Structure](#project-structure)
- [API Documentation](#api-documentation)

  - [Authentication](#authentication)
  - [Endpoints](#endpoints)

- [Postman Collection](#postman-collection)
- [Git & .gitignore](#git--gitignore)
- [License](#license)

---

## 🚀 Features

- **User Registration & Login** (JWT)
- **Password Hashing** with bcryptjs
- **Input Validation** using express-validator
- **Public** endpoint to list activities
- **Protected** endpoints to book activities and view user bookings
- **MySQL** database integration via Sequelize ORM
- **Clean folder structure** (controllers, models, routes, middleware)
- **CORS** enabled for cross-origin requests
- **Request logging** with morgan (development)

## 🛠 Tech Stack

| Layer       | Technology        |
| ----------- | ----------------- |
| Runtime     | Node.js           |
| Framework   | Express.js        |
| Database    | MySQL (Sequelize) |
| Auth        | JSON Web Tokens   |
| Hashing     | bcryptjs          |
| Validation  | express-validator |
| Environment | dotenv            |
| Dev Tools   | nodemon, morgan   |

## 📋 Prerequisites

- [Node.js](https://nodejs.org/) v14+
- [MySQL](https://www.mysql.com/) server
- [Git](https://git-scm.com/)
- (Optional) Postman for API testing

## 🏁 Getting Started

### Clone Repository

```bash
git clone https://github.com/faju-frq/MeetX-booking-api.git
cd activity-booking-api
```

### Install Dependencies

```bash
npm install
```

### Environment Variables

Create a `.env` file in the project root based on `.env.example`:

```ini
PORT=5000
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=your_db_password
DB_NAME=activity_booking_db
JWT_SECRET=your_jwt_secret
```

### Database Setup

1. Create a MySQL database matching `DB_NAME` in your `.env`.
2. Ensure your MySQL server is running on the configured host and port.

Sequelize will auto-sync models to tables on server start (with `sequelize.sync()`).

### Seed Data (Optional)

To insert sample activities, run the seed script:

```bash
node scripts/seed.js
```

### Run Locally

- **Development** (with hot-reload via nodemon):

  ```bash
  npm run dev
  ```

- **Production**:

  ```bash
  npm start
  ```

The API will be available at `http://localhost:5000/`.

---

## 🗂 Project Structure

```plaintext
activity-booking-api/
├── config/
│   └── db.config.js        # Database configuration
├── controllers/
│   ├── auth.controller.js  # Registration & login logic
│   ├── activity.controller.js # List activities
│   └── booking.controller.js  # Bookings logic
├── middleware/
│   └── auth.middleware.js  # JWT verification
├── models/
│   ├── index.js            # Sequelize init & associations
│   ├── user.model.js       # User table schema
│   ├── activity.model.js   # Activity table schema
│   └── booking.model.js    # Booking table schema
├── routes/
│   ├── auth.routes.js      # /api/auth
│   ├── activity.routes.js  # /api/activities
│   └── booking.routes.js   # /api/bookings
├── scripts/
│   └── seed.js             # Sample data seeding
├── .env                    # Environment variables
├── .gitignore              # Ignored files
├── package.json            # NPM scripts & dependencies
├── server.js               # Entry point
└── README.md               # Project documentation
```

---

## 📖 API Documentation

### Authentication

- **Register** (`POST /api/auth/register`)
- **Login** (`POST /api/auth/login`)

Protected routes require an `Authorization` header with a Bearer token:

```
Authorization: Bearer <JWT_TOKEN>
```

### Endpoints

| Method | Endpoint             | Description                 | Auth Required | Body Parameters                      |
| ------ | -------------------- | --------------------------- | ------------- | ------------------------------------ |
| POST   | `/api/auth/register` | Register new user           | No            | `name`, `email`, `phone`, `password` |
| POST   | `/api/auth/login`    | Login user, returns JWT     | No            | `email`, `password`                  |
| GET    | `/api/activities`    | List all activities         | No            | —                                    |
| POST   | `/api/bookings`      | Book an activity            | Yes           | `activityId`, `description`          |
| GET    | `/api/bookings`      | Get current user’s bookings | Yes           | —                                    |

---

## 📬 Postman Collection

We've provided a Postman collection so you can quickly import and test all endpoints.

👉 [Download the Postman collection (v2.1)](./MeetX%20Booking%20API.postman_collection.json)

**To import**:

1. In Postman, click **Import**
2. Select the `MeetX Booking API.postman_collection.json` file
3. Run the requests in the “MeetX Booking API” collection

---

## ⚙️ Git & .gitignore

Ensure `.gitignore` includes:

```gitignore
node_modules/
.env
dist/
coverage/
.vscode/
```

---

## 📝 License

This project is MIT licensed. See the [LICENSE](LICENSE) file for details.

---

**Happy coding!** 🚀
