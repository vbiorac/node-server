import { Schema } from 'mongoose';
import AuthorSchema from './author';
import CategorySchema from './category';
import CommentSchema from './comment';

const PostSchema = new Schema({
  author: { type: AuthorSchema },
  category: { type: CategorySchema },
  description: String,
  title: String,
  year: String,
  comments: [{
    type: CommentSchema,
    ref: 'Comment',
  }],
});
export default PostSchema;
