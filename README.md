# Granny Store – Modern E-Commerce Web App

A clean, responsive, and modern e-commerce web application built with **React**, **Redux Toolkit**, and **React Router**.

This project showcases a full shopping flow — from browsing products and viewing details to adding/removing items from the cart and checking out.

---

## Features

- **Home Page:** Hero section, featured products, and store overview.  
- **Products Page:** Fetches products dynamically from an API.  
- **Product Overview:** Displays detailed product information and allows adding/removing from the cart.  
- **Cart Page:** Real-time cart updates, quantity control, and total price calculation.  
- **State Management:** Implemented using **Redux Toolkit** for clean and efficient state handling.  
- **Contact Page:** Includes a working contact form and store location map.  
- **Routing:** Built with **React Router v6** for smooth navigation.  
- **UI Design:** Minimal, modern, and mobile-friendly using **Bootstrap 5** and custom CSS.

---

## Tech Stack

| Category | Technologies Used |
|-----------|------------------|
| **Frontend** | React 18, Redux Toolkit, React Router DOM |
| **UI / Styling** | Bootstrap 5, Custom CSS |
| **API** | Fake Store API *(or any custom REST API)* |
| **Build Tool** | Vite |

---

## Project Structure

src/
├── components/
│ ├── Navbar.jsx
│ ├── Footer.jsx
│ └── ProductCard.jsx
├── pages/
│ ├── Home.jsx
│ ├── ProductsList.jsx
│ ├── Overview.jsx
│ ├── Cart.jsx
│ ├── About.jsx
│ └── Contact.jsx
├── slices/
│ └── cartSlice.js
├── store.js
└── main.jsx

## Installation & Setup

```bash
# 1️⃣ Clone the repository
git clone https://github.com/yourusername/granny-store.git
cd granny-store

# 2️⃣ Install dependencies
npm install

# 3️⃣ Start the development server
npm run dev
---
Future Improvements

Add authentication & user accounts

Integrate payment gateway

Add product search & filtering

Use a real backend (Node.js / Django / Laravel)

Author

Kareem Kamel
Software Engineer | Full-stack Web Developer
