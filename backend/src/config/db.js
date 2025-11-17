import mongoose from 'mongoose';

const mongoConnect = async () => {
  try {
    const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/pawpal';
    await mongoose.connect(uri);
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection failed:', error);
    process.exit(1);
  }
};

export default mongoConnect;
