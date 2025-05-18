# 📢 Notification Service Backend

A simple Node.js & Express-based backend service to send and manage user notifications (Email, SMS, and In-App).

---

## 🚀 Features

- Send notifications via:
  - 📧 Email (to be integrated)
  - 📱 SMS using Twilio
  - 🔔 In-App (stored in MongoDB)
- RESTful API for sending and retrieving notifications
- MongoDB for data storage using Mongoose
- Designed to be used in a MERN stack project

---

## 📦 Technologies Used

- Node.js
- Express.js
- MongoDB + Mongoose
- Twilio (for SMS)
- dotenv (for environment variables)
- body-parser / express.json()

1. Clone the repo
```bash
git clone https://github.com/your-username/notification-service.git
cd notification-service
2. Install dependencies
bash
Copy
Edit
npm install
3. Create a .env file
env
Copy
Edit
PORT=5000
MONGO_URI=your_mongodb_connection_string
TWILIO_SID=your_twilio_sid
TWILIO_AUTH_TOKEN=your_twilio_auth_token
TWILIO_PHONE_NUMBER=your_twilio_phone_number
4. Start the server
bash
Copy
Edit
npm run dev
Make sure MongoDB is running (local or Atlas).

🔌 API Endpoints
✅ Send a Notification
POST /api/notifications

json
Copy
Edit
{
  "userId": "+919876543210",
  "type": "sms", // or "in-app"
  "message": "This is a test notification"
}
📥 Get User Notifications
GET /api/users/{userId}/notifications

🔐 Twilio SMS Integration
Requires a free Twilio account

Add verified phone numbers in trial mode

Messages sent will include the "Twilio trial" note until upgraded

✅ To-Do
 Add email support via Nodemailer

 Add user authentication (JWT)

