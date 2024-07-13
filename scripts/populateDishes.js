// scripts/populateDishes.js
import mongoose from 'mongoose';
import Dish from '../models/dish.mjs';
import dishesData from './dishes.json' assert { type: 'json' };

mongoose.connect('mongodb://localhost:27017/dishmanager', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    await Dish.deleteMany({});
    await Dish.insertMany(dishesData);
    console.log('Data successfully loaded!');
    mongoose.disconnect();
  })
  .catch(err => {
    console.error(err);
    mongoose.disconnect();
  });

  

  