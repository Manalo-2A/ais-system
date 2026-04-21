import express from "express"
import 'dotenv/config.js'
import usersRoutes from "./routes/userRoutes.js"
import cors from 'cors';

const app = express()



app.use(express.json());
app.use(cors({
    origin: process.env.ORIGIN
}));


try {
    app.listen(process.env.PORT || 3000, () => {
        console.log(`listening to ${process.env.PORT || 3000}`)
    })
} catch (e) {
    console.log(e)
}

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});


app.use('/user', usersRoutes);