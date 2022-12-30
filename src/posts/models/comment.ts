import CommentType from '../types/comment';

class Comment implements CommentType {
  constructor(body: any) {
    this.starRating = body.starRating ?? 0;
    this.title = body.title ?? '';
  }

  starRating: Number;

  title: string;
}
export default Comment;
