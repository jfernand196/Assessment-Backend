const express = require("express");
const mongoose = require("mongoose");
// Port server
const PORT = 3000;
// Init express
const app = express();
// Import routes apis
const usersRoutes = require("./api/users/routes");
const favsRoutes = require("./api/favs/routes");
// Connect to mongoDB
mongoose.connect("mongodb://0.0.0.0:27017/favs");
// Mideleware
app.use(express.json());
// Routes
app.use("/auth/local", usersRoutes);
app.use("/api/favs", favsRoutes);
// Start server
app.listen(PORT, () => {
  console.log(`App listening on ${PORT}`);
});
