import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import routes from './Src/Routes/notification.routes.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;


mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.log('Error connecting to MongoDB', error);
});

app.get('/', (req, res) => {
    res.send('Hello World 3!');
});

app.use('/v1', routes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});




