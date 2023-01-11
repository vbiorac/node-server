import mongoose, { Schema } from 'mongoose';

export const CommentSchema = new Schema({
  title: String,
  starRating: Number,
});

const CommentModel = mongoose.model('Comment', CommentSchema);

export default CommentModel;
