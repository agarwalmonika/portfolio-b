# 🌐 Monika Agarwal — Personal Portfolio Website

> A full-stack personal portfolio website built with the MERN stack (MongoDB, Express.js, React-ready, Node.js) as part of my internship project at **Codec Technologies**.

![Portfolio Preview](public/images/profile.jpg)

---

## 👩‍💻 About Me

**Monika Agarwal**
- 🎓 B.Tech ECE Student — Arya College of Engineering & IT, Jaipur (2023–2027)
- 🥉 Bronze Medalist — RSLDC IndiaSkilss Competition in Web Technology
- 💼 Full Stack Developer Intern — Codec Technologies
- 📧 monikaagarwal7276@gmail.com
- 🔗 [LinkedIn](https://www.linkedin.com/in/monika-agarwal-1706442b4)
- 🐙 [GitHub](https://github.com/agarwalmonika)

---

## 🚀 Live Demo

> Run locally: `http://localhost:5000`

---

## 🛠️ Tech Stack

### Frontend
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

### Backend
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)

### Database
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)

### Tools
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
![VS Code](https://img.shields.io/badge/VS%20Code-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white)

---

## ✨ Features

- ✅ **Fully Responsive** — Mobile-first design, works on all screen sizes
- ✅ **Dynamic Content** — Projects and skills loaded from MongoDB via REST APIs
- ✅ **Contact Form** — With backend validation and MongoDB storage
- ✅ **Email Integration** — Server-side email using Nodemailer
- ✅ **MVC Architecture** — Clean layered folder structure
- ✅ **Security** — Helmet.js, CORS, rate limiting, environment variables
- ✅ **Animations** — Typewriter effect, orbit animation, fade-in-up on scroll
- ✅ **REST APIs** — `/api/portfolio/projects`, `/api/portfolio/skills`, `/api/contact`

---

## 📁 Project Structure

```
portfolio-b/
│
├── config/
│   └── db.js                  # MongoDB connection
│
├── controllers/
│   ├── contactController.js   # Contact form logic + email
│   └── portfolioController.js # Projects & skills + seed data
│
├── models/
│   ├── Contact.js             # Contact schema
│   ├── Project.js             # Project schema
│   └── Skill.js               # Skill schema
│
├── routes/
│   ├── contact.js             # POST /api/contact
│   └── portfolio.js           # GET /api/portfolio/projects & skills
│
├── public/
│   ├── css/
│   │   └── style.css          # All styles
│   ├── js/
│   │   └── main.js            # Frontend JavaScript
│   ├── images/
│   │   └── profile.jpg        # Profile photo
│   └── index.html             # Main HTML file
│
├── server.js                  # Express app entry point
├── package.json
├── .env                       # Environment variables (not uploaded)
└── .gitignore
```

---

## ⚙️ Installation & Setup

### Prerequisites
- Node.js v18+ installed
- MongoDB (local or Atlas)

### Steps

**1. Clone the repository**
```bash
git clone https://github.com/agarwalmonika/portfolio-b.git
cd portfolio-b
```

**2. Install dependencies**
```bash
npm install
```

**3. Create `.env` file**
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/portfolio
EMAIL_USER=your_gmail@gmail.com
EMAIL_PASS=your_gmail_app_password
NODE_ENV=development
```

**4. Start the server**
```bash
npm run dev
```

**5. Seed the database (run once)**
```
http://localhost:5000/api/portfolio/seed
```

**6. Open portfolio**
```
http://localhost:5000
```

---

## 🔗 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/portfolio/projects` | Get all projects |
| GET | `/api/portfolio/skills` | Get all skills |
| GET | `/api/portfolio/seed` | Seed initial data |
| POST | `/api/contact` | Submit contact form |
| GET | `/api/contact` | Get all messages |

---

## 🎓 Internship Project

This project was built as part of my **Full Stack Developer Internship** at **Codec Technologies**.

**What I learned:**
- Building REST APIs with Node.js and Express.js
- Connecting and querying MongoDB using Mongoose
- MVC architecture and clean code structure
- Environment variable configuration and security
- Full stack integration (frontend ↔ backend ↔ database)
- Deployment preparation

---

## 📜 Certifications

- 🏅 Git & Version Control
- 🏅 JavaScript
- 🏅 Modern Web Development
- 🏅 Deloitte Virtual Job Simulation (Software Development)
- 🥉 RSLDC IndiaSkilss — Bronze Medal in Web Technology
- 💼 Codec Technologies — Full Stack Developer Internship

---

## 📞 Contact

**Monika Agarwal**
- 📧 Email: [monikaagarwal7276@gmail.com](mailto:monikaagarwal7276@gmail.com)
- 📱 Phone: +91 9929313470
- 🔗 LinkedIn: [monika-agarwal-1706442b4](https://www.linkedin.com/in/monika-agarwal-1706442b4)
- 🐙 GitHub: [agarwalmonika](https://github.com/agarwalmonika)
- 📍 Location: Jaipur, Rajasthan, India

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">Made with ❤️ by <strong>Monika Agarwal</strong> | B.Tech ECE | Arya College, Jaipur</p>