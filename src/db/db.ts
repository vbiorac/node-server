import mongoose from 'mongoose';

const mongoDB = mongoose.connect('mongodb://127.0.0.1:27017/posts', { keepAlive: true });

export default mongoDB;
