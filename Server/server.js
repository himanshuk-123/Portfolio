import express from 'express';
import colors from 'colors';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './db.js';
import sendMessageRouter from './Router/sendMessage.js';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// Connect to MongoDB before starting the server
connectDB().then(() => {
    console.log("✅ Database Connected Successfully");

    // Start the server only after DB connection is successful
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
        console.log(`🚀 Server running on port ${PORT}`.yellow.bold);
    });
}).catch((error) => {
    console.error("❌ Database connection failed:", error);
    process.exit(1); // Exit process if DB fails to connect
});

// Routes
app.get('/', (req, res) => res.send('API is running...'));
app.use('/hire', sendMessageRouter);
app.get('/about', (req, res) => res.send('About page'));
