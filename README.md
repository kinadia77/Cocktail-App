# 🍸 Cocktail App – Final Frontend Project

**👩‍💻 Author:** Karina Diaz  
**📚 Course:** Frontend Development  
**📅 Date:** November 2025  

---

## 🧭 Introduction
**Cocktail-App** is a React-based application that allows users to search cocktails, view detailed recipes, register/log in using Firebase Authentication, and save their favorite cocktails using Firebase Firestore.

This project was developed as the **final assignment (Eindopdracht Frontend)** and demonstrates:

- Clean component-based architecture  
- State management using Context  
- Asynchronous API calls  
- Protected routing  
- Modular, responsive CSS  
- Firebase integration (Auth + Firestore)

---

## ⚙️ Requirements

Before running the project, make sure you have:

- **Node.js v18+**  
- **Firebase account**  
- **Modern browser**  
- **Git installed**

---

## 📁 Project Structure

```
src/
│
├── components/
│   ├── Navbar.jsx
│   ├── Cocktail.jsx
│   ├── CocktailList.jsx
│   └── PrivateRoute.jsx
│
├── context/
│   └── AuthContext.jsx
│
├── firebase/
│   └── config.js
│
├── hooks/
│   ├── useFetchList.js
│   └── useFetchCocktail.js
│
├── pages/
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Login.jsx
│   ├── SignUp.jsx
│   ├── SingleCocktail.jsx
│   ├── Dashboard.jsx
│   └── Error.jsx
│
├── App.jsx
├── main.jsx
└── styles/
```

---

## 🧩 Environment Variables

Create a `.env` file in the root directory of the project:

```
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=
```

⚠️ **Never commit your real Firebase credentials to GitHub.**

---

## 🚀 Installation & Setup

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
Create:

```
src/firebase/config.js
```

Add:

```js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
```

### 4️⃣ Start the development server
```bash
npm run dev
```

Open:  
➡️ http://localhost:5173

---

## 🔐 Authentication

Users can register and log in using email/password via Firebase Authentication.

Protected pages are only accessible when logged in.

---

## ⭐ Key Features

- Search cocktails by name  
- View full recipe details  
- Responsive UI for mobile, tablet and desktop  
- Firebase Authentication  
- Save favorites in Firestore  
- Private routes  
- Custom React hooks  
- Error & loading states  
- Clean, structured code  

---

## 📦 npm Scripts

| Command | Description |
|--------|-------------|
| `npm run dev` | Run development server |
| `npm run build` | Build production version |
| `npm run preview` | Preview production build |
| `npm run lint` | Check code quality |

---

## 🎨 Design & Styling

- Modular CSS (one file per component/page)  
- Flexbox & media queries  
- Simple, accessible layout  
- Semantic HTML elements  
- Clean spacing & typography  

---

## 📝 Future Improvements

- Add animations  
- Pagination in search results  
- Social login (Google, GitHub)  
- User profile customization  
- Store recently viewed cocktails  

---

## 👩‍💻 Author

**Karina Diaz**  
Frontend Developer  
📅 November 2025  
📧 kinadians77@gmail.com  

<!-- PR 1: Minor documentation update -->
