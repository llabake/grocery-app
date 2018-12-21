import dotenv from 'dotenv';
import mongoose from 'mongoose';

import GroceryItem from './model/groceryItem';
import { items } from "./seed/groceryItems";
import config from './config'
dotenv.config();

const DATABASE_URL = process.env.DATABASE_URL;

mongoose.Promise = global.Promise;

if (config.use_env_variable) {
  mongoose.connect(process.env[config.use_env_variable], { useNewUrlParser: true });
} else {
  const { prefix, host, port, database } = config;
  const mongoUri = `${prefix}://${host}:${port}/${database}`;
  mongoose.connect(mongoUri, { useNewUrlParser: true }, () => {
    items.forEach(item => {
      GroceryItem.find({name: item.name}, (error, items) => {
        if(!error && !items.length) {
          GroceryItem.create(item);
        }
      });
    });
  });
}

// mongoose.connect(DATABASE_URL, { useNewUrlParser: true }, () => {
//
//   if (process.env.NODE_ENV !== 'production') {
//     items.forEach(item => {
//       GroceryItem.find({name: item.name}, (error, items) => {
//         if(!error && !items.length) {
//           GroceryItem.create(item);
//         }
//       });
//     });
//   }
// });

export default mongoose;