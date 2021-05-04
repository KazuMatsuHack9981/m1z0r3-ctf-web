const express    = require("express");
const app        = express();
const bodyParser = require("body-parser");
const routes     = require("./routes");
const mongoose   = require("mongoose");

mongoose.connect(
  `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@mongo:27017/mizoredb`,
  { useNewUrlParser: true, useUnifiedTopology: true }
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

//app.use(express.static("static"));
//app.set("views", path.join(__dirname, "views"));
app.set('view engine', "ejs");

app.use(routes);

// init database data
const initUserController = require("./controller/initUserController");
app.get("/initUser", initUserController.user);

app.all("*", (req, res) => {
  return res.status(404).send({
    message: '404 page not found'
  });
});

app.listen(3000, () => console.log("Listening on port 3004"));
