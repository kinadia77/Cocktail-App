# 🍸 **Cocktail-App – Final Frontend Project**

**👩‍💻 Author:** Karina Diaz  
**📚 Course:** Frontend  
**📅 Date:** November 2025  

---

## 🧭 **Introduction**
**Cocktail-App** is a React-based web application that allows users to explore and search for cocktail recipes, view detailed information, create an account or log in via Firebase Authentication, and save favorite cocktails to their personal list stored in Firebase Firestore.

This project was developed as the **final assignment** for the Frontend course, demonstrating clean React architecture, asynchronous data handling, reusable components, and modular responsive design.

---

## ⚙️ **Requirements**
Before running the project, make sure you have the following installed:

1. **Node.js (v18 or newer)**  
   👉 [Download Node.js](https://nodejs.org/)

2. **Firebase Project**  
   - Go to [Firebase Console](https://console.firebase.google.com/)  
   - Create a new project named **Cocktail-App**  
   - Enable **Firestore Database** and **Email/Password Authentication**  
   - Copy your Firebase configuration (API key, etc.)

---

## 🧩 **Project Structure**
```bash
src/
│
├── components/
│   ├── Navbar.jsx
│   ├── PrivateRoute.jsx
│
├── context/
│   └── AuthContext.jsx
│
├── firebase/
│   └── config.js
│
├── pages/
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Login.jsx
│   ├── SignUp.jsx
│   ├── SingleCocktail.jsx
│   ├── Dashboard.jsx
│   ├── Error.jsx
│   └── FirebaseTest.jsx
│
├── App.jsx
├── main.jsx
└── App.css / index.css / styles per page and components
```

---

## 🚀 **Installation & Setup**

### 1️⃣ Clone the repository
```bash
git clone https://github.com/kinadia77/Cocktail-App.git
cd Cocktail-App
```

### 2️⃣ Install dependencies
```bash
npm install
```

### 3️⃣ Configure Firebase
Create this file:
```
src/firebase/config.js
```

Paste your Firebase configuration:
```js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDxsT-KmTYMa5WpAFPjsvK2hRGKoudQa1E",
  authDomain: "cocktailapp-2c09d.firebaseapp.com",
  projectId: "cocktailapp-2c09d",
  storageBucket: "cocktailapp-2c09d.firebasestorage.app",
  messagingSenderId: "682303422115",
  appId: "1:682303422115:web:e92dcb981bddde5b8f8916"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
```

### 4️⃣ Run the development server
```bash
npm run dev
```

Then open your browser at:  
➡️ http://localhost:5173

---

## 🔐 **Login & Authentication**

You can register a new account through the **Sign-Up** form.  
Or use this demo account for testing:

| Role | Email | Password |
|------|--------|-----------|
| User | demo@cocktailapp.com | cocktail123 |

---

## 🧠 **Available npm Commands**

| Command | Description |
|----------|-------------|
| `npm run dev` | Starts the development server |
| `npm run build` | Builds the app for production |
| `npm run preview` | Previews the production build locally |
| `npm run lint` | Runs ESLint for code quality |

---

## 🎨 **Design & Styling**

- Fully responsive layout using **Flexbox** and **CSS Grid**  
- Modern **violet / coral / gold** color palette  
- Modular CSS files per component and page  
- Global variables and typography in `index.css`  
- Smooth hover effects and consistent spacing  

---

## 💡 **Key Features**

✅ Firebase Authentication (Register / Login)  
✅ Protected Routes via PrivateRoute  
✅ Global State Management with Context API (AuthContext)  
✅ Favorites stored in Firebase Firestore  
✅ Async API fetching with error handling  
✅ Responsive and modular CSS design  
✅ Clean, structured React codebase  

---

## 🚢 **Deployment**

To build the project for production:
```bash
npm run build
```

To preview the production build locally:
```bash
npm run preview
```

If you plan to deploy to GitHub Pages or Vercel:
```bash
npm run deploy
```

---

## 🧾 **Notes**

- Ensure Firebase Firestore rules allow authenticated users to read/write.  
- Verify that all imports use consistent casing (`AuthContext`, `PrivateRoute`, etc.).  
- Double-check that the context provider wraps your routes correctly in `App.jsx`.  
- Use the temporary route `/test` to verify Firebase connectivity (`FirebaseTest.jsx`).  

---

## 📸 **Screenshots (optional)**
You can add screenshots of your app interface:

![Home Page](./screenshots/home.png)  
![Dashboard](./screenshots/dashboard.png)  
![Login Page](./screenshots/login.png)  

---

## 👩‍💻 **Author**

**Karina Diaz**  
Frontend Developer – Assignment (Eindopdracht Frontend)  
📅 November 2025  
📧 kinadia77@gmail.com  
