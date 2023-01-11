import mongoose, { Schema } from 'mongoose';

const PostSchema = new Schema({
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'Author' },
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
  description: String,
  title: String,
  year: String,
  comments: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Comment',
  }],
});

const PostModel = mongoose.model('Posts', PostSchema);

export default PostModel;
