import express from 'express';
import colors from 'colors';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './db.js';
import router from './Router/router.js';
dotenv.config();
connectDB();
const app = express();
app.use(cors()); // ✅ Add CORS middleware to allow cross-origin requests
app.use(express.json()); // ✅ Add middleware to parse JSON requests

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.use('/hire', router); // ✅ Use Router instead of direct function

app.get('/about', (req, res) => {
  res.send('About page');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`.yellow.bold);
});
