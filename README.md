# RayVision Digital Empowerment Trust

A full-stack web platform for the RayVision Digital Empowerment Trust, a registered non-profit NGO working to bridge India's digital divide in rural communities through digital literacy, cyber safety awareness, and skill development.

## Project Structure

This repository is organized as a monorepo with separate `frontend` and `backend` directories.

- **`frontend/`**: The React web application built with Vite, TailwindCSS v4, and Framer Motion.
- **`backend/`**: A Node.js/Express server that handles form submissions (Contact, Volunteer, CSR) and Razorpay integration for donations.

## Tech Stack

### Frontend
- React 19
- Vite
- TailwindCSS v4
- React Router DOM v7
- Framer Motion
- Lucide React
- Axios
- React Hot Toast

### Backend
- Node.js
- Express
- CORS
- dotenv

## Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn

### Setup & Installation

Since the `node_modules` folders are omitted from version control, you must install dependencies for both the frontend and backend.

**1. Start the Backend:**
```bash
cd backend
npm install
npm start
```
*The backend will run on `http://localhost:5000`.*

**2. Start the Frontend:**
Open a new terminal window:
```bash
cd frontend
npm install
npm run dev
```
*The frontend will run on `http://localhost:5173` (or similar).*

## Environment Variables
The project uses `.env` files for configuration. 

**Frontend (`frontend/.env`):**
- `VITE_API_URL`: Points to your backend (e.g., `http://localhost:5000/api/v1`)
- `VITE_RAZORPAY_KEY`: Your public Razorpay key for processing donations.

**Backend (`backend/.env`):**
- `PORT`: Server port (default: 5000)

## Features
- **Responsive Design**: Mobile-first UI using modern CSS features.
- **Interactive Gallery**: Filterable photo gallery with a custom lightbox.
- **Dynamic Forms**: Fully validated, state-managed forms for Volunteering, Partnerships, and Contacting.
- **Secure Donations**: Integrated Razorpay checkout flow with error resilience.
- **Animations**: Smooth page transitions and micro-interactions powered by Framer Motion.
