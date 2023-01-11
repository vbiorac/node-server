import { createPost, getAuthorsByParams, getPostsByParams } from '../services/posts';

const getPosts = async (req : any, res:any) => {
  const posts: any[] = await getPostsByParams(req);
  return res.send(posts);
};
const addPost = async (req: any, res: any) => {
  const result = await createPost(req);
  res.send(result);
};
const getAuthors = async (req: any, res:any) => {
  const authors = await getAuthorsByParams(req);
  res.send(authors);
};
export {
  getPosts,
  addPost,
  getAuthors,
};
