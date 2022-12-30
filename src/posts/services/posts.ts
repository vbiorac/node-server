import mongoose, { Document } from 'mongoose';
import PostSchema from '../schemas/post';

const getPostsByParams = async (req: any) => {
  // await Posts.getConnection();
  const PostModel = mongoose.model('Posts', PostSchema);
  const items: any[] = [];
  await PostModel.collection.find().forEach((item) => {
    items.push(item);
    // posts.push(new Post(item));
  });
  return items;
};

const createPost = async (req: any) => {
  const PostModel = mongoose.model('Posts', PostSchema);
  const { body } = req;
  const post = new PostModel({
    author: {
      firstName: body?.author?.firstName ?? '',
      lastName: body?.author?.lastName ?? '',
      email: body?.author?.email ?? '',
    },
    category: {
      name: body?.category?.name ?? '',
    },
    description: body?.description ?? '',
    title: body?.title ?? '',
    year: body?.year ?? '',
  });
  const result: Document | mongoose.Error = await post.save();
  return result;
};

const getAuthorsByParams = async (req: any) => {
  const PostModel = mongoose.model('Posts', PostSchema);
  const items : any[] = [];
  await PostModel.collection.find().forEach((item) => {
    items.push(item.author);
    // authors.push(new Author(item.author));
  });
  return items;
};

export {
  getPostsByParams,
  createPost,
  getAuthorsByParams,
};
