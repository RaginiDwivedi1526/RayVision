const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./config/db');

// Connect to Database
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

// Models
const Contact = require('./models/Contact');
const Volunteer = require('./models/Volunteer');
const CSR = require('./models/CSR');

app.use(cors());
app.use(express.json());

// API endpoints fallback success for now

app.post('/api/v1/contact', async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ success: false, message: 'Missing required fields' });
    }
    
    const newContact = await Contact.create({ name, email, phone, message });
    console.log('Contact form saved:', newContact._id);
    
    res.status(200).json({ success: true, message: 'Message sent successfully' });
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({ success: false, message: 'Server error while submitting form' });
  }
});

app.post('/api/v1/volunteer', async (req, res) => {
  try {
    const newVolunteer = await Volunteer.create(req.body);
    console.log('Volunteer form saved:', newVolunteer._id);
    res.status(200).json({ success: true, message: 'Application submitted successfully' });
  } catch (error) {
    console.error('Volunteer form error:', error);
    res.status(500).json({ success: false, message: 'Server error while submitting form' });
  }
});

app.post('/api/v1/csr', async (req, res) => {
  try {
    const newCSR = await CSR.create(req.body);
    console.log('CSR form saved:', newCSR._id);
    res.status(200).json({ success: true, message: 'Proposal submitted successfully' });
  } catch (error) {
    console.error('CSR form error:', error);
    res.status(500).json({ success: false, message: 'Server error while submitting form' });
  }
});

// --- Admin GET Endpoints ---
app.get('/api/v1/admin/contacts', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: contacts });
  } catch (error) {
    console.error('Fetch contacts error:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

app.get('/api/v1/admin/volunteers', async (req, res) => {
  try {
    const volunteers = await Volunteer.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: volunteers });
  } catch (error) {
    console.error('Fetch volunteers error:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

app.get('/api/v1/admin/csr', async (req, res) => {
  try {
    const csr = await CSR.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: csr });
  } catch (error) {
    console.error('Fetch CSR error:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// Razorpay Donate placeholders
app.post('/api/v1/donate/create-order', (req, res) => {
  const { amount } = req.body;
  // This is a placeholder for razorpay order creation
  const dummyOrderId = 'order_' + Math.random().toString(36).substring(2, 15);
  res.status(200).json({ success: true, orderId: dummyOrderId, amount: amount });
});

app.post('/api/v1/donate/verify', (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;
  console.log('Payment verification:', req.body);
  res.status(200).json({ success: true, message: 'Payment verified successfully' });
});

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
