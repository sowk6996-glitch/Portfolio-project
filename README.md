# 🚀 CodeFolio – A Portfolio Builder for Developers

## 📌 Project Overview

CodeFolio is a full-stack portfolio builder that enables developers to create professional portfolio websites without writing HTML or CSS manually. Users can manage their profile, projects, skills, and portfolio templates through an interactive dashboard.

The application dynamically generates portfolio websites using multiple templates and provides a public portfolio link for every user.

---

## ✨ Features

- User Registration & Login
- JWT Authentication
- Developer Dashboard
- Profile Management
- Project Management
- Skills Management
- Multiple Portfolio Templates
- Dynamic Portfolio Routing (/:username)
- Live Portfolio Preview
- Contact Form with Nodemailer
- Responsive Design
- SEO using React Helmet
- MongoDB Database Integration

---

## 🛠 Tech Stack

### Frontend
- React.js
- React Router DOM
- React Hook Form
- React Helmet
- HTML5
- CSS3
- JavaScript (ES6)

### Backend
- Node.js
- Express.js

### Database
- MongoDB
- Mongoose

### Authentication
- JWT (JSON Web Token)
- bcryptjs

### Email Service
- Nodemailer

### Version Control
- Git
- GitHub

---

## 📁 Project Structure

```
CodeFolio/
│
├── frontend/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── About.jsx
│   │   ├── Templates.jsx
│   │   ├── Pricing.jsx
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   ├── Contact.jsx
│   │   ├── Dashboard.jsx
│   │   ├── Profile.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   ├── Preview.jsx
│   │   ├── Settings.jsx
│   │   ├── App.css
│   │   └── main.jsx
│
├── backend/
│   ├── server.js
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── middleware/
│   └── package.json
│
├── README.md
└── package.json
```

---

## 🔑 Modules

### Authentication
- User Registration
- User Login
- JWT Authentication

### Dashboard
- Manage Profile
- Manage Skills
- Manage Projects
- Live Preview

### Portfolio Templates
- Minimal Template
- Cyberpunk Template
- Corporate Template

### Contact Form
Visitors can contact developers through a secure email form powered by Nodemailer.

---

## 🌐 Dynamic Routing

Every registered user receives a personalized portfolio URL.

Example:

```
/john
/sowjanya
/developer123
```

---

## 🔒 Security

- Password Encryption using bcryptjs
- JWT Authentication
- Protected Dashboard Routes

---

## 🚀 Installation

### Clone Repository

```bash
git clone https://github.com/your-username/codefolio.git
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

### Backend

```bash
cd backend
npm install
node server.js
```

---

## 📷 Screens

🏠 Home
👤 About
🎨 Templates (Minimal, Cyberpunk, Corporate)
💰 Pricing
🔐 Login
📝 Register
📊 Dashboard
👤 Profile
💼 Projects
💻 Skills
👀 Live Preview
⚙️ Settings
📞 Contact
🌐 Public Portfolio (/:username)

---

## 📌 Future Enhancements

- Custom Domains
- AI Portfolio Suggestions
- Resume Builder
- Dark Mode
- Analytics Dashboard
- Social Login
- Portfolio Themes Marketplace

---

## 👩‍💻 Developed By

**K V Sowjanya**

Computer Science & Engineering Student

---

## 📄 License

This project is developed for educational and internship purposes.
