const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const routes = require('./routes/routes');
const cors = require('cors');

dotenv.config();

connectDB();

const app = express();
app.use(express.json());
app.use(cors());



app.use("/api", routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

