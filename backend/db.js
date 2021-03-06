const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./server');

dotenv.config();

let connectDb = async () => {
  let connectionString = process.env.CONNECTION_STRING;
  let databaseName = process.env.DATABASE;
  let databasePass = process.env.DATABASE_PASS;

  connectionString = connectionString
    .replace('<password>', databasePass)
    .replace('<DATABASE>', databaseName);

  try {
    let db = await mongoose.connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    if (db) {
      console.log('Database Connected!');

      const port = process.env.PORT || 5000;

      app.listen(port, () => console.log('Listening for requests!'));
    }
  } catch (err) {
    console.log(err);
  }
};

connectDb();
