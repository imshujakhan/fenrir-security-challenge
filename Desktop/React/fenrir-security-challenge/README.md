# Fenrir Security Platform

A security scanning dashboard for monitoring and managing vulnerability scans with real-time activity tracking.

## Features

- User authentication (login/signup)
- Security scan dashboard
- Real-time scan progress tracking
- Vulnerability findings display
- Dark/Light theme toggle
- Search and filter scans
- Responsive design

## Tech Stack

- React 18 + Vite
- React Router v6 (navigation)
- Tailwind CSS (styling)
- Context API (theme management)

## Quick Start

```bash
npm install
npm run dev
```

Visit `http://localhost:5173`

## Project Structure

```
src/
├── pages/         # Main screens (Login, Dashboard, ScanDetail)
├── components/    # Reusable UI components
├── context/       # Theme context
└── data/          # Mock scan data
```

## Features Breakdown

**Authentication**: Login and signup forms with validation  
**Dashboard**: Overview of all security scans with status  
**Scan Details**: Live activity feed and vulnerability findings  
**Theme Toggle**: Switch between dark and light modes

## Mock Data

Uses local JSON data for demonstration. Replace with real API in production.

## Styling

Tailwind CSS with custom dark mode configuration.
