# Employee Management System (HRMS)

## Abstract

Employee Management System is a web application that provides all members of an organization/firm an easy and smooth experience in performing their tasks. It manages employee information, attendance, leave management, and project allocations. This project is built with Express.js, Node.js, MongoDB, HTML, Bootstrap, CSS, and JavaScript.

## Product Features

The product consists of the following features:
1. Separate user accounts for admin, employee, project manager, and accounts manager
2. Customized views and information access based on user privileges
3. Employee/Admin registration system
4. Attendance management for all employees
5. Salary, bonus, and hike management
6. Employee educational and industrial experience records
7. Project allocation and management within the firm

## User Roles

### 1. Admin
Complete system access including:
- Employee registration and privilege management
- Attendance viewing and modification
- Employee salary management
- Employee profile deletion
- Project allocation/de-allocation
- Leave application approval/disapproval

### 2. Employee
- Mark personal attendance
- View attendance history
- View current salary and profile
- View assigned projects and team members
- Apply for leave and check application status

### 3. Project Manager
- View employee skills
- Provide performance appraisals

### 4. Accounts Manager
- Generate employee pay slips
- Set bonuses and salary increments
- Email pay slips to employees

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB Atlas account OR local MongoDB installation
- Git

### 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Employee-Management-System
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Configuration**
   
   Create a `.env` file in the root directory with the following variables:
   ```env
   # Server Configuration
   PORT=3000
   NODE_ENV=development

   # Database Configuration (MongoDB Atlas or Local)
   MONGODB_URI=mongodb+srv://your-username:your-password@cluster.mongodb.net/HRMS
   # OR for local MongoDB:
   # MONGODB_URI=mongodb://localhost:27017/HRMS

   # Session Configuration
   SESSION_SECRET=your-super-secure-session-secret-here
   SESSION_MAX_AGE=10800000

   # Authentication Configuration
   BCRYPT_ROUNDS=10

   # Application Settings
   APP_NAME=Employee Management System
   APP_VERSION=1.0.0

   # Security Settings
   COOKIE_MAX_AGE=10800000

   # Development/Debug Settings
   DEBUG=hrms:*
   ```

   **⚠️ Important**: Replace the MongoDB URI with your actual database connection string and change the SESSION_SECRET to a secure random string.

### 🗃️ Database Setup

**Seed the database with initial data:**
```bash
npm run seed
```

This will create default user accounts:
- **Admin**: admin@admin.com / admin123
- **Project Manager**: pm@pm.com / pm1234
- **Accounts Manager**: am@am.com / am1234
- **Employee**: anshu@gmail.com / 123456
- **Employee**: ShivamSharma@sample.com / 123456

### 🏃‍♂️ Running the Application

**Development Mode (with auto-restart):**
```bash
npm run dev
```

**Production Mode:**
```bash
npm run prod
```

**Standard Start:**
```bash
npm start
```

**Available Scripts:**
```bash
npm run dev          # Development with auto-restart
npm run dev:debug    # Development with debug logging
npm run prod         # Production mode
npm start           # Standard production start
npm run seed         # Seed database with initial data
npm run clean        # Clean install dependencies
npm run update       # Update dependencies
npm run security     # Run security audit
```

### 🌐 Access the Application

1. Open your browser and navigate to: **http://localhost:3000**
2. Use the seeded user credentials to log in
3. The application is now ready to use!

### 🔧 Development

- The server runs on port 3000 by default (configurable via PORT environment variable)
- In development mode, the server automatically restarts when files change
- MongoDB connection is established automatically on startup
- Session data is stored in MongoDB for persistence

### 🛡️ Security Notes

- Never commit your `.env` file to version control
- Change the default SESSION_SECRET in production
- Use strong passwords for database connections
- Regularly update dependencies for security patches

### 📝 Environment Variables Reference

| Variable | Description | Default |
|----------|-------------|---------|
| `PORT` | Server port | `3000` |
| `MONGODB_URI` | Database connection string | `mongodb://localhost:27017/HRMS` |
| `SESSION_SECRET` | Session encryption key | Required |
| `BCRYPT_ROUNDS` | Password hashing strength | `10` |
| `NODE_ENV` | Environment mode | `development` |
| `COOKIE_MAX_AGE` | Cookie expiration time | `10800000` (3 hours) |

### 🎥 Demo

Demo of the project: https://drive.google.com/file/d/1pUlNntQYFlpagHyjez5iPQPFGNepoDUY/view?usp=sharing

---

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request# Employee-Management-System
