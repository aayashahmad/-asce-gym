# ASCE Gym Management System

A modern gym management system built with React frontend and PHP backend.

## Project Structure

```
asce-gym/
├── backend/          # PHP + MySQL backend
├── frontend/         # React frontend
└── db_schema.sql     # Database schema
```

## Setup Instructions

### Backend Setup
1. Ensure PHP and MySQL are installed
2. Import the database schema:
   ```bash
   mysql -u root -p < db_schema.sql
   ```
3. Configure database credentials in `backend/db.php`

### Frontend Setup
1. Navigate to frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start development server:
   ```bash
   npm start
   ```

## Features
- Membership Registration
- Class Scheduling
- Trainer Management
- Booking System
- Responsive Design

## Technologies Used
- Frontend: React, Tailwind CSS
- Backend: PHP, MySQL
- Database: MySQL # -asce-gym
