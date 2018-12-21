import mongoose, { Schema } from 'mongoose';

const groceryItemSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Enter a name'],
    trim: true,
    minLength: 5,
    maxLength: 30
  },
  purchased: {
    type: Boolean,
    default: false
  }
}, { timestamps: true });

export default mongoose.model('GroceryItem', groceryItemSchema);
