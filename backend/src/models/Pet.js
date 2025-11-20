import mongoose from 'mongoose';

const petSchema = new mongoose.Schema({
  ownerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  name: { type: String, required: true },
  type: String,
  breed: String,
  age: Number,
  weight: Number,
  bio: String,
  photo: String,
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Pet', petSchema);
