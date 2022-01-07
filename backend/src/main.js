const express = require("express");
const app = express();
app.use(express.json());

const cors = require("cors");
const { adduser } = require("./user");
app.use(cors());

app.post("/adduser", async (req, res) => {
  const user = req.body;
  await adduser(user);
  res.json({ message: "record Added" });
});

app.listen(5000, () => console.log("server started.."));
