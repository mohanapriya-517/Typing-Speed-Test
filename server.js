const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

app.get('/', (req, res) => {
  res.send("Hello from the server..");
});

app.use(cors());
app.use(express.json());

const connectToDb = async () => {
  try {
    await mongoose.connect('mongodb://localhost/typingTestDB', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Connected to local MongoDB server...");
  } catch (error) {
    console.error(error);
  }
};

connectToDb();

app.listen(5000, () => {
  console.log("Server is running on port 5000...");
});
