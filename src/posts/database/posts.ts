import * as mongoose from 'mongoose';

class Posts {
  static getConnection = async () => {
    await mongoose.connect('mongodb://127.0.0.1:27017/posts', { keepAlive: true });
  };

  // static checkConnection = async () => {
  //   await Posts.getConnection();
  //   mongoose.connection.on('open', () => {
  //     console.log('Database connected');
  //   });
  //   mongoose.connection.on('error', (error) => {
  //     console.error('connection error:', error);
  //   });
  // };

  static disconnect = async () => {
    await mongoose.disconnect();
  };
}

export default Posts;
