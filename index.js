const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const movieRoute = require("./routes/movies")
const listRoute = require("./routes/lists")
const path = require('path');

var cors = require('cors')

dotenv.config();

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB Connection Successfull"))
  .catch((err) => {
    console.error(err);
  });

app.use(cors())
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/movies",movieRoute)
app.use("/api/lists",listRoute)

// app.use(express.static(path.join(__dirname, "/bingeflix-frontend-team2-anil/build")));

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '/bingeflix-frontend-team2-anil/build', 'index.html'));
// });

app.listen(process.env.PORT || 8080, () => {
    console.log("Backend server is running!");
});