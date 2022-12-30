import { Schema } from 'mongoose';
import { isEmail } from 'validator';

const AuthorSchema = new Schema({
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
export default AuthorSchema;
