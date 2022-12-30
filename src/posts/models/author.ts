import AuthorType from '../types/author';

class Author implements AuthorType {
  public constructor(body: any) {
    this.email = body?.email ?? '';
    this.firstName = body?.firstName ?? '';
    this.lastName = body?.lastName ?? '';
  }

  email: string;

  firstName: string;

  lastName: string;
}
export default Author;
