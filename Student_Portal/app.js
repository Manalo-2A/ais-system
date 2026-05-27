import express from "express";
import 'dotenv/config.js';
import studentRoutes from './routes/studentRoute.js';
import cors from 'cors';

const app = express();

let corseOptions = {
    origin: process.env.ORIGIN
};

app.use(express.json());
app.use(cors(corseOptions));

// Logging middleware
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

// Use student routes
app.use('/api/student', studentRoutes);

const port = process.env.PORT || 5501; 

try {
    app.listen(port, () => {
        console.log(`Student Profile listening on port ${port}...`);
    });
} catch (e) {
    console.log(e);
}