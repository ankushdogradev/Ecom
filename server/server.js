require("dotenv").config({
  path:
    "C:/Users/dogra/Documents/Web Development/Portfolio/FullStack/ecom/.env",
});

const express = require("express");
const connectDB = require("./config/db.js");

// Routes
const productRoutes = require("./routes/productRoutes.js");
const orderRoutes = require("./routes/orderRoutes.js");
const uploadRoutes = require("./routes/uploadRoutes.js");
const userRoutes = require("./routes/userRoutes.js");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

connectDB();

const app = express();

app.get("/", (req, res) => {
  res.send("API is running... ");
});

// server.js -> routes/productRoutes.js
app.use("/api/products", productRoutes);

// Middleware: For Error Handelling
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on PORT ${PORT}`)
);
