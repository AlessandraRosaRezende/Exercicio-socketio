const { MongoClient } = require('mongodb');

// Local
const MONGO_DB_URL = 'mongodb://localhost:27017/mural';
const DB_NAME = 'mural';

const connection = () => MongoClient
.connect(MONGO_DB_URL, {
useNewUrlParser: true,
useUnifiedTopology: true,
})
.then((conn) => conn.db(DB_NAME))
.catch((err) => {
console.error(err);
process.exit(1);
});

module.exports = connection; 