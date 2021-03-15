const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./server');

dotenv.config();

let connectDb = () => {
  let connectionString = process.env.CONNECTION_STRING;
  let databaseName = process.env.DATABASE;
  let databasePass = process.env.DATABASE_PASS;

  connectionString = connectionString
    .replace('<password>', databasePass)
    .replace('<DATABASE>', databaseName);

  try {
    mongoose.connect(
      connectionString,
      { useNewUrlParser: true, useUnifiedTopology: true },
      () => {
        // DATABASE CONNECTED
        console.log('Db Connected!');

        // HERE NOW LISTEN FOR THE INCOMMING REQUEST
        const port = process.env.PORT || 5000;

        app.listen(port, () => {
          console.log('Server started listening!');
        });
      }
    );
  } catch (err) {
    console.log(err);
  }
};

connectDb();
