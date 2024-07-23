const express = require('express'); 
const mongoose = require('mongoose'); 
const dotenv = require('dotenv');

const productRoute = require("./routes/product");

const app = express();
app.use(express.json())

dotenv.config();

// ConnectDB
mongoose.connect(process.env.MONGO_URI, {
}).then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// Define Route
app.use("/api", productRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
