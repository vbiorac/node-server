import { Schema } from 'mongoose';

const CommentSchema = new Schema({
  title: String,
  starRating: Number,
});
export default CommentSchema;
