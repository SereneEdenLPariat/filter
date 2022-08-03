const express = require("express");
const cors = require("cors");
const app = express();
const { Users } = require("./users");

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.get("/", (req, res) => {
  const { q } = req.query;

  const keys = ["first_name", "last_name", "email"];
  const search = (data) => {
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(q))
    );
  };

  res.json(search(Users));
});
app.listen(5000, () => console.log("API is Working!"));
