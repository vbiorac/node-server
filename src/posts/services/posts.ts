import mongoose, { Document } from 'mongoose';
import Post from '../models/post';
import PostModel from '../../db/models/post';
import AuthorModel from '../../db/models/author';
import Author from '../models/author';
import CategoryModel from '../../db/models/category';

const getPostsByParams = async (req: any) => {
  const items = await PostModel.find({});
  const posts: Post[] = items.map((item) => new Post(item));
  return posts;
};

const createPost = async (req: any) => {
  const { body } = req;

  const author : any = new AuthorModel({
    firstName: body?.author?.firstName ?? '',
    lastName: body?.author?.lastName ?? '',
    email: body?.author?.email ?? '',
  });

  const authorResult = await author.save();

  const category = new CategoryModel({
    name: body?.category?.name ?? '',
  });
  const categoryResult = await category.save();

  const post = new PostModel({
    author: authorResult,
    category: categoryResult,
    title: body?.description,
    description: body?.description,
    year: body?.year,
  });
  const result: Document | mongoose.Error = await post.save();
  return result;
};

const getAuthorsByParams = async (req: any) => {
  const items = await AuthorModel.find({});
  const authors: Author[] = items.map((item) => new Author(item));
  return authors;
};

export {
  getPostsByParams,
  createPost,
  getAuthorsByParams,
};
