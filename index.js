// app.js
import express from 'express';
import mongoose from 'mongoose';
import dishRoutes from './routes/dishes.js';
import cors from 'cors';
import { createRequire } from 'module';
import Dish from './models/dish.mjs';


const require = createRequire(import.meta.url);

const app = express();
const dishes = require('./scripts/dishes.json');

mongoose.connect('mongodb://127.0.0.1:27017/dishmanager', { useNewUrlParser: true, useUnifiedTopology: true })
.then(async () => {
    await Dish.deleteMany({});
    await Dish.insertMany(dishes);
    console.log('Data successfully loaded!');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

app.use(
    cors({
        origin: ["http://localhost:3000", "http://localhost:8000"],
        credentials : true
    })
)

app.use(express.json());
app.use('/api/dishes', dishRoutes);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
