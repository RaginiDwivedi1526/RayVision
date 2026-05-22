import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api/v1',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

export async function submitContact(data) {
  return api.post('/contact', data);
}

export async function submitVolunteer(data) {
  return api.post('/volunteer', data);
}

export async function submitCSR(data) {
  return api.post('/csr', data);
}

// --- Admin Endpoints ---
export async function getContacts() {
  return api.get('/admin/contacts');
}

export async function getVolunteers() {
  return api.get('/admin/volunteers');
}

export async function getCSRs() {
  return api.get('/admin/csr');
}

export async function createDonationOrder(data) {
  return api.post('/donate/create-order', data);
}

export async function verifyPayment(data) {
  return api.post('/donate/verify', data);
}

export function loadRazorpay() {
  return new Promise((resolve, reject) => {
    if (window.Razorpay) {
      resolve(window.Razorpay);
      return;
    }
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onload = () => resolve(window.Razorpay);
    script.onerror = () => reject(new Error('Razorpay SDK failed to load'));
    document.body.appendChild(script);
  });
}

export default api;
