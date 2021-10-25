const muralModel = require('../models/muralModels');

const getAll = async (_req, res) => {
  const result = await muralModel.getAll();
  return res.status(200).json(result);
};

const createPost = async (req, res) => {
  const result = await muralModel.createPost(req.body)
  return res.status(201).json(result);
};

module.exports = { 
  getAll, 
  createPost,
}