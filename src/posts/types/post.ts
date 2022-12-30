import Comment from '../models/comment';

interface PostType {
  readonly title: string
  readonly description: string
  readonly category: string
  readonly author: string
  readonly year: Number
  readonly comments: Comment[]
}
export default PostType;
