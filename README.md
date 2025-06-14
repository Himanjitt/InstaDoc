# InstaDoc - Doctor Appointment Application

InstaDoc is a full-stack web application designed to streamline the process of booking and managing doctor appointments. It provides a platform for patients to find doctors, book appointments, and for doctors to manage their schedules and patient interactions. Administrators can oversee the platform, manage users, and view application statistics.

## Features

**Patient Features:**

- User registration and login
- Browse and search for doctors by specialization
- View doctor profiles, including experience, fees, and timings
- Book appointments with available doctors
- View and manage their upcoming and past appointments
- Receive notifications
- Update profile information
- Change password

**Doctor Features:**

- Register and apply for a doctor profile
- Manage their appointment schedule
- View patient details for booked appointments
- Update their profile, including specialization, experience, and consultation fees

**Admin Features:**

- Dashboard with overview statistics (users, doctors, appointments)
- Manage users (view, delete)
- Manage doctors (view, approve/reject applications, delete)
- View all appointments
- Manage doctor applications

## Tech Stack

**Client-side (Frontend):**

- React.js
- Redux Toolkit (for state management)
- React Router (for navigation)
- Axios (for API calls)
- Firebase
- Cloudinary (for image uploads)

**Server-side (Backend):**

- Node.js
- Express.js (for RESTful APIs)
- MongoDB (with Mongoose ODM for database)
- JSON Web Tokens (JWT) (for authentication)
- Bcrypt.js (for password hashing)
- Multer (for file uploads on the server)

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14.x or higher recommended)
- [npm](https://www.npmjs.com/) (usually comes with Node.js) or [Yarn](https://yarnpkg.com/)
- [MongoDB](https://www.mongodb.com/try/download/community) (ensure it's running locally or you have a cloud instance URI)

## Installation & Setup

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/Himanjitt//InstaDoc.git
    cd InstaDoc
    ```

2.  **Setup Backend (Server):**

    - Navigate to the server directory:
      ```bash
      cd server
      ```
    - Install dependencies:

      ```bash
      npm install

      ```

    - Create a `.env` file in the `InstaDoc/server` directory and add the following environment variables. Replace placeholder values with your actual configuration:
      ```env
      PORT=5000 # Or any port you prefer for the backend
      MONGO_URI=mongodb://localhost:27017/instadoc # Your MongoDB connection string
      JWT_SECRET=your_jwt_secret_key # A strong secret key for JWT
      # Add other backend environment variables if any (e.g., for Nodemailer, Cloudinary API keys if managed server-side)
      ```
    - Start the backend server:
      ```bash
      npm start
      ```
      The server should now be running (typically on `http://localhost:5000`).

3.  **Setup Frontend (Client):**

    - Open a new terminal. Navigate to the client directory:
      ```bash
      cd ../client
      # (If you are in InstaDoc/server, otherwise cd InstaDoc/client from root)
      ```
    - Install dependencies:

      ```bash
      npm install

      ```

    - Create a `.env` file in the `InstaDoc/client` directory.

      - Add necessary frontend environment variables, for example:
        ```env
        REACT_APP_SERVER_DOMAIN=http://localhost:5000 # URL of your backend server
        REACT_APP_CLOUDINARY_PRESET=your_cloudinary_upload_preset
        REACT_APP_CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
        REACT_APP_CLOUDINARY_BASE_URL=https://api.cloudinary.com/v1_1/your_cloudinary_cloud_name/image/upload
        # Add Firebase config variables if not hardcoded (recommended to use .env)
        # e.g., REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
        ```

    - Start the frontend development server:
      ```bash
      npm start
      ```
      The client application should now be running (typically on `http://localhost:3000`) and will open in your default web browser.

## Available Scripts

**For the Server (`InstaDoc/server`):**

- `npm start`: Starts the backend server using `node server.js`. If you have `nodemon` installed globally or as a dev dependency (recommended for development), you might run `nodemon server.js` for auto-restarts.

**For the Client (`InstaDoc/client`):**

- `npm start`: Runs the app in development mode.
- `npm run build`: Builds the app for production to the `build` folder.


## 📷 Screenshots

### 🏠 1. Opening Link / Home Page
![Image](https://github.com/user-attachments/assets/82c9cbce-2871-4523-b4da-9460f503e0e3)

### 📝 2. Signup Page
![Image](https://github.com/user-attachments/assets/8375b1ff-a5f8-48a5-a00b-2e47cc2bef19)

### 🔍 3. Find Doctor
![Image](https://github.com/user-attachments/assets/b2bb685d-e809-4abe-bd82-fb70ef86ff7c)

### 👨‍⚕️ 4. Book Appointment - Choose Doctor
![Image](https://github.com/user-attachments/assets/cd32efec-ae7d-4301-a7d2-df887d3a0a69)

### 🧾 5. Fill Appointment Details
![Image](https://github.com/user-attachments/assets/b52617dc-c593-4f3e-a629-8b0591b9f75d)

### 🔔 6. Check Notifications
![Image](https://github.com/user-attachments/assets/c04a651c-f663-47e6-898a-79fe573bc0d7)
---
