# MediTrack

## Introduction
MediTrack is a medication management platform that allows users to set reminders, manage medications based on illnesses, and track their adherence history. It simplifies healthcare routines by combining illness-based medicine suggestions with personalized reminder scheduling and adherence tracking.

## Project Type
Fullstack

## Deployed App
- Frontend: https://meditrack-frontend.vercel.app
- Backend: [Handled via Firebase Realtime Database]
- Database: https://userdatabase-f1b05-default-rtdb.firebaseio.com

## Directory Structure
```
MediTrack/
├─ frontend/
│  ├─ src/
│  │  ├─ Components/
│  │  ├─ Pages/
│  │  ├─ Redux/
│  │  ├─ styles/
│  │  ├─ App.jsx
│  │  └─ main.jsx
```

## Video Walkthrough of the Project
A short 2-minute walkthrough showcasing illness selection, medicine reminders, and dashboard overview.

## Video Walkthrough of the Codebase
A 4-minute walkthrough explaining React component structure, Firebase integration, and Redux store setup.

## Features
- User authentication
- Select illness and get suggested medicines
- Set time-based reminders for selected medicines
- Mark medicine as taken
- Reminders persist after logout via Firebase
- View current and past reminders (Pending/Taken)
- Profile page with logout
- Contact form and About page

## Design Decisions or Assumptions
- Used Firebase Realtime DB instead of MongoDB for easier data persistence and hosting
- Reminder time is stored in 24-hr format and used for future alarm-based notification (optional)
- Illness-to-medicine mapping is maintained via a static JSON file
- Dashboard is the main control panel post-login

## Installation & Getting Started
```bash
# Clone and install
npm install
npm run dev
```
Firebase setup:
- Realtime DB URL: https://userdatabase-f1b05-default-rtdb.firebaseio.com
- Create users and store reminders under: users/{userId}/reminders

## Usage
- User signs up or logs in
- Selects an illness and adds one or more suggested medicines
- Chooses reminder time
- Reminders show under 'Upcoming' and can be marked as 'Taken'

## Credentials
```
Test User:
Email: testuser@example.com
Password: 123456
```

## APIs Used
- Firebase Realtime Database (read/write reminders, users)

## API Endpoints (Firebase - REST-style)
- GET `/users/{userId}/reminders.json` — Fetch user reminders
- POST `/users/{userId}/reminders.json` — Add a new reminder
- PATCH `/users/{userId}/reminders/{reminderId}.json` — Update reminder status

## Technology Stack
- React.js
- Redux (legacy_createStore + thunk)
- Firebase Realtime Database
- Tailwind CSS (for styling)
- Vite (for bundling)
- Axios (for API requests)

---
This project was built to streamline medication tracking and offer personalized, illness-based care scheduling.
