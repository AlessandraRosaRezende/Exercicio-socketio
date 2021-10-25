const connection = require('./connection');

const getAll = () => {
  return connection()
    .then((db) => db.collection('mural').find().toArray());
};

const createPost = async (post) => {
  const db = await connection();
  const result = await db.collection('mural').insertOne(post);
  const { insertedId } = result;
  return insertedId;
}

module.exports = {
  getAll,
  createPost,
}