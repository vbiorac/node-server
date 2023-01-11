import Author from './author';

class Post {
  constructor(body: any) {
    this.author = new Author(body.author);
    this.category = body.category.name ?? '';
    this.description = body.description ?? '';
    this.title = body.title ?? '';
    this.year = body.year ?? '';
    // this.comments = Post.mapComments(body);
  }

  comments: Comment[];

  author: Author;

  category: string;

  description: string;

  title: string;

  year: Number;

  static mapComments(body :any): Comment[] {
    let comments : Comment[] = [];
    comments = comments.concat(body.comment.map((commentData) => new Comment(commentData)));
    return comments;
  }
}
export default Post;
