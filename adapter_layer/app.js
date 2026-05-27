import express from "express";
import 'dotenv/config.js';
import authRoutes from './routes/authRoute.js';
import profileRoutes from './routes/profileRoute.js';


const app = express();

app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})
const port = 5500;

try {
    app.listen(process.env.PORT || 5500, () => {
        console.log(`Listening to port ${process.env.PORT || 5500}...`)
    });
} catch (e) {
    console.log(e);
}

app.use('/auth', authRoutes);
app.use('/api/profile', profileRoutes);