import express from 'express';
import 'dotenv/config';
import authRoutes from './routes/authRoute.js';

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use('/auth', authRoutes);

app.use((req, res) => {
  res.status(404).json({
     message: "Route not found"
});
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});