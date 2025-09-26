# QTakeoff Frontend

[![React](https://img.shields.io/badge/React-18.2.0-blue?logo=react&logoColor=white)](https://reactjs.org/) [![Redux Toolkit](https://img.shields.io/badge/Redux%20Toolkit-RTK-purple?logo=redux&logoColor=white)](https://redux-toolkit.js.org/) [![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.3.3-blue?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/) [![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)

> A React + Redux Toolkit frontend for QTakeoff with authentication, role-based dashboards, and responsive UI using TailwindCSS.

---

## Overview

Frontend for QTakeoff featuring:

- User registration and login
- Role-based dashboards (User vs Estimator)
- RTK Query integration
- Responsive UI with TailwindCSS
- Error handling and loading states

---

## Features

- **Authentication:** Registration and login with JWT tokens
- **Role-based Routing:** Redirect users by role (`user` or `estimator`)
- **Responsive UI:** TailwindCSS styling
- **State Management:** Redux Toolkit + RTK Query
- **Reusable Components:** Button component with loading states

---

## Technologies Used

- React.js (Functional Components & Hooks)
- Redux Toolkit & RTK Query
- React Router DOM v6
- TailwindCSS
- JavaScript (ES6+)

---

## Project Structure

src/
├── app/
│ ├── api.js
│ └── store.js
├── features/
│ └── auth/
│ ├── authApi.js
│ └── authSlice.js
├── pages/
│ ├── LandingPage.jsx
│ ├── LoginForm.jsx
│ ├── RegisterForm.jsx
│ ├── UserDashboard.jsx
│ └── EstimatorDashboard.jsx
├── components/
│ └── Buttons.jsx
└── main.jsx
