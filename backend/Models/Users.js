import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  boards: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Board' }]
});

export default mongoose.model('User', UserSchema);
