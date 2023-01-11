import mongoose, { Schema } from 'mongoose';
import { isEmail } from 'validator';

export const AuthorSchema = new Schema({
  firstName: String,
  lastName: String,
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    validate: [isEmail, 'invalid email'],
  },
});

const AuthorModel = mongoose.model('Author', AuthorSchema);

export default AuthorModel;
