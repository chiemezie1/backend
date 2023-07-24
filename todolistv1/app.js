const express = require("express");
const bodyparser = require("body-parser");

const app = express();
app.set("view engine", "ejs");


app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.static("public"));

let day = "";
let items = ["Buy food", "cook the food", "eat the food"];

app.get("/", (req, res) => {
  var today = new Date();
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };
  let day = today.toLocaleDateString("en-US", options);
  res.render("lists", { kindOfDay: day, items: items});
});

app.post("/", (req, res) => {
item = req.body.newItem;
items.push(item);
   res.redirect("/");
});

app.listen(3006, () => {
  console.log("Server started on localhost:3005");
});

