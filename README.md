# Blogify-fullstack-blog-app
📑 Blogify – A Full-Stack Blogging Platform
📌 Introduction

Blogify is a full-stack blogging platform that allows users to create, manage, and interact with blog posts.
It integrates a Spring Boot (Java) backend with a React.js frontend, ensuring seamless user experience and secure data management.

✨ Features
🔹 Backend (Spring Boot + MySQL)

User Authentication & Authorization (JWT-based).

Role-based access control (Admin/User).

CRUD operations for Posts and Comments.

REST APIs following industry standards.

Secure password hashing with Spring Security.

Input validation & structured error handling.

🔹 Frontend (React.js)

Dynamic, responsive UI with Bootstrap.

React Router for smooth navigation.

Multi-language support (English, Hindi).

Real-time rendering of posts & comments.

Reusable components:

LoginForm, RegistrationForm, NewPostForm, PostThumbnail, CommentsList.

Loading indicators & error messages.

🛠️ Tech Stack

Frontend: React.js, Bootstrap, i18n (multi-language)

Backend: Spring Boot, Spring Security, Spring Data JPA

Database: MySQL

Authentication: JWT (JSON Web Tokens)

⚙️ Installation & Setup
🔧 Prerequisites

Node.js (>=16) & npm/yarn

Java 17+

MySQL installed and running

📍 Backend Setup (Spring Boot)
# Navigate to backend folder
cd blogify-backend

# Update database credentials in src/main/resources/application.properties
spring.datasource.url=jdbc:mysql://localhost:3306/blogify
spring.datasource.username=root
spring.datasource.password=yourpassword

# Build & run
./mvnw spring-boot:run


The backend will run on: http://localhost:8080

🎨 Frontend Setup (React)
# Navigate to frontend folder
cd blogify-frontend

# Install dependencies
npm install

# Start development server
npm start


The frontend will run on: http://localhost:3000

🚀 Deployment

Backend can be deployed on Render / AWS / Heroku.

Frontend can be deployed on Vercel / Netlify.

Environment variables required (for Render):

PORT=10000
SPRING_DATASOURCE_URL=jdbc:postgresql://<host>:5432/<dbname>
SPRING_DATASOURCE_USERNAME=<username>
SPRING_DATASOURCE_PASSWORD=<password>
SPRING_PROFILES_ACTIVE=prod
JWT_SECRET=your-secret-key

📊 Outcomes

Secure authentication with JWT.

Full CRUD functionality for blogs & comments.

Multi-language UI (English & Hindi).

Responsive, mobile-friendly design.

🔮 Future Scope

Deploy on cloud (AWS/Heroku).

Add rich text editor (images, videos).

Implement search & filter.

Email notifications for user interactions.

Social media integration.

Mobile app version using React Native.

👨‍💻 Author

Praveen Singh Rajput
© 2025 Blogify
