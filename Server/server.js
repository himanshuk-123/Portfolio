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

let isDBConnected = false;

// Route to start the server & database connection dynamically
app.get('/start', async (req, res) => {
    if (!isDBConnected) {
        try {
            await connectDB();
            isDBConnected = true;
            console.log("✅ Database Connected Successfully");
            res.status(200).json({ message: "Database Connected" });
        } catch (error) {
            console.error("❌ Database Connection Failed:", error);
            return res.status(500).json({ error: "Database Connection Failed" });
        }
    } else {
        res.status(200).json({ message: "Database Already Connected" });
    }
});

// Routes
app.use('/hire', sendMessageRouter);
app.get('/', (req, res) => res.send('API is running...'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`.yellow.bold);
});
