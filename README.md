# 🌉 Bridge Between Investor and Business People

A web-based platform that connects **investors** with **business people** who are looking for funding.  
The system provides separate dashboards for **Investors** and **Business Owners**, allowing them to post ideas, browse opportunities, and connect effectively.  

---

## 🚀 Features

### 👔 Business People
- Register/Login securely  
- Post business ideas with descriptions and funding requirements  
- View responses from interested investors  

### 💰 Investors
- Register/Login securely  
- Browse business ideas posted by entrepreneurs  
- Send interest/feedback to business owners  

### ⚙️ General
- Firebase Authentication (secure login/register)  
- Firebase Firestore Database (store users, ideas, responses)  
- Role-based access (Investor Dashboard & Business Dashboard)  
- Responsive design for desktop and mobile  

---

## 🛠️ Tech Stack
- **Frontend:** HTML, CSS, JavaScript  
- **Backend/Database:** Firebase (Authentication + Firestore)  
- **Hosting:** Firebase Hosting / GitHub Pages  

---

## 📂 Project Structure




---

## 🔑 Firebase Setup
1. Go to [Firebase Console](https://console.firebase.google.com/)  
2. Create a new project (e.g., `bridge-investor-business`).  
3. Enable **Authentication** → Email/Password.  
4. Enable **Firestore Database**.  
5. Get your Firebase config from **Project Settings**.  
6. Replace inside `script.js`:

```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};



---
