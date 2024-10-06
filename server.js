const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Razorpay = require('razorpay');
require('dotenv').config();
console.log("Razorpay Key ID:", process.env.RAZORPAY_KEY_ID);

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Razorpay instance
const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID, // Your Razorpay key ID
    key_secret: process.env.RAZORPAY_KEY_SECRET // Your Razorpay key secret
});

// Create Order Route
app.post('/create-order', (req, res) => {
    const options = {
        amount: req.body.amount, // Amount in paise
        currency: req.body.currency,
        receipt: req.body.receipt
    };

    razorpay.orders.create(options, (err, order) => {
        if (err) {
            return res.status(500).json({ error: err });
        }
        res.json(order);
    });
});

// Verify Payment Route
app.post('/verify-payment', (req, res) => {
    const { razorpay_payment_id, razorpay_order_id, razorpay_signature } = req.body;

    // TODO: Verify the signature
    // Generate the expected signature using the key secret
    const expectedSignature = crypto.createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
        .update(`${razorpay_order_id}|${razorpay_payment_id}`)
        .digest('hex');

    if (expectedSignature === razorpay_signature) {
        res.json({ success: true });
    } else {
        res.json({ success: false });
    }
});

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
