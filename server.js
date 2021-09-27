const express = require("express");
const mongoose = require("mongoose");


const PORT = process.env.PORT || 3000

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});
// switch these 2 connects
// mongoose.connect( "mongodb://localhost/workout", {
//   useNewUrlParser: true,
//   useFindAndModify: false
// });

// routes
app.use(require("./controllers/apiRoutes.js"));
app.use(require("./controllers/htmlRoutes.js"));
// app.use(require("./controllers/index.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
