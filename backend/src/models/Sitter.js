import mongoose from 'mongoose';

const sitterSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  services: [{
    name: String,
    price: Number,
    description: String
  }],
  availability: [String],
  experience: String,
  skills: [String],
  hourlyRate: Number,
  verified: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Sitter', sitterSchema);
