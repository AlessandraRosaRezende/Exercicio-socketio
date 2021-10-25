const muralModel = require('../models/muralModels');
const socketPort = 4555;

const socketIoServer = require('http').createServer();

const io = require('socket.io')(socketIoServer, {
  cors: {
    origin: "http://localhost:3000",
    method: ["GET", "POST"],
  }
});

const getAll = async (_req, res) => {
  const result = await muralModel.getAll();
  console.log(result);
  return res.status(200).render('mural', result );
  //return res.status(200).json(result);
};

const createPost = async (req, res) => {
  const { nome, post } = req.body;
  const result = await muralModel.createPost(req.body);
  io.emit('mural', result);
  return res.status(201).json(result);
};

module.exports = {
  getAll,
  createPost,
}
socketIoServer.listen(socketPort);